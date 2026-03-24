const colorEstado = {
  r: 255,
  g: 255,
  b: 255
};

const misBotones = [
  document.getElementById("btn-red"),
  document.getElementById("btn-green"),
  document.getElementById("btn-blue")
];

const colorText = document.getElementById("color-text");

console.log("Objeto colorEstado:", colorEstado);
console.log("Array misBotones:", misBotones);
console.log("Elemento colorText:", colorText);

// BOTÃO VERMELHO
misBotones[0].addEventListener("click", () => {
  const valor = Math.floor(Math.random() * 256);
  console.log("Novo valor R:", valor);

  colorEstado.r = valor;
  console.log("Estado atualizado:", colorEstado);

  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";

  colorText.textContent =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";

  console.log("Cor aplicada:", colorEstado);
});

// BOTÃO VERDE
misBotones[1].addEventListener("click", () => {
  colorEstado.g = Math.floor(Math.random() * 256);

  console.log("VERDE:", colorEstado);

  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";

  colorText.textContent =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";
});

// BOTÃO AZUL
misBotones[2].addEventListener("click", () => {
  colorEstado.b = Math.floor(Math.random() * 256);

  console.log("AZUL:", colorEstado);

  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";

  colorText.textContent =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";
});