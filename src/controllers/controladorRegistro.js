import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton = document.getElementById("btnregistro")
let email = document.getElementById("usuario")
let password = document.getElementById("contrasena")
let mostrar = document.getElementById("mostrar")
let ojo = document.getElementById("ojo")
let mostrarbool = 0

mostrar.addEventListener("click", function(){
    if(mostrarbool==1){
        password.type = "password"
        mostrarbool = 0
        ojo.classList.remove("bi-eye")
        ojo.classList.add("bi-eye-slash")
    }else{
        password.type = "text"
        mostrarbool = 1
        ojo.classList.remove("bi-eye-slash")
        ojo.classList.add("bi-eye")
    }
})

boton.addEventListener("click",function(e){
    e.preventDefault()
    email = email.value
    password = password.value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Bienvenido")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
})