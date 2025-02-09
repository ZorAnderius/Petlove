export const formatted_date = date => {
  const validDate = new Date(date);
  return validDate.toLocaleDateString('en-GB');
};
