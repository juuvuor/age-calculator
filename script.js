/** Tässä muutamia testi hetuja
131052-308T
010101A6378
020202+234Y
030303+3458
090909A901E
invalid: 030303+345Z
 */

/**
 * Validoi annetun hetun ja kirjaa tuloksen.
 */
function validateAndLogHetu() {
  let hetu = document.getElementById("hetu").value.toUpperCase(); // Muutetaan isoiksi kirjaimiksi
  if (isValidHetu(hetu)) {
    calculateAge(hetu);
  } else {
    showWarning();
  }
}

/**
 * Tarkistaa, onko annettu hetu kelvollinen.
 * @param {string} hetu - Tarkistettava hetu.
 * @returns {boolean} - True, jos hetu on kelvollinen, muuten false.
 */
function isValidHetu(hetu) {
  const hetuPattern = /^\d{6}[+-A]\d{3}[0-9A-Y]$/;
  return hetuPattern.test(hetu) && isValidCheckMark(hetu);
}

/**
 * Tarkistaa, onko hetun tarkistusmerkki kelvollinen.
 * @param {string} hetu - Tarkistettava hetu.
 * @returns {boolean} - True, jos tarkistusmerkki on kelvollinen, muuten false.
 */
function isValidCheckMark(hetu) {
  let givenNumbers = Number(hetu.substring(0, 6) + hetu.substring(7, 10));
  let givenCheckMark = hetu.slice(10);
  const expectedCheckMark = "0123456789ABCDEFHJKLMNPRSTUVWXY";
  const checkMark = expectedCheckMark[givenNumbers % 31];
  return checkMark === givenCheckMark;
}

/**
 * Laskee ja kirjaa iän annetun hetun perusteella.
 * @param {string} hetu - Hetu, josta ikä lasketaan.
 */
function calculateAge(hetu) {
  const birthDate = getBirthDateFromHetu(hetu);
  const today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += getDaysInPreviousMonth(today);
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  document.getElementById("bDay").textContent = `${ageDays} päivää`;
  document.getElementById("bMonth").textContent = `${ageMonths} kuukautta ja`;
  document.getElementById("bYear").textContent = `${ageYears} vuotta,`;
  console.log(
    `Ikä: ${ageYears} vuotta, ${ageMonths} kuukautta, ${ageDays} päivää`
  );
}

/**
 * Hakee syntymäpäivän annetusta hetusta.
 * @param {string} hetu - Hetu, josta syntymäpäivä haetaan.
 * @returns {Date} - Syntymäpäivä.
 */
function getBirthDateFromHetu(hetu) {
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

  return new Date(year, month - 1, day); // Kuukaudet ovat nollapohjaisia
}

/**
 * Hakee edellisen kuukauden päivien lukumäärän.
 * @param {Date} date - Nykyinen päivämäärä.
 * @returns {number} - Edellisen kuukauden päivien lukumäärä.
 */
function getDaysInPreviousMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 0).getDate();
}

/**
 * Näyttää varoitusviestin.
 */
function showWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "Tarkista henkilötunnus!";
  warningElement.classList.add("warning");
  setTimeout(clearWarning, 5000);
}

/**
 * Tyhjentää varoitusviestin.
 */
function clearWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "";
  warningElement.classList.remove("warning");
  clearTimeout();
}

