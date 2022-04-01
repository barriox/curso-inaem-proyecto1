const number = Math.trunc(Math.random() * 20 + 1);
const inter = document.querySelector(".number");
const mensaje = document.querySelector(".message");
const maximapun = document.querySelector(".highscore");
const puntuacion = document.querySelector(".score");
maximapun.textContent = 0;
puntuacion.textContent = 20;

//ASIGNAR, SI EXISTE, LA MAXIMA PUNTUACION
if (localStorage.getItem("maximoid")) {
  maximapun.textContent = localStorage.getItem("maximoid");
}
//CHECK BUTTON
const check = document.querySelector(".check");
check.addEventListener("click", function () {
  let num = document.querySelector(".guess").value;

  //COMPARATIVA INPUT
  if (num > number) {
    mensaje.textContent = "Too high!";
  } else if (num < number) {
    mensaje.textContent = "Too low!";
  } else if (num == number) {
    mensaje.textContent = "YOU WIN!";
    check.disabled = true;
    inter.style.width = "300px";
    mensaje.style.fontSize = "50px";
    inter.style.backgroundColor = "green";
    inter.textContent = number;
  } else {
    mensaje.textContent = "Number not valid!";
  }

  //HACER BAJAR EL CONTADOR
  let max;
  max = puntuacion.textContent -= 1;

  //GUARDAR MAXIMA PUNTUACION
  if (num == number) {
    if (maximapun.textContent < max) {
      maximapun.textContent = max;
      localStorage.setItem("maximoid", max);
    }
  }
  //RESETEAR MAXIMA PUNTUACION

  //SI PERDEMOS
  if (max == 0) {
    mensaje.textContent = "YOU LOOSE!";
    mensaje.style.fontSize = "50px";
    check.disabled = true;
    document.body.style.backgroundColor = "red";
    inter.textContent = number;
  }
});

console.log("number: ", number);

//AGAIN BUTTON
const again = document.querySelector(".again");
again.addEventListener("click", function () {
  window.location.reload();
});

//RESETEAR MAXIMA PUNTUACION
function reset() {
  localStorage.removeItem("maximoid");
  window.location.reload();
}
