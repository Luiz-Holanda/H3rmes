export const maskCEP = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o hífen após os 5 primeiros dígitos
    .substring(0, 9); // Limita o tamanho ao formato 00000-000
};

export const maskNumber = (value: string) => {
  return value.replace(/\D/g, ''); // Remove tudo o que não é dígito
};

export const maskDecimal = (value: string) => {
  return value
    .replace(/[^\d.,]/g, '') // Permite apenas dígitos, ponto e vírgula
    .replace(/,/g, '.'); // Padroniza vírgula para ponto
};
