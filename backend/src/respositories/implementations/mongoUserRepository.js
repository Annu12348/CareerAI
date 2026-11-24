import userModel from "../../model/user.model.js";
import AppError from "../../utils/error.js";
import IUserRepository from "../contracts/IUserRepository.js";

class mongoUserRepository extends IUserRepository {
    async register(data) {
        try {
            const res = await userModel.create(data);

            return res;
        } catch (error) {
            throw new AppError(`Failed to register user: ${error.message}`, 500, error)
        }
    }

    async findByEmail(email) {
        try {
            const user = await userModel.findOne({ email });
            return user;
        } catch (error) {
            throw new AppError(`Failed to find user by email: ${error.message}`, 500, error)
        }
    }

    async findById(userId) {
        try {
            const user = await userModel.findById(userId)
            return user;
        } catch (error) {
            throw new AppError(`Failed to find user by Id: ${error.message}`, 500, error)
        }
    }

    async resetPasswordByEmail(email, hashedPassword) {
        try {
            const user = await userModel.findOneAndUpdate(
                {
                    email
                }, {
                $set: {
                    password: hashedPassword
                }
            }, {
                new: true,
                runValidators: true,
            }
            ).select("_id, email")

            return user;
        } catch (error) {
            throw new AppError(`Failed to updated user by email: ${error.message}`, 500, error)
        }
    }

    async profileUpdate(image, userId) {
        try {
            const user = await userModel.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        profileImage: image
                    }
                },
                {
                    new: true,
                    runValidators: true
                }
            ).select("profileImage");

            return user;
        } catch (error) {
            throw new AppError(`failed to update profile: ${error.message}`, 500)
        }
    }

    async findByGoogleId(googleId) {
        try {
            const user = await userModel.findOne({
                authProviders: {
                    $elemMatch: {
                        provider: "google",
                        providerId: googleId,
                    }
                }
            })

            return user;
        } catch (error) {
            throw new AppError(`Failed to find user by Google ID: ${error.message}`, 500, error)
        }
    }

    async linkGoogleAccount(userId, googleId) {
        try {
            const user = await userModel.findOneAndUpdate(
                {
                    _id: userId,
                    authProviders: {
                        $not: {
                            $elemMatch: {
                                provider: "google"
                            }
                        },
                    }
                },
                {
                    $addToSet: {
                        authProviders: {
                            provider: "google",
                            providerId: googleId,
                        },
                    }
                },
                {
                    new: true,
                    runValidators: true
                }
            )

            return user;
        } catch (error) {
            throw new AppError(`Failed to find user by Google ID: ${error.message}`, 500, error)
        }
    }

    async hasGoogleAccount(userId) {
        try {
            const user = await userModel.exists(
                {
                    _id: userId,
                    authProviders: {
                        $elemMatch: {
                            provider: "google",
                        },
                    },
                }
            )

            return user;
        } catch (error) {
            throw new AppError(`Failed to check Google account: ${error.message}`, 500, error)
        }
    }

    async findByGithubId(githubId) {
        try {
            const user = await userModel.findOne({
                authProviders: {
                    $elemMatch: {
                        provider: "github",
                        providerId: githubId,
                    }
                }
            })

            return user;
        } catch (error) {
            throw new AppError(`Failed to find user by GitHub ID: ${error.message}`, 500, error)
        }
    }

    async linkGithubAccount(userId, githubId) {
        try {
            const user = await userModel.findOneAndUpdate(
                {
                    _id: userId,
                    authProviders: {
                        $not: {
                            $elemMatch: {
                                provider: "github"
                            }
                        }
                    }
                },
                {
                    $addToSet: {
                        authProviders: {
                            provider: "github",
                            providerId: githubId
                        }
                    }
                },
                {
                    new: true,
                    runValidators: true
                }
            )

            return user;
        } catch (error) {
            throw new AppError(`Failed to link GitHub account: ${error.message}`, 500, error)
        }
    }

    async hasGithubAccount(userId) {
        try {
            const user = await userModel.exists({
                _id: userId,
                authProviders: {
                    $elemMatch: {
                        provider: "github"
                    }
                }
            })

            return user;
        } catch (error) {
            throw new AppError(`Failed to check GitHub account: ${error.message}`, 500, error)
        }
    }
}

export default mongoUserRepository;