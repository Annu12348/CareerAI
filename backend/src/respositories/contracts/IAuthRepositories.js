class IAuthRepository {
    async authRegister (data) {
        throw new Error("method not implement")
    }

    async authFindByEmail(email) {
        throw new Error("method not implement")
    }
} 

export default IAuthRepository;