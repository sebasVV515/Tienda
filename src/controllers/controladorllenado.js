export function pintarPeliculas(peliculas){
    let fila = document.getElementById("fila")
    peliculas.forEach(function(pelicula){
        let columna = document.createElement("div")
        columna.classList.add("col", "my-2")
        let card = document.createElement("div")
        card.classList.add("card", "mb-3", "h-100", "text-center")
        let row = document.createElement("div")
        row.classList.add("row", "g-0")
        let foto = document.createElement("div")
        foto.classList.add("col-md-4")
        let img = document.createElement("img")
        img.classList.add("img-fluid", "rounded-start")
        img.src = pelicula.Imagenes[0]
        let text = document.createElement("div")
        text.classList.add("col-md-8")
        let body = document.createElement("div")
        body.classList.add("card-body")
        let titulo = document.createElement("h3")
        titulo.classList.add("card-title", "negro", "fuente")
        titulo.textContent = pelicula.Nombre
        let descripcion = document.createElement("p")
        descripcion.classList.add("card-text", "gris", "cardt", "fuente")
        descripcion.textContent = pelicula.Descripcion
        let precio = document.createElement("p")
        precio.classList.add("card-text", "negro")
        precio.textContent = "$ "+pelicula.Precio
        columna.appendChild(card)
        card.appendChild(row)
        row.appendChild(foto)
        row.appendChild(text)
        foto.appendChild(img)
        text.appendChild(body)
        body.appendChild(titulo)
        body.appendChild(descripcion)
        body.appendChild(precio)
        fila.append(columna)
        columna.addEventListener("mouseover",function(){
            // img.src = "pelicula.Imagenes[1]"
            img.src = "../../assets/img/placeholder.jpg"
        })
        columna.addEventListener("mouseleave",function(){
            img.src = pelicula.Imagenes[0]
        })
    })
}

// //Buscar
// let buscar = document.getElementById("buscar")
// buscar.addEventListener("keyup", function(e){
//     let filtrar = peliculas.includes(function(busqueda){
//         return(busqueda.Nombre == e.target.value)
//     })
//     console.log(filtrar)
// })