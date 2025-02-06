const applyMask = (value: string, mask: string): string => {
  let maskedValue = "";
  let valueIndex = 0;

  for (const maskChar of mask) {
    const valueChar = value[valueIndex];

    if (valueChar === undefined) break;

    if (maskChar === "Z") {
      // Permite apenas letras
      if (/[A-Za-z]/.test(valueChar)) {
        maskedValue += valueChar.toUpperCase(); // Converte para maiúscula
        valueIndex++;
      }
    } else if (maskChar === "9") {
      // Permite apenas números
      if (/\d/.test(valueChar)) {
        maskedValue += valueChar;
        valueIndex++;
      }
    } else {
      // Caracteres especiais da máscara (como "-", "/", etc.)
      maskedValue += maskChar;
      if (valueChar === maskChar) valueIndex++; // Avança se o usuário digitou o caractere especial
    }
  }

  return maskedValue;
};

export default applyMask;
