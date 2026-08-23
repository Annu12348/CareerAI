export const validationSignup = (formData) => {
    const errors = {};

    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const firstName = formData.firstName.trim();
    if (!firstName) {
        errors.firstName = "First name is required";
    } else if (!nameRegex.test(firstName)) {
        errors.firstName =
            "First name must contain 2-50 letters only";
    }

    const lastName = formData.lastName.trim();
    if (!lastName) {
        errors.lastName = "Last name is required";
    } else if (!nameRegex.test(lastName)) {
        errors.lastName =
            "Last name must contain 2-50 letters only";
    }

    const email = formData.email.trim().toLowerCase();
    if (!email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        errors.email = "Enter a valid email address";
    }

    const password = formData.password;
    if (!password) {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
        errors.password =
            "Password must be 8+ characters with uppercase, lowercase, number and special character";
    }

    return errors;
};