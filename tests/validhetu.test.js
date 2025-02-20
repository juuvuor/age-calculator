import { isValidHetu, isValidCheckMark } from "../src/validhetu";

// Testit isValidHetu-funktiolle
describe("isValidHetu", () => {
  test("palautetaan true validista hetusta", () => {
    expect(isValidHetu("131052-308T")).toBe(true);
    expect(isValidHetu("010101A6378")).toBe(true);
    expect(isValidHetu("020202+234Y")).toBe(true);
  });

  test("palautetaan false väärästä hetusta", () => {
    expect(isValidHetu("030303+345Z")).toBe(false);
    expect(isValidHetu("invalid")).toBe(false);
    expect(isValidHetu("")).toBe(false);
  });
});

// Testit isValidCheckMark-funktiolle
describe("isValidCheckMark", () => {
  test("palautetaan true oikeasta tarkistusmerkistä", () => {
    expect(isValidCheckMark("131052-308T")).toBe(true);
    expect(isValidCheckMark("010101A6378")).toBe(true);
    expect(isValidCheckMark("020202+234Y")).toBe(true);
  });

  test("palautetaan false väärästä tarkistusmerkistä", () => {
    expect(isValidCheckMark("030303+345Z")).toBe(false);
    expect(isValidCheckMark("010101A6379")).toBe(false);
    expect(isValidCheckMark("020202+234X")).toBe(false);
  });
});
