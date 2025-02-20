import {
  getDaysInPreviousMonth,
  getBirthDateFromHetu,
} from "../src/calculateAge";

// Testit getDaysInPreviousMonth-funktiolle
describe("getDaysInPreviousMonth", () => {
  test("palauttaa oikean päivien lukumäärän Joulukuulle", () => {
    const date = new Date(2023, 0, 15); // 15. tammikuuta 2023
    expect(getDaysInPreviousMonth(date)).toBe(31); // Joulukuu 2022
  });

  test("palauttaa oikean päivien lukumäärän helmikuulle", () => {
    const date = new Date(2023, 2, 15); // 15. maaliskuuta 2023
    expect(getDaysInPreviousMonth(date)).toBe(28); // Helmikuu 2023 (ei karkausvuosi)
  });

  test("palauttaa oikean päivien lukumäärän helmiuukke karkausvuonna", () => {
    const date = new Date(2024, 2, 15); // 15. maaliskuuta 2024
    expect(getDaysInPreviousMonth(date)).toBe(29); // Helmikuu 2024 (karkausvuosi)
  });
});

// Testit getBirthDateFromHetu-funktiolle
describe("getBirthDateFromHetu", () => {
  test("palauttaa oikean syntymäpäivän hetulle, jossa on + merkki", () => {
    const hetu = "131052+308T";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(1852, 9, 13)); // 13. lokakuuta 1852
  });

  test("palauttaa oikean syntymäpäivän hetulle, jossa on - merkki", () => {
    const hetu = "010101-123N";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(1901, 0, 1)); // 1. tammikuuta 1901
  });

  test("palauttaa oikean syntymäpäivän hetulle, jossa on A merkki", () => {
    const hetu = "010101A123P";
    const birthDate = getBirthDateFromHetu(hetu);
    expect(birthDate).toEqual(new Date(2001, 0, 1)); // 1. tammikuuta 2001
  });

});
