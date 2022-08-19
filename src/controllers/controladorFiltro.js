import { peliculas } from "../helpers/peliculasbd.js"
import { pintarPeliculas } from "./controladorllenado.js"

export function filtrarProducto(){
    let filtrar = document.getElementById("filtros")
    let buscar = document.getElementById("buscar")
    let limpio = document.getElementById("product")
    filtrar.addEventListener("click", function(e){
        if(e.target.querySelector("li")){
        }else{
            let filtrar = peliculas.filter(function(filtrador){
                return(filtrador.Categorias.includes(e.target.textContent))
            })
            buscar.value=""
            limpio.innerHTML = ""
            pintarPeliculas(filtrar)
        }
    })
}