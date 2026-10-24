import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      immutable: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Resume title must be at least 2 characters"],
      maxlength: [100, "Resume title cannot exceed 100 characters"],
    },

    personalInfo: {
      fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 254,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
      },

      phone: {
        type: String,
        trim: true,
        maxlength: 30,
      },

      location: {
        type: String,
        trim: true,
        maxlength: 150,
      },

      profileImage: {
        url: {
          type: String,
          trim: true,
          maxlength: 2048,
        },

        fileId: {
          type: String,
          trim: true,
          maxlength: 255,
        },
        
        filePath: {
          type: String,
          trim: true,
          maxlength: 2048,
        },
      },

      linkedin: {
        type: String,
        trim: true,
        maxlength: 2048,
      },

      github: {
        type: String,
        trim: true,
        maxlength: 2048,
      },

      portfolio: {
        type: String,
        trim: true,
        maxlength: 2048,
      },
    },

    summary: {
      type: String,
      trim: true,
      maxlength: [3000, "Summary cannot exceed 3000 characters"],
    },

    skills: {
      type: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
          },

          level: {
            type: String,
            enum: ["beginner", "intermediate", "advanced", "expert"],
            default: "intermediate",
          },
        },
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 100,
        message: "A maximum of 100 skills is allowed",
      },
    },

    education: {
      type: [
        {
          degree: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
          },

          institution: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
          },

          startDate: Date,

          endDate: {
            type: Date,
            validate: {
              validator: function (value) {
                return !(
                  value &&
                  this.startDate &&
                  value < this.startDate
                );
              },
              message: "Education end date cannot precede start date",
            },
          },
          description: {
            type: String,
            trim: true,
            maxlength: 2000,
          },
        },
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 20,
        message: "A maximum of 20 education entries is allowed",
      },
    },

    experience: {
      type: [
        {
          company: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
          },

          position: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
          },

          startDate: Date,

          endDate: {
            type: Date,
            validate: {
              validator: function (value) {
                if (this.currentlyWorking && value) return false;

                return !(
                  value &&
                  this.startDate &&
                  value < this.startDate
                );
              },
              message:
                "Invalid experience dates or currently-working status",
            },
          },

          currentlyWorking: {
            type: Boolean,
            default: false,
          },

          description: {
            type: String,
            trim: true,
            maxlength: 4000,
          },
        }
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 50,
        message: "A maximum of 50 experience entries is allowed",
      },
    },

    projects: {
      type: [
        {
          title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
          },

          description: {
            type: String,
            trim: true,
            maxlength: 3000,
          },

          technologies: {
            type: [
              {
                type: String,
                trim: true,
                maxlength: 100,
              },
            ],
            default: [],
            validate: {
              validator: (items) => items.length <= 50,
              message: "A maximum of 50 technologies is allowed per project",
            },
          },

          githubUrl: {
            type: String,
            trim: true,
          },

          liveUrl: {
            type: String,
            trim: true,
          },

          githubUrl: {
            type: String,
            trim: true,
            maxlength: 2048,
          },

          liveUrl: {
            type: String,
            trim: true,
            maxlength: 2048,
          },
        },
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 50,
        message: "A maximum of 50 projects is allowed",
      },
    },

    certifications: {
      type: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
          },

          organization: {
            type: String,
            trim: true,
            maxlength: 200,
          },

          issueDate: Date,

          credentialUrl: {
            type: String,
            trim: true,
            maxlength: 2048,
          },
        },
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 50,
        message: "A maximum of 50 certifications is allowed",
      },
    },

    achievements: {
      type: [
        {
          type: String,
          trim: true,
          maxlength: 1000,
        },
      ],
      default: [],
      validate: {
        validator: (items) => items.length <= 100,
        message: "A maximum of 100 achievements is allowed",
      },
    },

    template: {
      type: String,
      enum: ["modern", "professional", "minimal", "creative"],
      default: "modern",
    },

    targetJobRole: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    targetJobDescription: {
      type: String,
      trim: true,
      maxlength: 10000,
    },

    atsAnalysis: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },

      matchedKeywords: {
        type: [{ type: String, trim: true, maxlength: 100 }],
        default: [],
      },

      missingKeywords: {
        type: [{ type: String, trim: true, maxlength: 100 }],
        default: [],
      },

      strengths: {
        type: [{ type: String, trim: true, maxlength: 1000 }],
        default: [],
      },

      improvements: {
        type: [{ type: String, trim: true, maxlength: 1000 }],
        default: [],
      },

      analyzedAt: Date,
    },

    // 12. AI suggestions
    aiSuggestions: {
      type: [
        {
          category: {
            type: String,
            enum: [
              "summary",
              "skills",
              "experience",
              "projects",
              "education",
              "keywords",
              "general",
            ],
            required: true,
          },

          message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 3000,
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
      default: [],
    },

    // 13. AI generation metadata
    ai: {
      generated: {
        type: Boolean,
        default: false,
      },

      provider: {
        type: String,
        enum: ["gemini", "openai"],
      },

      model: {
        type: String,
        trim: true,
        maxlength: 100,
      },

      lastGeneratedAt: Date,
    },

    // 14. Lifecycle and visibility
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
      maxlength: 2048,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: "__v",
    optimisticConcurrency: true,
    strict: "throw",
  }
);

resumeSchema.index({ 
  userId: 1,
  deletedAt: 1,
  createdAt: -1,
 });

const resumeModel = mongoose.model("Resume", resumeSchema);
export default resumeModel;
