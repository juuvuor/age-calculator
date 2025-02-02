function logUpdatedText() {
  let hetu = document.getElementById("hetu").value;
  if (hetu.length < 10) {
        console.log(hetu)
        showWarning();
    }
}

function showWarning(){
    let warningElement = document.getElementById("warning");
    warningElement.textContent = "Tarkista henkilötunnus!";
    warningElement.classList.add("warning");
    setTimeout(clearWarning,4000);
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
