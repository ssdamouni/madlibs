const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it returns a string", () => {
    expect(typeof addCommas(12345678)).toBe("string");
  });
  test("it returns a number with correct commas", () => {
    expect(addCommas(12345678)).toBe("12,345,678");
  });
  test("it works with negatives", () => {
    expect(addCommas(112345678)).toBe("112,345,678");
  });
});
