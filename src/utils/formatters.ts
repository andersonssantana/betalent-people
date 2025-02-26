/**
 * Formata uma data ISO para o formato DD/MM/YYYY
 * @param isoDate Data em formato ISO
 * @returns String formatada no padrão brasileiro
 */
export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};

/**
 * Formata um número de telefone internacional
 * @param phone Número de telefone (formato: CCAAPPPPPNNNN)
 * @returns Telefone formatado: +CC (AA) PPPPP-NNNN
 */
export const formatPhone = (phone: string): string => {
  // Garante que o telefone tem o formato esperado
  if (!phone || phone.length < 13) return phone;
  
  const cc = phone.slice(0, 2);
  const ac = phone.slice(2, 4);
  const prefix = phone.slice(4, 9);
  const number = phone.slice(9, 13);
  
  return `+${cc} (${ac}) ${prefix}-${number}`;
};
