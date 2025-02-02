function validateAndLogHetu() {
  let hetu = document.getElementById("hetu").value.toUpperCase();
  if (checkHetu(hetu)) {
    calculateDate(hetu)
    console.log('kaiki ok')
  }
  else {
    showWarning();
  } 
}

function calculateDate(hetu) {
    const thisDay = new Date();
    const birthDay = -2;
    const century = hetu.substring(6, 7);
    let year = 0
    switch (hetu.substring(6, 7)) {
        case "+":
            year = 1800 + Number(hetu.substring(4,6));
            console.log('year ' + year)
            // Jatka tästä. merkataan päivä määrä ja lasketaan erotus.
            break;
        case "-":
            year = 1900
            break;
        case "A":
            year = 2000
            break;
    }
    console.log('date '+thisDay.getDate()+":"+ (thisDay.getMonth()+1) + ":" + thisDay.getFullYear())
    console.log('hetu '+ hetu)
}


function checkHetu(hetu) {
  const hetuPattern = /^\d{6}[+-A]\d{3}[0-9A-Y]$/;
  return hetuPattern.test(hetu) && checkMark(hetu);

}

// Test hetu. Not real !!
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
