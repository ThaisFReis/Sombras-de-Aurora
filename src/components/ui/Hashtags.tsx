export const highlightHashtags = (text: string) => {
  // Regex para encontrar hashtags com caracteres especiais
  const hashtagRegex = /#[^\s#]+/g;

  // Substitui as hashtags por um span com a cor #969EF5
  return text.replace(hashtagRegex, (match) => {
    return `<span style="color: #969EF5;">${match}</span>`;
  });
};