import { peliculas } from "../helpers/peliculasbd.js";
import { pintarPeliculas } from "./controladorllenado.js";
import { buscarProducto } from "./controladorBuscar.js";
import { info } from "./controladorinfo.js";

let carrito = JSON.parse(localStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
if(carrito==null){
    carrito=[]
}else{
    cantCarro.textContent = carrito.length
}
pintarPeliculas(peliculas)
buscarProducto()
let contenedor = document.getElementById("fila")
contenedor.addEventListener("click", function(e){
    let pelicula = info(e)
    console.log(pelicula)
    localStorage.setItem("infoPelicula", JSON.stringify(pelicula))
    window.location.href = "../views/info.html"
})

