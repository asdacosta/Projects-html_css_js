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

test.skip("Encrypt in Caesar Cipher", () => {
  // Test for case
  expect(caesarCipher("Ever")).toBe("Hyhu");
  // Test wrapping from z t0 a
  expect(caesarCipher("xyz")).toBe("abc");
  // Test punctuation
  expect(caesarCipher("ever costa!")).toBe("hyhu frvwd!");
});
