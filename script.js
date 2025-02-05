/** Tässä muutamia testi hetuja
131052-308T
010101A6378
020202+234Y
030303+3458
090909A901E
invalid: 030303+345Z
 */

import { isValidHetu, isValidCheckMark } from "./validhetu.js";
import {getDaysInPreviousMonth,getBirthDateFromHetu} from "./calculateAge.js";
import { showWarning, clearWarning } from "./warnings.js";

let typingTimer;
const doneTypingInterval = 1500;

// Näppäintä nostaessa aloitetaan ajastin
document.getElementById("hetu").addEventListener("input", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(validateHetu, doneTypingInterval);
});

// Näppäintä painaessa tyhjennetään ajastin
document.getElementById("hetu").addEventListener("keydown", () => {
  clearTimeout(typingTimer);
});

/**
 * Validoi annetun hetun
 */
function validateHetu() {
  let hetu = document.getElementById("hetu").value.toUpperCase(); // Muutetaan isoiksi kirjaimiksi
  if (isValidHetu(hetu)) {
    calculateAge(hetu);
  } else {
    showWarning();
    document.getElementById("bDay").textContent = 0;
    document.getElementById("bMonth").textContent = 0;
    document.getElementById("bYear").textContent = 0;
  }
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
  document.getElementById("bDay").textContent = ageDays;
  document.getElementById("bMonth").textContent = ageMonths;
  document.getElementById("bYear").textContent = ageYears;
}

