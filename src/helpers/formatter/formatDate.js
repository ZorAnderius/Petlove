export const formattedDateWithSeparator = (date, separator) => {
  const validDate = new Date(date);
  const day = String(validDate.getDate()).padStart(2, '0');
  const month = String(validDate.getMonth() + 1).padStart(2, '0');
  const year = validDate.getFullYear();
  return `${day}${separator}${month}${separator}${year}`;
};
