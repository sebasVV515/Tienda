import { pintarResumenCompra } from "./controladorPintarResumen.js"

let carrito = JSON.parse(localStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
let contenedor = document.getElementById("contenedor")
let mostrarTotal = document.getElementById("total")
let mostrarCantidad = document.getElementById("cantidadtotal")
let limpiar = document.getElementById("btnborrar")
let totalcantidad = 0
let totalprecio = 0
contenedor.innerHTML = ""

if(carrito==null){
    limpiar.classList.add("disabled")
    cantCarro.classList.add("invisible")
    let fila = document.createElement("div")
    fila.classList.add("row")
    let col1 = document.createElement("div")
    col1.classList.add("col-12","col-md-6", "border-end")
    let col2 = document.createElement("div")
    col2.classList.add("col-12", "col-md-4", "align-self-center")
    let foto = document.createElement("img")
    foto.classList.add("img-fluid", "w-100")
    foto.src = "../../assets/img/cvacio.png"
    let mensaje = document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent = "Tu carrito esta vacio"
    let link = document.createElement("a")
    link.classList.add("btn", "btn-primary", "w-100")
    link.textContent = "Ir a la Tienda"
    link.setAttribute("href","../../src/views/peliculas.html")

    col1.appendChild(foto)
    col2.appendChild(mensaje)
    col2.appendChild(link)
    fila.appendChild(col1)
    fila.appendChild(col2)
    contenedor.appendChild(fila)
}else{
    limpiar.classList.remove("disabled")
    cantCarro.classList.remove("invisible")
    cantCarro.textContent = carrito.length
    carrito.forEach(function(productos){
        pintarResumenCompra(productos)
        totalcantidad = totalcantidad+Number(productos.cantidad)
        let preciosubtotal = Number(productos.Precio.replace("$ ",""))*Number(productos.cantidad)
        totalprecio = totalprecio + preciosubtotal
    })
}
mostrarCantidad.textContent = "Cantidad de productos: " + totalcantidad
mostrarTotal.textContent = "Total: $ " + totalprecio

limpiar.addEventListener("click", function(e){
    localStorage.removeItem("carrito")
    location.reload()
})