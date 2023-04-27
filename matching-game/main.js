import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML("afterbegin", $htmlPlayerName);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);

