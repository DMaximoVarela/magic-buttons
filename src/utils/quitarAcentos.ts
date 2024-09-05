export const quitarAcentos = (str) => {
  return str.replace(/[áéíóúÁÉÍÓÚñÑ]/gi, (c) => {
    switch (c) {
      case "á":
      case "Á":
        return "a";
      case "é":
      case "É":
        return "e";
      case "í":
      case "Í":
        return "i";
      case "ó":
      case "Ó":
        return "o";
      case "ú":
      case "Ú":
        return "u";
      case "ñ":
      case "Ñ":
        return "n";
    }
  });
};
