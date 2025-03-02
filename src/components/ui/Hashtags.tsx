export const highlightHashtags = (text: string, hashtagColor: string) => {
  const hashtagRegex = /#[^\s#]+/g;
  return text.replace(hashtagRegex, (match) => {
    return `<span class="${hashtagColor}">${match}</span>`;
  });
};