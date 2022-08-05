let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let cantCarro = document.getElementById("cantCarrito")
if(carrito==null){
    carrito=[]
    cantCarro.classList.add("invisible")
}else{
    cantCarro.classList.remove("invisible")
    cantCarro.textContent = carrito.length
}