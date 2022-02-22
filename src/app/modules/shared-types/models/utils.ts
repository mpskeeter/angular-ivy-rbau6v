export function padStr(i: number): string {
  return i < 10 ? '0' + i : '' + i;
}

export function convertDate(date: Date): string {
  if (!date) return;
  const year = padStr(date.getFullYear());
  const month = padStr(date.getMonth() + 1);
  const day = padStr(date.getDate());
  const newDate = year + '-' + month + '-' + day;
  return newDate;
}
