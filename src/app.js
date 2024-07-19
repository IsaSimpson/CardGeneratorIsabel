import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    const topSuit = document.getElementById("top-suit");
    const rank = document.getElementById("rank");
    const bottomSuit = document.getElementById("bottom-suit");

    topSuit.textContent = randomSuit;
    rank.textContent = randomRank;
    bottomSuit.textContent = randomSuit;

    if (randomSuit === "♥" || randomSuit === "♦") {
      topSuit.style.color = "red";
      rank.style.color = "red";
      bottomSuit.style.color = "red";
    } else {
      topSuit.style.color = "black";
      rank.style.color = "black";
      bottomSuit.style.color = "black";
    }
  }

  generateCard();
};
