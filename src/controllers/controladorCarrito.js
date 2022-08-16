import { pintarResumenCompra } from "./controladorPintarResumen.js"

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
let contenedor = document.getElementById("contenedor")
let mostrarTotal = document.getElementById("total")
let mostrarCantidad = document.getElementById("cantidadtotal")
let limpiar = document.getElementById("btnborrar")
let moneda = document.getElementById("btnmoneda")
let monedatxt = document.getElementById("monedatxt")
let dolar = 0
let monedabool = 0
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
mostrarCantidad.textContent = "Elementos: " + totalcantidad
mostrarTotal.textContent = "Total: $ " + totalprecio + " COP"

limpiar.addEventListener("click", function(e){
    sessionStorage.removeItem("carrito")
    location.reload()
})

moneda.addEventListener("click", function(e){
    let n = 0
    if(monedabool==0){
        while (document.getElementsByName("precioP").length > n) {
            document.getElementsByName("precioP")[n].classList.add("d-none")
            document.getElementsByName("precioD")[n].classList.remove("d-none")
            n ++;
        }
        monedatxt.innerHTML = " USD - COP"
        dolar=totalprecio*0.000235265
        mostrarTotal.textContent = "Total: $ " + dolar.toFixed(2) + " USD"
        monedabool=1
    }else{
        while (document.getElementsByName("precioP").length > n) {
            document.getElementsByName("precioP")[n].classList.remove("d-none")
            document.getElementsByName("precioD")[n].classList.add("d-none")
            n ++;
        }
        monedatxt.innerHTML = " COP - USD"
        mostrarTotal.textContent = "Total: $ " + totalprecio + " COP"
        monedabool=0
    }
})