export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phone: string): string => {
  const cc = phone.slice(0, 2);
  const aa = phone.slice(2, 4);
  const num1 = phone.slice(4, 9);
  const num2 = phone.slice(9, 13);
  return `+${cc} (${aa}) ${num1}-${num2}`;
};
