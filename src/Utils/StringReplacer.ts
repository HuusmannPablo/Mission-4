const regexReplace = /[^a-zA-Z0-9]/g;
const regexDoubleSpace = /\s{2,}/g;

const stringReplacer = (input: string) => {
  const replacedString: string = input
    .replace(regexReplace, " ")
    .replace(regexDoubleSpace, " ")
    .trim();
  return replacedString;
};

export default stringReplacer;
