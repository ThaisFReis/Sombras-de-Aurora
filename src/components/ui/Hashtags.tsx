export const highlightHashtags = (text: string, hashtagColor: string) => {
  // Regex para encontrar hashtags com caracteres especiais
  const hashtagRegex = /#[^\s#]+/g;

  // Substitui as hashtags por um span com a cor do tema
  return text.replace(hashtagRegex, (match) => {
    return `<span class="${hashtagColor}">${match}</span>`;
  });
};