export const isNotEmpty = data => {
  console.log(data);
  if (!data) return false;
  return data && Object.keys(data).length > 0;
};
