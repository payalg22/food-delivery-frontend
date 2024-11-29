const validatePassword = (val) => {
  if (val == "") {
    return "Please enter password";
  }
  if (val.length < 8) {
    return "Password should contain atleast 8 characters";
  }

  return false;
};

const validateEmail = (val) => {
  if (val == "") {
    return "Please enter email";
  }
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegEx.test(val)) {
    return "Please enter valid email";
  }

  return false;
};

const validateName = (val) => {
  if (val == "") {
    return "Please enter name";
  }

  return false;
};

const validatePhone = (val) => {
  if (val == "") {
    return "Please enter phone number";
  }
  if (val.length != 10) {
    return "Please enter a valid phone number";
  }

  return false;
};

export const validateLogin = ({ email, password }) => {
  const isErrorEmail = validateEmail(email);
  const isErrorPassword = !password ? "Please enter password" : false;

  if (!isErrorEmail && !isErrorPassword) {
    return true;
  }

  return { email: isErrorEmail, password: isErrorPassword };
};

export const validateSignUp = ({ name, phone, email, password }) => {
  const isErrorName = validateName(name);
  const isErrorPhone = validatePhone(phone);
  const isErrorEmail = validateEmail(email);
  const isErrorPassword = validatePassword(password);

  if (!isErrorEmail && !isErrorPassword && !isErrorName && !isErrorPhone) {
    return true;
  }

  return {
    name: isErrorName,
    phone: isErrorPhone,
    email: isErrorEmail,
    password: isErrorPassword,
  };
};
