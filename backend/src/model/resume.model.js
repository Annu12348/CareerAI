import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {

    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    personalInfo: {
      fullName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },

      phone: {
        type: String,
        trim: true,
      },

      location: {
        type: String,
        trim: true,
        maxlength: 150,
      },

      profileImage: {
        type: String,
        trim: true,
      },

      linkedin: {
        type: String,
        trim: true,
      },

      github: {
        type: String,
        trim: true,
      },

      portfolio: {
        type: String,
        trim: true,
      },
    },

    summary: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },

    skills: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        level: {
          type: String,
          enum: ["beginner", "intermediate", "advanced", "expert"],
          default: "intermediate",
        },
      },
    ],

    education: [
      {
        degree: {
          type: String,
          required: true,
          trim: true,
        },

        institution: {
          type: String,
          required: true,
          trim: true,
        },

        startDate: {
          type: Date,
        },

        endDate: {
          type: Date,
        },

        description: {
          type: String,
          trim: true,
          maxlength: 1500,
        },
      },
    ],

    experience: [
      {
        company: {
          type: String,
          required: true,
          trim: true,
        },

        position: {
          type: String,
          required: true,
          trim: true,
        },

        startDate: {
          type: Date,
        },

        endDate: {
          type: Date,
        },

        currentlyWorking: {
          type: Boolean,
          default: false,
        },

        description: {
          type: String,
          trim: true,
          maxlength: 3000,
        },
      },
    ],

    projects: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },

        description: {
          type: String,
          trim: true,
          maxlength: 2500,
        },

        technologies: [
          {
            type: String,
            trim: true,
          },
        ],

        githubUrl: {
          type: String,
          trim: true,
        },

        liveUrl: {
          type: String,
          trim: true,
        },
      },
    ],

    certifications: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        organization: {
          type: String,
          trim: true,
        },

        issueDate: {
          type: Date,
        },

        credentialUrl: {
          type: String,
          trim: true,
        },
      },
    ],

    achievements: [
      {
        type: String,
        trim: true,
      },
    ],

    template: {
      type: String,
      default: "modern",
      trim: true,
    },

    targetJobRole: {
      type: String,
      trim: true,
    },

    targetJobDescription: {
      type: String,
      trim: true,
      maxlength: 5000,
    },

    atsAnalysis: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },

      matchedKeywords: [
        {
          type: String,
          trim: true,
        },
      ],

      missingKeywords: [
        {
          type: String,
          trim: true,
        },
      ],

      strengths: [
        {
          type: String,
          trim: true,
        },
      ],

      improvements: [
        {
          type: String,
          trim: true,
        },
      ],

      analyzedAt: {
        type: Date,
      },
    },

    aiSuggestions: [
      {
        category: {
          type: String,
          trim: true,
        },

        message: {
          type: String,
          required: true,
          trim: true,
        },

        priority: {
          type: String,
          enum: ["low", "medium", "high"],
          default: "medium",
        },

        resolved: {
          type: Boolean,
          default: false,
        },
      },
    ],

    ai: {
      generated: {
        type: Boolean,
        default: false,
      },

      provider: {
        type: String,
        trim: true,
      },

      model: {
        type: String,
        trim: true,
      },

      lastGeneratedAt: {
        type: Date,
      },
    },

    status: {
      type: String,
      enum: ["draft", "completed"],
      default: "draft",
    },

    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },

    pdfUrl: {
      type: String,
      trim: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

resumeSchema.index({ userId: 1 });
resumeSchema.index({ userId: 1, createdAt: -1 });

const resumeModel = mongoose.model("Resume", resumeSchema);
export default resumeModel;

