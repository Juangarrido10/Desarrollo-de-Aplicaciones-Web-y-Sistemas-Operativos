const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor-template");

const productos = [
  {titulo: "Laptop", desc: "16GB RAM - $3'500.000", img: "img/laptop.jpg"},
  {titulo: "Mouse", desc: "Inalámbrico - $125.000", img: "img/mouse.jpg"},
  {titulo: "Teclado", desc: "Mecánico RGB - $200.000", img: "img/teclado.jpg"}
];

productos.forEach(p => {
  const clon = template.content.cloneNode(true);
  clon.querySelector(".title").textContent = p.titulo;
  clon.querySelector(".desc").textContent = p.desc;
  clon.querySelector("img").src = p.img;
  clon.querySelector("img").alt = p.titulo;
  contenedor.appendChild(clon);
});
