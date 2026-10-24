import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";
import { imagekit } from "../config/imagekit/imagekit.js";
import AppError from "../utils/error.js";

const MAX_FILE_SIZE = 5 * 1024 * 1024

const allowedTypes = new Map([
    ["image/jpeg", "jpg"],
    ["image/png", "png"],
    ["image/webp", "webp"],
])

const allowedPurposes = new Set(["profile", "resume"])

class ImageKitService {
    async uploadImage(file, userId, purpose) {
        if (!userId) {
            throw new AppError("Authentication required", 401);
        }

        if (!file?.buffer || !file.size) {
            throw new AppError("Image file is required", 400);
        }

        if (!allowedPurposes.has(purpose)) {
            throw new AppError("Invalid upload purpose", 400);
        }

        if (file.size > MAX_FILE_SIZE) {
            throw new AppError("Image size must not exceed 5 MB", 413);
        }

        let detectedType = await fileTypeFromBuffer(file.buffer);

        if (!detectedType || !allowedTypes.has(detectedType.mime)) {
            throw new AppError("Invalid image file content", 400);
        }

        const extension = allowedTypes.get(detectedType.mime);
        const fileName = `${randomUUID()}.${extension}`

        const folder =
            purpose === "profile"
                ? `/careerai/users/${userId}/profile`
                : `/careerai/users/${userId}/resume-photo`;

        try {
            const result = await imagekit.upload({
                file: file.buffer.toString("base64"),
                fileName,
                folder,
                useUniqueFileName: true,
                tags: ["careerai", purpose],
            });

            if (!result?.url || !result?.fileId || !result?.filePath) {
                throw new Error("ImageKit returned incomplete upload metadata");
            }

            return {
                url: result.url,
                fileId: result.fileId,
                filePath: result.filePath,
            };
        } catch (error) {
            // Replace with your central structured logger in production.
            if (error instanceof AppError) throw error;

            throw new AppError(
                "Image upload failed. Please try again.",
                502
            );
        }
    }

    async deleteImage(fileId) {
        if (!fileId) return;

        try {
            await imagekit.deleteFile(fileId);
        } catch (error) {
            throw new AppError("Image cleanup failed", 502);
        }
    }
}

export default new ImageKitService();