//Capturar los elementos
let productosHTML=document.querySelector('.productos-en-venta')
//console.log(productosHTML)

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})

.then((productos)=>{
    //console.log(productos)
    //Creo las tarjetas con los productos
    let tarjetas = document.querySelector('#tarjetas')
    productos.forEach(producto => {
        //Varío contenido de un elemento capturado en js
        //class="w-100" en img va a ser el 100 del tamaño de su caja
        // col-12 col-md-6 col-lg-10
        tarjetas.innerHTML += ` 
        <div class="card text-center" style="margin:10px; ">
            <img src="${producto.imagen}" class="w-100 card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h2 class="card-title" style="font-size:1.3rem;">${producto.titulo}</h2>
                <h6 class="card-title">${producto.detalle}</h6>
                <h6 class="card-title">${producto.precio}</h6>
                <a class="btn btn-primary boton-ver-mas" id="${producto.codigo}" href="./detalleProducto.html?codigo=${producto.codigo}" style="background-color:whitesmoke; border-color:teal; color:teal;">Ver más</a>
            </div>
        </div>
        `
    })


    //Guardo el producto clickeado en el Local Storage
    const cards=document.getElementsByClassName('boton-ver-mas')
    //console.log(cards);
    Array.from(cards).forEach(tarjeta=>
        tarjeta.addEventListener('click',()=>{
        //console.log(tarjeta);
        let codigo=tarjeta.id;
        //console.log(codigo);
        let nuevoProducto=productos.find(producto=>producto.codigo==codigo)
    
    localStorage.setItem('producto',JSON.stringify(nuevoProducto));
    window.location.href = './detalleProducto.html';
    }))
})

.catch((error)=>{ //Atrapo el error en el caso en que hubiera
    console.log("Ha ocurrido un error " +error)
})



//tarjetas.style.display = 'grid';
//tarjetas.style.gridTemplateColumns = 'repeat(4,3fr)';



/*tarjetas.style.display = 'flex';
tarjetas.style.flexWrap = 'wrap';*/




//Idea: Guardar los datos del producto que corresponda en el localStorage según el boton VerMas seleccionado (dependiendo del id del botón). Desde el localStorage, copiar en el body de detalleProducto.html la informacion necesaria (para hacer esto pasarlo a objeto literal antes). Programar los botones verMas de modo que si los aprieto, vacío el localStorage de la info previa para guardar un nuevo producto


//-------------------- NUEVA IDEA--------------------
//function agregarEventoACard() {//Agrega el evento de redireccionar a la pag detalle
/*
    const cards=document.getElementsByClassName('boton-ver-mas')
    //console.log(cards);
    Array.from(cards).forEach(tarjeta=>
        tarjeta.addEventListener('click',()=>{
        //console.log(tarjeta);
        let codigo=tarjeta.id;
        //console.log(codigo);
        let nuevoProducto=productos.find(producto=>producto.codigo==codigo)
    
    localStorage.setItem('producto',JSON.stringify(nuevoProducto));
    window.location.href = './detalleProducto.html';
}))*/
//}

//localStorage.clear();
/*let botonVerMas = document.querySelectorAll('.boton-ver-mas');

let nuevoProducto;

botonVerMas.forEach(producto => {
    //console.log(producto);

    producto.addEventListener('click', function(e) {
        e.preventDefault();

        nuevoProducto=productos.find(prod=> prod.codigo==producto.codigo);
        console.log(nuevoProducto);
        /*for(let i=0; i<productos.length; i++){
            if(productos[i].codigo==producto.codigo){
                nuevoProducto=producto;
            }}*/
        
        //Idea: Al seleccionar un nuevo producto, quiero que se borre del localStorage la anterior seleccion y se guarde el nuevo producto seleccionado
        
        /*let productoSeleccionado=localStorage.getItem('miProducto'); //miProducto??
            productoSeleccionado=localStorage.removeItem('miProducto');
        let productoJSON = JSON.stringify(nuevoProducto)
        localStorage.setItem('miProducto', productoJSON);

        //console.log(productoJSON);

            })})*/
            //localStorage.clear() //lo uso para debuguear

        //}
        //localStorage.setItem(producto, archivoJSON);
        //let productoSeleccionado=JSON.parse(this.id);
        //console.log(productoSeleccionado)
    //})
//});

/*
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
    cuerpoTabla.innerHTML += `
        <tr>
            <td>${producto.nombre} </td>
            <td>${producto.apellido} </td>
            <td>${producto.correo} </td>
            <td>${producto.direccion} </td>
        </tr>
    `





//-------------------- IDEA VIEJA --------------------
//como comparo si los botones los agregué desde el js, no desde el html
//let botonVerMas = document.querySelectorAll('.boton-ver-mas');
//console.log(botonVerMas);

/*
botonVerMas.forEach(boton => {
    boton.addEventListener('click', function(e){ //function(e)
        e.preventDefault()
        localStorage.clear();
        let productoJSON = JSON.stringify('miProducto');
        console.log(productoJSON);
        localStorage.setItem('miProducto', productoJSON);

    //para cuando quiera traer los datos para trabajar con ellos en el otro html
        //let productoLocalStorage = localStorage.getItem('miProducto')

        //para cuando quiera pasarlo a objeto
        let productoObjeto = JSON.parse(productoJSON);
        console.log(productoObjeto);

        localStorage.setItem('miProducto', JSON.stringify(productoObjeto))
    } )
});*/



/*
let seleccionoProducto = botonVerMas.addEventListener('click', function(){

    for(let i=0; i < productos.length; i++){ //algo mal, revisar (porque solo 1 tiene que ser el producto seleccionado, no todos)
        if(botonVerMas=='#botonVerMas`${i}`'){

        } //'#botonVerMas`${i}`'
    }
});



let botonMiLista = document.querySelectorAll('.botonMiLsta')
let arrayMiListaDeFavoritas;
//console.log(botonMiLista)
botonMiLista.forEach(pelicula => {
    pelicula.addEventListener('click', function(e){
        e.preventDefault()
        let miListadePeliculas = localStorage.getItem('miLista')
        if(miListadePeliculas == null){
            arrayMiListaDeFavoritas = [];
        }else{
            arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
        }
        arrayMiListaDeFavoritas.push(JSON.parse(this.id))
        localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))
    } )
});




fetch('productoElegido')
.then(res => res.json())
.then(console.log);




//console.log(productos);
let archivoJSON = JSON.stringify(productos);
console.log(archivoJSON);



//localStorage.setItem('productos', archivoJSON); //Inspeccionar -> Almacenamiento -> LocalStorage -> los datos van a seguir ahí si refresco la pág, se están guardando los datos

//localStorage.removeItem('productos')


*/
