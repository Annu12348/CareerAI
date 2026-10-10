class IUserRepository {
    async register (data) {
        throw new Error("method not implement")
    }

    async findByEmail(email) {
        throw new Error("method not implement")
    }

    async findById(userId) {
        throw new Error("method not implement")
    }

    async resetPasswordByEmail(email, hashedPassword) {
        throw new Error("method not implement")
    }
} 

export default IUserRepository;