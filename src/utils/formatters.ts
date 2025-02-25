export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phone: string): string => {
  const cc = phone.slice(0, 2);
  const ac = phone.slice(2, 4);
  const prefix = phone.slice(4, 9);
  const number = phone.slice(9, 13);
  return `+${cc} (${ac}) ${prefix}-${number}`;
};
