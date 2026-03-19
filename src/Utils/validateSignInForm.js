export const validateSignInForm = (name,email, password, isSignInForm) => {
    const passwordMinLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    
    if (!isSignInForm) {
        if (!name || name.trim().length === 0) {
            return "Name is required for sign up.";
        }
    }
    
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    if (!passwordRegex.test(password)) {
        return `Password must be at least ${passwordMinLength} characters long and contain at least one letter and one number.`;
    }
    return null; // No errors
}