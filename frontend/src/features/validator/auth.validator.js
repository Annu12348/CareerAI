const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

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

export const validationLogin = (formData) => {
    const errors = {};

    const email = formData.email.trim();
    const password = formData.password;

    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "invalid email or password";
    }

    if (!password) {
        errors.password = "inValid email or password";
    }

    return errors;
}

export const validationForgotPassword = (email) => {
    const errors = {};

    email = email.trim().toLowerCase();

    if (!email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        errors.email = "Enter a valid email address";
    }

    return errors;
};

export const validationVerifyOTP = (otp) => {
    const errors = {};

    otp = String(otp || "").trim();

    if (!otp) {
        errors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(otp)) {
        errors.otp = "OTP must be exactly 6 digits";
    }

    return errors;
};

export const validationResetPassword = (formData) => {
    const errors = {};

    const newPassword = formData.newPassword || "";
    const confirmPassword = formData.confirmPassword || "";

    if (!newPassword) {
        errors.newPassword = "New password is required";
    } else if (!passwordRegex.test(newPassword)) {
        errors.newPassword =
            "Password must be 8+ characters with uppercase, lowercase, number and special character";
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
    } else if (newPassword !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};
//3 hourse done
//04:00 to