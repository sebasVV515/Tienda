let carrito = JSON.parse(localStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
let contenedor = document.getElementById("contenedor")
let cantidadProductos = 0
contenedor.innerHTML = ""

if(carrito==null){
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
}else{
    cantCarro.classList.remove("invisible")
    cantCarro.textContent = carrito.length
    carrito.forEach(function(productos){
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
        descripcion.classList.add("card-text", "gris", "cardt", "fuente")
        descripcion.textContent = productos.Descripcion
        let precio = document.createElement("h2")
        precio.classList.add("card-text", "negro")
        precio.textContent = productos.Precio
        let cantidad = document.createElement("p")
        cantidad.textContent = "Cantidad: "+productos.cantidad
        let subtotal = document.createElement("p")
        subtotal.textContent = Number(productos.Precio)*Number(productos.cantidad)

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

        // let pprecio = productos.Precio.replace("$ ", "")
        // cantidadProductos=Number(pprecio)+Number(productos.cantidad)
        // document.getElementById("cantidad").textContent = pprecio
    })
}