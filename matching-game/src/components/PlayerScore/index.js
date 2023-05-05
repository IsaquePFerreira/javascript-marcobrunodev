import "./style.css"

function PlayerScore(points) {
  return `
    <ol data-points="${points}">
      <li>Um</li>
      <li>Dois</li>
      <li>Três</li>
    </ol>
  `;
}

export default PlayerScore;
