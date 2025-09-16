class ProductCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: "open"});
      shadow.innerHTML = `
        <style>
          .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            border-radius: 8px;
            max-width: 200px;
            text-align: center;
            font-family: Arial, sans-serif;
            background: #fafafa;
          }
          img {
            max-width: 150px;
            height: auto;
            border-radius: 6px;
            margin-bottom: 8px;
          }
          h3 {
            margin: 5px 0;
            font-size: 18px;
            color: #333;
          }
          p {
            margin: 4px 0;
            font-size: 14px;
            color: #555;
          }
          .price {
            color: green;
            font-weight: bold;
          }
        </style>
        <div class="card">
          <img src="${this.getAttribute("imagen")}" alt="${this.getAttribute("nombre")}">
          <h3>${this.getAttribute("nombre")}</h3>
          <p>${this.getAttribute("descripcion")}</p>
          <p class="price">${this.getAttribute("precio")}</p>
        </div>
      `;
    }
  }
  
  customElements.define("product-card", ProductCard);
  