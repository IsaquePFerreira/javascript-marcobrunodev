import "./style.css";

import CardGame from "../../components/CardGame";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlContent = $htmlCardGame.repeat(amountCards) +
    $htmlCardFrontBack.repeat(amountCards);

  return `
    <section class="board-game">
      ${$htmlContent}
    </section>
    `;
}

export default BoardGame;
