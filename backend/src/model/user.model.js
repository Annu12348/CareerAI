import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        //select: false,
    },

    role: {
        type: String,
        enum: ["user", "admin", "superAdmin"],
        default: "user",
    },

    profileImage: {
        url: {
            type: String,
            trim: true,
            maxlength: 2048,
            default: null,
        },

        fileId: {
            type: String,
            trim: true,
            maxlength: 255,
            default: null,
        },

        filePath: {
            type: String,
            trim: true,
            maxlength: 2048,
            default: null,
        },
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    strict: "throw"
})

const userModel = mongoose.model("User", userSchema);
export default userModel;