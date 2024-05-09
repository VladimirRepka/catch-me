// Funkcia na spustenie hry
function startGame() {
  document.querySelector(".hlavne_Menu").style.display = "none";
  document.getElementById("game-background").style.display = "block";
  console.log("Hra sa spustila!");
  spustiHru();
}

// Funkcia na zobrazenie informácií
function showInfo() {
  alert("Toto je informácia o hre.");
}

// Funkcia na spustenie ďalších kódov hry
function spustiHru() {
  console.log("Hra sa pokračuje...");
}

// Nájdeme tlačidlo "Play" a pridáme mu event listener
var playButton = document.getElementById("playButton");
playButton.addEventListener("click", startGame);

// Nájdeme tlačidlo "Info" a pridáme mu event listener
var infoButton = document.getElementById("infoButton");
infoButton.addEventListener("click", showInfo);
