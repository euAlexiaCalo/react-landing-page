export const getInitials = (name: string) => {
  // Retorna string vazia se o nome for vazio ou nulo
  if (!name) return "";

  // Remove espaços no começo e no fim e divide o nome em um array toda vez que encontrar um ou mais espaços entre as palavras
  const names = name.trim().split(/\s+/);

  // Se o array tiver apenas um nome
  if (names.length === 1) {
    // Retorna o nome da posição 0, pega o caractere do índie 0 e transforma em maiúsculo
    return names[0].charAt(0).toUpperCase();
  }

  // Retorna a concatenação do primeiro caractere do primeiro nome e do último nome, ambos em maiúsculo
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};