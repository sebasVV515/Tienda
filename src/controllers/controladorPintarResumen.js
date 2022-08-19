export function pintarResumenCompra(productos, position){
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
    precio.textContent = "Precio Unidad: "+productos.Precio+" COP"
    precio.setAttribute("name", "precioP")
    let dollar = document.createElement("h5")
    dollar.classList.add("card-text", "negro", "d-none")
    let dollaro = productos.Precio.replace("$ ","")*0.000235265
    dollar.textContent = "Precio Unidad: $ "+ dollaro.toFixed(2)+" USD"
    dollar.setAttribute("name", "precioD")
    let cantidad = document.createElement("h5")
    let textunidad
    if(productos.cantidad>1){
        textunidad = "Uds."
    }else{
        textunidad = "Ud."
    }
    cantidad.textContent = "Cantidad: " + productos.cantidad + " " + textunidad
    let subtotal = document.createElement("h3")
    subtotal.classList.add("card-text", "negro")
    subtotal.setAttribute("name","precioP")
    let preciosubtotal = Number(productos.Precio.replace("$ ",""))*Number(productos.cantidad)
    subtotal.textContent = "Subtotal: $ " + preciosubtotal+" COP"
    let subtotalD = document.createElement("h3")
    subtotalD.classList.add("card-text", "negro", "d-none")
    subtotalD.setAttribute("name","precioD")
    let preciosubtotalD = preciosubtotal*0.000235265
    subtotalD.textContent = "Subtotal: $ " + preciosubtotalD.toFixed(2)+" USD"
    let btnborrar = document.createElement("a")
    btnborrar.setAttribute("id","btnborrar")
    btnborrar.classList.add("btn", "btn-danger", "btndelete")
    btnborrar.innerHTML = "<span id='idborrar' class='d-none'>"+position+"</span><i class='bi bi-x-lg'></i>"

    columna.appendChild(card)
    card.appendChild(row)
    row.appendChild(col1)
    row.appendChild(col2)
    col1.appendChild(img)
    col2.appendChild(body)
    body.appendChild(titulo)
    body.appendChild(descripcion)
    body.appendChild(precio)
    body.appendChild(dollar)
    body.appendChild(cantidad)
    body.appendChild(subtotal)
    body.appendChild(subtotalD)
    body.appendChild(btnborrar)
    fila.appendChild(columna)
    contenedor.appendChild(fila)
}
