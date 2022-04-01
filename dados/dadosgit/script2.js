const player1 = { score: 0 };
const player2 = { score: 0 };
const players = [player1, player2];
let terminado = false;
let current = 0;
let puntuaciones = "";
do {
  const number = Math.trunc(Math.random() * 6 + 1);
  let currentPlayer = players[current];
  console.log("Dado:", number);

  if (number != 1) {
    currentPlayer.score += number;
    console.log("Jugador ", current + 1, " score:", currentPlayer.score);
    let puntuaciones = "";
    for (let i = 0; i < players.length; i++) {
      puntuaciones += "Player" + (i + 1) + ": " + players[i].score + " ";
    }
    console.log("Puntuaciones:", puntuaciones);
  } else {
    current++;
    if (current == 2) {
      current = 0;
    }
    console.log("Cambio de jugador al jugador ", current + 1);
  }
  if (currentPlayer.score >= 100) {
    console.log("El jugador", current + 1, "ha ganado el juego");
    let scores;
    for (let i = 0; i < players.length; i++) {
      scores = players[i];
      console.log("Jugador", i + 1, "ha conseguido ", scores, "puntos");
    }
    terminado = true;
  }
} while (terminado === false);

function reset(players) {
  for (let i = 0; i < players.length; i++) {
    players[i].score = 0;
  }
  return console.log("Jugadores reseteados", players);
}
function recargar() {
  window.location.reload();
}
