import "./style.css";

function CardGame(icon = "alura", alt = "Logo da Alura") {
  return `
    <article class="card-game">
      <img src="./images/logo-${icon}.png" alt="${alt}">
    </article>
  `;
}

export default CardGame;
