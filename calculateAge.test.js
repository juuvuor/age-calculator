import { getDaysInPreviousMonth, getBirthDateFromHetu } from "./calculateAge";

// Testit getDaysInPreviousMonth-funktiolle
describe("getDaysInPreviousMonth", () => {
  test("returns correct number of days for January", () => {
    const date = new Date(2023, 0, 15); // 15. tammikuuta 2023
    expect(getDaysInPreviousMonth(date)).toBe(31); // Joulukuu 2022
  });

  test("returns correct number of days for March", () => {
    const date = new Date(2023, 2, 15); // 15. maaliskuuta 2023
    expect(getDaysInPreviousMonth(date)).toBe(28); // Helmikuu 2023 (ei karkausvuosi)
  });

  test("returns correct number of days for March in a leap year", () => {
    const date = new Date(2024, 2, 15); // 15. maaliskuuta 2024
    expect(getDaysInPreviousMonth(date)).toBe(29); // Helmikuu 2024 (karkausvuosi)
  });
});

// Testit getBirthDateFromHetu-funktiolle
describe("getBirthDateFromHetu", () => {
  test("returns correct birth date for hetu with + sign", () => {
    const hetu = "131052+308T";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(1852, 9, 13)); // 13. lokakuuta 1852
  });

  test("returns correct birth date for hetu with - sign", () => {
    const hetu = "010101-123N";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(1901, 0, 1)); // 1. tammikuuta 1901
  });

  test("returns correct birth date for hetu with A sign", () => {
    const hetu = "010101A123P";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(2001, 0, 1)); // 1. tammikuuta 2001
  });

  test("throws error for invalid century sign", () => {
    const hetu = "010101B123P";
    expect(() => getBirthDateFromHetu(hetu)).toThrow(
      "Virheellinen vuosisadan merkki hetussa"
    );
  });
});
