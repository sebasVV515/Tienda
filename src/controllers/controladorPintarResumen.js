export function pintarResumenCompra(productos){
    let fila = document.createElement("div")
    fila.classList.add("row")
    let columna = document.createElement("div")
    columna.classList.add("col", "my-2")
    let card = document.createElement("div")
    card.classList.add("card","cardp", "mb-3", "h-100", "text-center")
    let row = document.createElement("div")
    row.classList.add("row", "g-0")
    let col1 = document.createElement("div")
    col1.classList.add("col-md-4", "colDesc")
    let img = document.createElement("img")
    img.classList.add("img-fluid", "rounded-start")
    img.src = productos.Foto
    let col2 = document.createElement("div")
    col2.classList.add("col-md-8")
    let body = document.createElement("div")
    body.classList.add("card-body", "align-self-center")
    let titulo = document.createElement("h1")
    titulo.classList.add("fuente")
    titulo.textContent = productos.Nombre
    let descripcion = document.createElement("p")
    descripcion.classList.add("card-text", "gris", "cardtc", "fuente")
    descripcion.textContent = productos.Descripcion
    let precio = document.createElement("h5")
    precio.classList.add("card-text", "negro")
    precio.textContent = "Precio Unidad: "+productos.Precio
    let cantidad = document.createElement("h5")
    let textunidad
    if(productos.cantidad>1){
        textunidad = "Uds."
    }else{
        textunidad = "Ud."
    }
    cantidad.textContent = "Cantidad: " + productos.cantidad + " " + textunidad
    let subtotal = document.createElement("h3")
    let preciosubtotal = Number(productos.Precio.replace("$ ",""))*Number(productos.cantidad)
    subtotal.textContent = "Subtotal: $ " + preciosubtotal

    columna.appendChild(card)
    card.appendChild(row)
    row.appendChild(col1)
    row.appendChild(col2)
    col1.appendChild(img)
    col2.appendChild(body)
    body.appendChild(titulo)
    body.appendChild(descripcion)
    body.appendChild(precio)
    body.appendChild(cantidad)
    body.appendChild(subtotal)
    fila.appendChild(columna)
    contenedor.appendChild(fila)
}
