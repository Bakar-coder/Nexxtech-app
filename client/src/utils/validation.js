export const isValidEmail = email => {
  return /^[^\s@]+@[^@]+\.[^\s@]+$/.test(email);
};
