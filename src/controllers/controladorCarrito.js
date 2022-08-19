import { pintarResumenCompra } from "./controladorPintarResumen.js"

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
let contenedor = document.getElementById("contenedor")
let mostrarTotal = document.getElementById("total")
let mostrarCantidad = document.getElementById("cantidadtotal")
let limpiar = document.getElementById("btnborrar")
let moneda = document.getElementById("btnmoneda")
let monedatxt = document.getElementById("monedatxt")
let detalles = document.getElementById("detalles") 
let dolar = 0
let monedabool = 0
let totalcantidad = 0
let totalprecio = 0
contenedor.innerHTML = ""

function carritolimpio(){
    contenedor.innerHTML = ""
    detalles.classList.add("d-none")
    contenedor.classList.remove("carrito")
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
}
let positionL = 0
function carritolleno(){
    contenedor.innerHTML = ""
    contenedor.classList.add("carrito")
    limpiar.classList.remove("disabled")
    cantCarro.classList.remove("invisible")
    cantCarro.textContent = carrito.length
    totalcantidad=0
    totalprecio =0
    carrito.forEach(function(productos){
        pintarResumenCompra(productos,positionL)
        totalcantidad = totalcantidad+Number(productos.cantidad)
        let preciosubtotal = Number(productos.Precio.replace("$ ",""))*Number(productos.cantidad)
        totalprecio = totalprecio + preciosubtotal
        positionL++
    })
    positionL=0
}
let caneca = document.getElementById("canecaborrar")
let position = 0
function canecaborrar(){
    caneca.innerHTML=""
    if(carrito.length>0){
        carrito.forEach(function(e){
            let canecam = document.createElement("a")
            canecam.classList.add("btn", "btn-danger", "canecam")
            canecam.innerHTML = "<span class='d-none'>"+position+"</span><i class='bi bi-x-lg'></i>"
            // link.setAttribute("href","../../src/views/peliculas.html")
            caneca.appendChild(canecam)
            position++
        })
    }
    position=0
}

if(carrito==null){
    carritolimpio()
}else{
    canecaborrar()
    carritolleno()
}
mostrarCantidad.textContent = "Elementos: " + totalcantidad
mostrarTotal.textContent = "Total: $ " + totalprecio + " COP"

limpiar.addEventListener("click", function(e){
    sessionStorage.removeItem("carrito")
    caneca.innerHTML = ""
    carritolimpio()
})

function monedacambio(){
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
}
moneda.addEventListener("click", function(e){
    monedacambio()
}) 

caneca.addEventListener("click",function(e){
    let position
    if(e.target.parentElement.querySelector("span").textContent){
        position = e.target.parentElement.querySelector("span").textContent
        let tienda = carrito
        tienda.splice(position,1);
        carrito=tienda
        sessionStorage.setItem("carrito",JSON.stringify(carrito))
        cantCarro.textContent = carrito.length
        
        if(carrito.length==0){
            caneca.innerHTML = ""
            sessionStorage.removeItem("carrito")
            carritolimpio()
        }
        carrito.forEach(function(productos){
            canecaborrar()
            pintarResumenCompra(productos,position)
            carritolleno()
            
        })
        monedabool=1
        monedacambio()
        mostrarCantidad.textContent = "Elementos: " + totalcantidad
        mostrarTotal.textContent = "Total: $ " + totalprecio + " COP"
    }
})

