window.addEventListener('load', function(){
    //Paso el producto seleccionado a objeto
    let productoSeleccionado =  JSON.parse(localStorage.getItem('producto'))
    console.log(productoSeleccionado);

    let producto=this.document.querySelector('.producto')
    producto.innerHTML+=`
    <div class="card mb-3" style="max-width: 155vh;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${productoSeleccionado.imagen}" class="img-fluid rounded-start" alt="${productoSeleccionado.titulo}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <h1 class="card-title">${productoSeleccionado.titulo}</h1>
            <h4 class="card-text">${productoSeleccionado.descripcionProducto}</h4>
            <h5 class="card-text">${productoSeleccionado.precio}</h5>
            <h6 class="card-text">${productoSeleccionado.descuento}</h6>
            <h6 class="card-text">Disponibles: ${productoSeleccionado.disponibles}</h6>



            <p class="card-text"><small class="text-body-secondary">Cantidad de vendidos: ${productoSeleccionado.cantidadVendidos}</small></p>
            <div class="uk-grid-margin uk-first-column">
                <button type="submit" id="add_to_cart-btn" class="button button--full background--primary background--primary-hover contrast_text--primary contrast_text--primary-hover uk-button uk-button-input border-radius" data-label="Agregar al carrito" data-spinner-ratio="0.75" style="    -webkit-text-size-adjust: 100%;
                --uk-breakpoint-s: 640px;
                --uk-breakpoint-m: 960px;
                --uk-breakpoint-l: 1200px;
                --uk-breakpoint-xl: 1600px;
                --uk-leader-fill-content: .;
                -webkit-font-smoothing: antialiased;
                list-style: none;
                margin: 0;
                overflow: visible;
                font: inherit;
                -webkit-appearance: none;
                box-sizing: border-box;
                padding: 0 30px;
                vertical-align: middle;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                transition: .1s ease-in-out;
                transition-property: color,background-color,border-color;
                background-color: teal;
                color: white;
                border-radius: 6px;
                font-weight: 500;
                font-size: 1rem;
                line-height: 45px;
                box-shadow: none;
                border: 0px solid transparent;
                width: 100%;
                display: block;
                cursor: pointer;
                margin-bottom: 0;">Agregar al carrito</button>                                                
            </div>
        </div>
      </div>
    </div>
  </div>
    `;

})
