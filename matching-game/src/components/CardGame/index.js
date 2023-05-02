import "./style.css";

function CardGame(icon = "logo-alura", alt = "Logo da Alura") {
  return `
    <article class="card-game">
      <img src="./images/${icon}.png" alt="${alt}">
    </article>
  `;
}

export default CardGame;
