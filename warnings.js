/**
 * Näyttää varoitusviestin.
 */
export function showWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "Tarkista henkilötunnus!";
  warningElement.classList.add("warning");
  setTimeout(clearWarning, 3500);
}

/**
 * Tyhjentää varoitusviestin.
 */
export function clearWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "";
  warningElement.classList.remove("warning");
  clearTimeout();
}
