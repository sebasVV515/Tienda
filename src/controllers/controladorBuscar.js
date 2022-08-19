import { peliculas } from "../helpers/peliculasbd.js"
import { pintarPeliculas } from "./controladorllenado.js"

export function buscarProducto(){
    let filar = document.getElementById("product")
    let buscar = document.getElementById("buscar")
    buscar.addEventListener("keyup", function(e){
        let filtrar = peliculas.filter(function(busqueda){
            return(busqueda.Nombre.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        console.log(filtrar)
        if(filtrar[0]==null){
            document.getElementById("fila").innerHTML = ""
            filar.innerHTML=""
            let fila = document.createElement("div")
            fila.classList.add("row", "minimo")
            let col1 = document.createElement("div")
            col1.classList.add("col-12","col-md-6", "border-end")
            let col2 = document.createElement("div")
            col2.classList.add("col-12", "col-md-4", "align-self-center")
            let foto = document.createElement("img")
            foto.classList.add("img-fluid", "w-100")
            foto.src = "../../assets/img/nodisponible.png"
            let mensaje = document.createElement("h3")
            mensaje.classList.add("text-center")
            mensaje.textContent = "Lo sentimos, no tenemos esa pelicula"

            col1.appendChild(foto)
            col2.appendChild(mensaje)
            fila.appendChild(col1)
            fila.appendChild(col2)
            filar.appendChild(fila)
        }else{
            filar.innerHTML=""
            pintarPeliculas(filtrar)
        }
        
    })
}