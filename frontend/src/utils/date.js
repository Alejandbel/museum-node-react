export function getFormattedDate(date) {
  const newDate = new Date(date);
  return newDate.toISOString().split('T')[0];
}
