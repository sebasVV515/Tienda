let carrito = JSON.parse(localStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
if(carrito==null){
    carrito=[]
    cantCarro.classList.add("invisible")
}else{
    cantCarro.classList.remove("invisible")
    cantCarro.textContent = carrito.length
}
