/**
 * Hakee edellisen kuukauden päivien lukumäärän.
 * @param {Date} date - Nykyinen päivämäärä.
 * @returns {number} - Edellisen kuukauden päivien lukumäärä.
 */
export function getDaysInPreviousMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 0).getDate();
}

/**
 * Hakee syntymäpäivän annetusta hetusta.
 * @param {string} hetu - Hetu, josta syntymäpäivä haetaan.
 * @returns {Date} - Syntymäpäivä.
 */
export function getBirthDateFromHetu(hetu) {
  const day = parseInt(hetu.substring(0, 2), 10);
  const month = parseInt(hetu.substring(2, 4), 10);
  let year = parseInt(hetu.substring(4, 6), 10);
  const centurySign = hetu.charAt(6);

  switch (centurySign) {
    case "+":
      year += 1800;
      break;
    case "-":
      year += 1900;
      break;
    case "A":
      year += 2000;
      break;
    default:
      throw new Error("Virheellinen vuosisadan merkki hetussa");
  }

  return new Date(year, month - 1, day);
}
