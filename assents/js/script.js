
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


misBotones[1].onclick = () => {
  colorEstado.g = Math.floor(Math.random() * 256);

  console.log("VERDE:", colorEstado);

  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";

  document.getElementById("color-text").textContent =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";
};


misBotones[2].onclick = () => {
  colorEstado.b = Math.floor(Math.random() * 256);

  console.log("AZUL:", colorEstado);

  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";

  document.getElementById("color-text").textContent =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";
};