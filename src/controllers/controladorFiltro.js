import { peliculas } from "../helpers/peliculasbd.js"
import { pintarPeliculas } from "./controladorllenado.js"

export function filtrarProducto(){
    let filtrar = document.getElementById("filtros")
    filtrar.addEventListener("click", function(e){
        if(e.target.querySelector("li")){
        }else{
            let filtrar = peliculas.filter(function(filtrador){
                return(filtrador.Categorias.includes(e.target.textContent))
            })
            pintarPeliculas(filtrar)
        }
    })
}