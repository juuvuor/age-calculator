function logUpdatedText() {
  let hetu = document.getElementById("hetu").value;
  checkHetu(hetu);
  if (hetu.length < 11) {
    console.log(hetu);
    showWarning();
  }
}

function checkHetu(hetu) {
  const hetuPattern = /^\d{6}[+-A]\d{3}[0-9A-Y]$/;
  if (hetuPattern.test(hetu) && checkMark(hetu)) {
    console.log("Valid hetu: " + hetu);
  } else {
    console.log("Invalid hetu: " + hetu);
    showWarning();
  }
}

// 010101A6378
// 010101637 8
// 0.2580645161

// 131052-308T
// 010101A6378
// 020202+234Y
// 030303+3458
// 090909A901E
// invalid: 030303+345Z

function checkMark(hetu) {
  let givenNumbers = Number(hetu.substring(0, 6) + hetu.substring(7, 10));
  let givenCheckMark = hetu.slice(10);
  const expectedCheckMark = "0123456789ABCDEFHJKLMNPRSTUVWXY";

  const checkMark = expectedCheckMark[givenNumbers % 31];

  console.log("checkMark " + checkMark);
  console.log("givenNumbers " + givenNumbers);
  console.log("givenCheckMark " + givenCheckMark);
  return checkMark == givenCheckMark;
}

function showWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "Tarkista henkilötunnus!";
  warningElement.classList.add("warning");
  setTimeout(clearWarning, 5000);
}

function clearWarning() {
  let warningElement = document.getElementById("warning");
  warningElement.textContent = "";
  warningElement.classList.remove("warning");
  clearTimeout();
}

function displayDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let formattedDate = `${day}.${month}.${year}`;
  document.getElementById("tulos").innerHTML = formattedDate;
}
