export const formatWorkingDay = days => {
  if (!days || days?.length === 0) return 'Day and night';

  const time = { from: '', to: '' };

  days?.forEach(({ isOpen, from, to }) => {
    if (isOpen) {
      time.from = from;
      time.to = to;
    }
  });

  return `${time.from} - ${time.to}`;
};
