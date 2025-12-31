const sections = document.querySelectorAll(".section");
const music = document.getElementById("bgMusic");

function show(id) {
  sections.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").onclick = () => {
  music.play();
  show("kitty");
};

document.getElementById("kittyBtn").onclick = () => show("cards");
document.getElementById("cardsBtn").onclick = () => show("letterSection");
document.getElementById("letterBtn").onclick = () => show("final");

function flip(card) {
  card.style.background = "white";
}
