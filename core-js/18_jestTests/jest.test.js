const { capitalize, reverseString, calculator, caesarCipher } = require("./jest");

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

test.skip("Encrypt normal string in Caesar Cipher", () => {
  expect(caesarCipher("hver")).toBe("hyhu");
});

test.skip("Encrypt case sensitive string in Caesar Cipher", () => {
  expect(caesarCipher("Ever")).toBe("Hyhu");
});

test.skip("Encrypt wrapping from z to a string in Caesar Cipher", () => {
  expect(caesarCipher("xyz")).toBe("abc");
});

test.skip("Encrypt string containing punctuations in Caesar Cipher", () => {
  expect(caesarCipher("ever costa!")).toBe("hyhu frvwd!");
});
