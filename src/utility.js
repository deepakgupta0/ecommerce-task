/**
 * Rupees component for formatting and displaying amounts in Indian Rupees (INR).
 *
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted amount in INR.
 */
export const formatToRupee = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};
