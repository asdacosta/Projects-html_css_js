const { capitalize, reverseString, calculator } = require("./jest");

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
});
