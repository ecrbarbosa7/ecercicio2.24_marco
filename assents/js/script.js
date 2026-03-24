// Objeto RGB
const colorEstado = {
  r: 255,
  g: 255,
  b: 255
};
console.log("Objeto colorEstado:", colorEstado);

// Botões
const misBotones = [
  document.getElementById("btn-red"),
  document.getElementById("btn-green"),
  document.getElementById("btn-blue")
];
console.log("Array misBotones:", misBotones);

// Texto
const colorText = document.getElementById("color-text");
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