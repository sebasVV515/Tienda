let platos=[{
    Nombre:"Salchipapas",
    Precio:10000,
    Descripcion:"Son unas salchipapas",
    Categoria:"Fritos",
    Foto:"../../assets/img/salchipapa.jpg"
},{
    Nombre:"Hamburguesa",
    Precio:22000,
    Descripcion:"Es una Hamburguesa",
    Categoria:"Rapidas",
    Foto:"../../assets/img/hamburguesa.jpg"
},{
    Nombre:"HotDog",
    Precio:12000,
    Descripcion:"Es un perro caliente",
    Categoria:"Rapidas",
    Foto:"../../assets/img/hotdog.jpg"
},{
    Nombre:"Picada",
    Precio:25000,
    Descripcion:"Es una picada",
    Categoria:"Varios",
    Foto:"../../assets/img/picada.jpg"
},{
    Nombre:"Arepa Frita",
    Precio:15000,
    Descripcion:"Es una arepa frita",
    Categoria:"Fritos",
    Foto:"../../assets/img/arepa.jpg"
}]

platos.forEach(function(plato){
    console.log(plato.Nombre)
})

let filtrar = platos.filter(function(plato){
    return(plato.Precio > 20000 && plato.Precio < 30000)
    // return(plato.Precio>20000)
    // return(plato.Categoria=="Rapidas")
})
console.log(filtrar)

let buscar = platos.find(function(plato){
    return(plato.Precio=25000)
})
console.log(buscar)

let map = platos.map(function(plato){
    return(plato.Categoria="Rapidas")
})
console.log(map)

let platoAdicional = {
    Nombre:"Arepa Asada",
    Precio:14000,
    Descripcion:"Es una arepa asada",
    Categoria:"Varios",
    Foto:"../../assets/img/arepa.jpg"
}
platos.push(platoAdicional)
console.log(platos)