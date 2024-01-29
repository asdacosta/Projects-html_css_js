const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./jest");

test("Capitalize first letter in string", () => {
  expect(capitalize("ever costa")).toBe("Ever costa");
});

test("Reverse string", () => {
  const reversed = reverseString("ever");
  expect(reversed).toBe("reve");
});

test("Calculations!", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.divide(1, 1)).toBe(1);
  expect(calculator.multiply(1, 1)).toBe(1);
});

test("Encrypt normal string in Caesar Cipher", () => {
  expect(caesarCipher("ever", 3)).toBe("hyhu");
});

test("Encrypt case sensitive string in Caesar Cipher", () => {
  expect(caesarCipher("Ever", 3)).toBe("Hyhu");
});

test("Encrypt wrapping from z to a string in Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Encrypt string containing punctuations in Caesar Cipher", () => {
  expect(caesarCipher("ever costa!", 3)).toBe("hyhu frvwd!");
});

test("All analyzing properties", () => {
  const array = [1, 8, 3, 4, 2, 6];
  const instance = analyzeArray(array);

  expect(instance.average).toBe(4);
  expect(instance.min).toBe(1);
  expect(instance.max).toBe(8);
  expect(instance.length).toBe(6);
});
