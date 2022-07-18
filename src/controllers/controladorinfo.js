export function info(e){
    let objeto = [{
        Foto : e.target.parentElement.parentElement.parentElement.querySelector("img").src,
        Nombre: e.target.parentElement.parentElement.querySelector("h3").textContent,
        Descripcion: e.target.parentElement.parentElement.querySelector("p").textContent,
        Precio: e.target.parentElement.parentElement.querySelector("h2").textContent
    }]
    return objeto
    
}