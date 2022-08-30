
import stringReplacer from "../Utils/stringReplacer"

type StringTestVariables = {
  input: string;
  expected: string;
};

describe("Replaces special characters ! @ # $ % ^ & * . with a space", () => {
  const stringTestVariables: StringTestVariables[] = [
    { input: "hello%world", expected: "hello world" },
    { input: "!hello world", expected: "hello world" },
    { input: ";hello?world!", expected: "hello world" },
    { input: "hello world", expected: "hello world" },
    { input: "my%name*is!adan#@#$", expected: "my name is adan" },
    { input: "this is @a sentence%.", expected: "this is a sentence" },
    { input: "testing#the^input@#", expected: "testing the input" },
  ];

  stringTestVariables.map(function (stv) {
    return it(`Replace special character in ${stv.input}`, () => {
      const actual: string = stringReplacer(stv.input);

      expect(actual).toBe(stv.expected);
    });
  });
});
