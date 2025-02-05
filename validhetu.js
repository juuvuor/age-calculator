/**
 * Tarkistaa, onko annettu hetu kelvollinen.
 * @param {string} hetu - Tarkistettava hetu.
 * @returns {boolean} - True, jos hetu on kelvollinen, muuten false.
 */
export function isValidHetu(hetu) {
  const hetuPattern = /^\d{6}[+-A]\d{3}[0-9A-Y]$/;
  return hetuPattern.test(hetu) && isValidCheckMark(hetu);
}

/**
 * Tarkistaa, onko hetun tarkistusmerkki kelvollinen.
 * @param {string} hetu - Tarkistettava hetu.
 * @returns {boolean} - True, jos tarkistusmerkki on kelvollinen, muuten false.
 */
export function isValidCheckMark(hetu) {
  let givenNumbers = Number(hetu.substring(0, 6) + hetu.substring(7, 10));
  let givenCheckMark = hetu.slice(10);
  const expectedCheckMark = "0123456789ABCDEFHJKLMNPRSTUVWXY";
  const checkMark = expectedCheckMark[givenNumbers % 31];
  return checkMark === givenCheckMark;
}
