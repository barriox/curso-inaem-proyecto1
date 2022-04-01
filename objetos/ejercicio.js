const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Crear un array con los jugadores de cada equipo (*player1* y *player2*)
const player1 = [
  "Neuer",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
  "Lewandowski",
];
const player2 = [
  "Burki",
  "Schulz",
  "Hummels",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze",
];

// 2. Crea una variable para el portero (*goalKeeper*)  y otra para los jugadores del Bayern  (*fieldPlayers*)
const [goalKeeper, ...fiedlPlayers] = player1;
console.log(goalKeeper);

// 3. Crea un array con todos los jugadores de ambos equipos (*allPlayers*)
const allPlayers = [...player1, ...player2];
console.log("allPlayers", allPlayers);

//4. Crea un nuevo array **players1Final** que contenga el  equipo de inicio y los reservas *Thiago*, *Coutinho* y *Perisic*.
const reservas = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...player1, ...reservas];
console.log("players1Final", players1Final);

// 5. En base  al objeto game.odds, crea una  variable para cada apuesta  y llámalas *team1*, *draw* y *team2*.
const { odds } = game;
const { team1, x: draw, team2 } = odds;
console.log("team1", team1, "draw", draw, "team2", team2);

// 6. Escribe una función *printGoals* que recibe un número arbitrario de nombres de jugadores (no un array)
//e imprime sus nombres por consola así como el total de goles marcados (uno por cada jugador).
const printGoals = (...pla) => {
  for (let i = 0; i < pla.length; i++) {
    let goles = 0;
    for (const name in game.scored) {
      if (game.scored[name] == pla[i]) {
        goles++;
      }
    }
    console.log(pla[i], "ha marcado", goles, "goles");
  }
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

//7-Imprimir el equipo con menores posibilidades de ganar sin usar un ternario ni if/else
const menor =
  (team1 < team2 && console.log(team1)) ||
  (team1 > team2 && console.log(team2));

const [, ...jugadoresBayern] = player1;
const [, ...jugadoresBorussia] = player2;

const jugadores = [...jugadoresBayern, ...jugadoresBorussia];

//PASO 2: defino variables generales, numero de goles aleatorio de 0 a 10
const goles = [];
const numeroGoles = Math.floor(Math.random() * 10);

//PASO 3: cargo los objetos gol y los guardo en un array
for (let i = 0; i < numeroGoles; i++) {
  const numeroAzar0a90 = Math.floor(Math.random() * 90);
  const numeroAzar0a19 = Math.floor(Math.random() * 19);
  const gol = {
    jugador: jugadores[numeroAzar0a19],
    minuto: numeroAzar0a90,
    equipo: numeroAzar0a19 < 10 ? "Bayern" : "Borussia", //del 0 al 9 jugadores bayern, del 10 al 19 del borussia
  };
  goles.push(gol);
}
//PASO 4: Sacar un listado de los goles

const tabla = document.querySelector("#tableGoles");
const tablaGoleadores = document.querySelector("#tableGoleadores");

const listadoGoles = (goles) => {
  /*ordenamos los goles por minuto
  goles.sort(ordenacion);
  funcion ordenacion (a,b){return a.minuto - b.minuto}
  */
  goles.sort((a, b) => a.minuto - b.minuto);
  for (const { jugador, minuto, equipo } of goles) {
    console.log(`${jugador} del ${equipo} marco el gol en el minuto ${minuto}`);
    const rowContent = `<tr>
    <td>${jugador}</td>
    <td>${equipo}</td>
    <td>${minuto}</td>
    </tr>`;
    tabla.innerHTML += rowContent;
  }
};
listadoGoles(goles);

//PASO 5: Sacar un listado de goles agrupado por jugador:

const listadoGolesPorJugador = (goles) => {
  const golesPorJugador = {};
  for (const { jugador } of goles) {
    if (golesPorJugador[jugador]) golesPorJugador[jugador]++;
    else golesPorJugador[jugador] = 1;
  }
  const listadoGoleadores = Object.entries(golesPorJugador);
  listadoGoleadores.sort((a, b) => b[1] - a[1]);
  for (const [jugador, goles] of listadoGoleadores) {
    const rowContent = `<tr>
      <td>${jugador}</td>
      <td>${goles}</td>
      </tr>`;
    tablaGoleadores.innerHTML += rowContent;
  }
};
listadoGolesPorJugador(goles);

const jugadoresGol = {
  Pavard: 2,
  Alaba: 1,
};

jugadoresGol.Neuer = 1; //equivalentes
jugadoresGol["Lewandowski"] = 1; //equivalentes

console.log("jugadoresGol", jugadoresGol);
