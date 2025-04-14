const validateCvv = (cvv) => {
  if (cvv.length !== 3) {
    return "Enter valid CVV";
  }

  return false;
};

const validateCardNum = (num) => {
  const card = num.replaceAll(" ", "");
  
  if (card.length !== 16) {
    return "Enter valid card number";
  }

  return false;
};

function validateExpiry(exp) {
  const expiry = exp.trim();

  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiry)) return "Enter valid expiry";

  const [monthStr, yearStr] = expiry.split("/");
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  // Convert to full year (assumes 20xx range, adjust if needed)
  const fullYear = 2000 + year;

  // Create date as the last day of the expiry month
  const expiryDate = new Date(fullYear, month, 0);

  // Today's date (no time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (expiryDate >= today) {
    return false;
  }

  return "Card is expired";
}

const validateName = (name) => {
  if (name === "") {
    return "Enter name";
  }

  return false;
};

export default function validateCard({ cardNum, cvc, exp, name }) {
  const isValid = {
    num: validateCardNum(cardNum),
    cvv: validateCvv(cvc),
    exp: validateExpiry(exp),
    name: validateName(name),
  };
  let isError = false;

  if (isValid.num || isValid.cvv || isValid.exp || isValid.name) {
    isError = true;
  }

  return { isValid, isError };
}
