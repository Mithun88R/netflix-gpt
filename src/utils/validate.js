export const checkValidData = (name, email, password, isSignUp) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isSignUp && !isNameValid) {
    return { isValid: false, message: "Name is not valid" };
  }
  if (!isEmailValid) {
    return { isValid: false, message: "Email is not valid" };
  }
  if (!isPasswordValid) {
    return { isValid: false, message: "Password is not valid" };
  }
  return { isValid: true, message: "" };
};
