import { isValidHetu, isValidCheckMark } from "./validhetu.js";

// Testit isValidHetu-funktiolle
describe("isValidHetu", () => {
  test("returns true for valid hetu", () => {
    expect(isValidHetu("131052-308T")).toBe(true);
    expect(isValidHetu("010101A6378")).toBe(true);
    expect(isValidHetu("020202+234Y")).toBe(true);
  });

  test("returns false for invalid hetu", () => {
    expect(isValidHetu("030303+345Z")).toBe(false);
    expect(isValidHetu("invalid")).toBe(false);
    expect(isValidHetu("")).toBe(false);
  });
});

// Testit isValidCheckMark-funktiolle
describe("isValidCheckMark", () => {
  test("returns true for valid check mark", () => {
    expect(isValidCheckMark("131052-308T")).toBe(true);
    expect(isValidCheckMark("010101A6378")).toBe(true);
    expect(isValidCheckMark("020202+234Y")).toBe(true);
  });

  test("returns false for invalid check mark", () => {
    expect(isValidCheckMark("030303+345Z")).toBe(false);
    expect(isValidCheckMark("010101A6379")).toBe(false);
    expect(isValidCheckMark("020202+234X")).toBe(false);
  });
});
