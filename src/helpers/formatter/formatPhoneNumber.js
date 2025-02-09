export const formatPhoneNumber = phone => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.startsWith('380') && cleaned.length === 12) {
    return `+38 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(
      9,
      11,
    )} ${cleaned.slice(11, 13)}`;
  } else if (cleaned.startsWith('0') && cleaned.length === 10) {
    if (cleaned.startsWith('0800')) {
      return `0–800–${cleaned.slice(4, 7)}–${cleaned.slice(7, 10)}`;
    } else if (
      cleaned.startsWith('032') ||
      cleaned.startsWith('044') ||
      cleaned.startsWith('048')
    ) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        8,
      )}-${cleaned.slice(8, 10)}`;
    } else {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(
        6,
        10,
      )}`;
    }
  }

  return phone;
};
