import "./src/styles/settings/colors.css";
import "./src/styles/settings/fonts.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardFrontBack from "./src/components/CardFrontBack";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects/CardBoard";

const $root = document.querySelector("#root");
const $htmlCardFrontBack = CardFrontBack();
const $htmlPlayerName = PlayerName();
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("afterbegin", $htmlPlayerName);
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardFrontBack);

