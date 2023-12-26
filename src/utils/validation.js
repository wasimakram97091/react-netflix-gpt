export const checkValidate = (name, email, password) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name?.current?.value);
  const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email?.current?.value);
  const isPasswordValid = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password?.current?.value);

  if (name?.current && !isNameValid) return "Enter a valid Name";
  if (email?.current && !isEmailValid) return "Email ID is not valid";
  if (password?.current && !isPasswordValid) return "Password is not valid";

  return null;
};
