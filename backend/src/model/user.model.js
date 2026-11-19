import mongoose from "mongoose";

const authProviderSchema = new mongoose.Schema({
    provider: {
        type: String,
        enum: ["local", "google", "github"],
        required: true,
    },

    providerId: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    _id: false
})

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
        required: function () {
            return this.authProviders?.some(
                (item) => item.provider === "local"
            )
        },
        minlength: 8,
        select: false,
    },

    authProviders: {
        type: [authProviderSchema],
        default: [],
        validate: {
            validator: function (providers) {
                const names = providers.map(
                    (item) => item.provider
                )
                return names.length === new Set(names).size
            },
            message: "Duplicate authentication providers are not allowed.",
        }
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

userSchema.index(
    {
        email: 1
    },

    {
        unique: true
    }
)

userSchema.index(
    {
        "authProviders.provider": 1,
        "authProviders.providerId": 1,
    },
    {
        unique: true
    }
)

const userModel = mongoose.model("User", userSchema);

export default userModel;