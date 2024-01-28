const capitalize = require("./jest");

test("Capitalize first letter in string", () => {
  expect(capitalize("ever costa")).toBe("Ever costa");
});
