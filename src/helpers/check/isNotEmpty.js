export const isNotEmpty = data => {
  if (!data) return false;
  return data && Object.keys(data).length > 0;
};
