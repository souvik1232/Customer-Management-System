const uppercaseRegExp = /(?=.*?[A-Z])/;
const lowercaseRegExp = /(?=.*?[a-z])/;
const digitsRegExp = /(?=.*?[0-9])/;
const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
// Checks if Password has one-upper case one lower-case one special charachter and one number
const validatePassword = (pass) => {
  const passwordLength = pass.length;
  const uppercasePassword = uppercaseRegExp.test(pass);
  const lowercasePassword = lowercaseRegExp.test(pass);
  const digitsPassword = digitsRegExp.test(pass);
  const specialCharPassword = specialCharRegExp.test(pass);
  if (
    passwordLength === 0 ||
    passwordLength < 8 ||
    !uppercasePassword ||
    !lowercasePassword ||
    !digitsPassword ||
    !specialCharPassword
  ) {
    return false;
  }
  return true;
};
export default validatePassword;
