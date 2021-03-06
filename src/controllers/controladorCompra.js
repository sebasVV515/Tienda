let producto = JSON.parse(localStorage.getItem("infoPelicula"))
let titulo = document.getElementById("titulo")
let descripcion = document.getElementById("descripcion")
let precio = document.getElementById("precio")
let imagen = document.getElementById("imagen")
let calificacion = document.getElementById("calificacion")

function stars(cantidad){
    if(cantidad>=1){
        estrella1.classList.remove("bi-star")
        estrella1.classList.add("bi-star-fill")
    }
    if(cantidad>=2){
        estrella2.classList.remove("bi-star")
        estrella2.classList.add("bi-star-fill")
    }
    if(cantidad>=3){
        estrella3.classList.remove("bi-star")
        estrella3.classList.add("bi-star-fill")
    }
    if(cantidad>=4){
        estrella4.classList.remove("bi-star")
        estrella4.classList.add("bi-star-fill")
    }
    if(cantidad>=5){
        estrella5.classList.remove("bi-star")
        estrella5.classList.add("bi-star-fill")
    }
}

titulo.textContent = producto.Nombre
descripcion.textContent = producto.Descripcion
precio.textContent = producto.Precio

// calificacion.textContent = producto.Calificacion
let estrella1 = document.getElementById("star1")
let estrella2 = document.getElementById("star2")
let estrella3 = document.getElementById("star3")
let estrella4 = document.getElementById("star4")
let estrella5 = document.getElementById("star5")

stars(producto.Calificacion)
imagen.src = producto.Foto

let agregar = document.getElementById("agregar")
let cantCarro = document.getElementById("cantCarrito")
let carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){
    carrito=[]
}else{
    carrito = JSON.parse(localStorage.getItem("carrito"))
}
cantCarro.textContent = carrito.length

agregar.addEventListener("click",function(){
    let cantidad = document.getElementById("cantidad").value
    producto.cantidad=cantidad
    carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    cantCarro.textContent = carrito.length
})


