const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".closemodal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (const element of btnsOpenModal) {
  element.addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.remove("overlay");
}

console.log("hola");

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.add("overlay");
}
