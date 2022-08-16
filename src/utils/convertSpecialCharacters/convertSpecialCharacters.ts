const convertSpecialCharacters = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0141/g, 'L')
    .replace(/\u0142/g, 'l');

export { convertSpecialCharacters };
