import { peliculas } from "../helpers/peliculasbd.js";
import { pintarPeliculas } from "./controladorllenado.js";
import { buscarProducto } from "./controladorBuscar.js";
import { info } from "./controladorinfo.js";
import { filtrarProducto } from "./controladorFiltro.js";

pintarPeliculas(peliculas)
buscarProducto()
filtrarProducto()
let contenedor = document.getElementById("fila")
contenedor.addEventListener("click", function(e){
    console.log(e.target)
    let pelicula = info(e)
        console.log(pelicula)
        sessionStorage.setItem("infoPelicula", JSON.stringify(pelicula))
        window.location.href = "../views/info.html"
    if(e.target.querySelector("div")){
    }else{
        
    }
})

