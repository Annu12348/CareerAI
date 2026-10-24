import multer from "multer";
import AppError from "../utils/error.js";

const MAX_FILE_SIZE = 5 * 1024 * 1024;       //5MB

const allowedMimeTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
])

export const upload = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: MAX_FILE_SIZE,
        files: 1,
        fields: 0,
        parts: 12
    },

    fileFilter: (req, file, callback) => {
        if (!allowedMimeTypes.has(file.mimetype)) {
            return callback(
                new AppError(
                    "Only JPEG, PNG and WebP images are allowed", 400
                )
            )
        }
        callback(null, true)
    }
})
