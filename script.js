const boton = document.querySelector("#btn")
const message = document.querySelector("#message")

boton.addEventListener("click", () => {
    message.textContent = "Hola desde JavaScript!"
})

const body = document.body;
const btnn = document.querySelector("#toggle");

btnn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

