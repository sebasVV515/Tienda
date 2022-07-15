import { peliculas } from "../helpers/peliculasbd.js"
import { pintarPeliculas } from "./controladorllenado.js"
export function buscarProducto(){
    let buscar = document.getElementById("buscar")
    buscar.addEventListener("keyup", function(e){
        let filtrar = peliculas.filter(function(busqueda){
            return(busqueda.Nombre.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        pintarPeliculas(filtrar)
    })
}