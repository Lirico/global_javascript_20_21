const productos = [
    {
        id: "1",   
        name: "Producto A",
        price: 10
    },
    {
        id: "2",   
        name: "Producto B",
        price: 20
    },
    {
        id: "3",   
        name: "Producto C",
        price: 30
    },
    {
        id: "4",  
        name: "Producto D",
        price: 40
    }
]

console.log("------ CARRITO -------")

function addToCart(id){
    // Buscar en la DB un producto cuyo id
    // coincida con el de la tarjeta
    const newItem = productos.find(producto => producto.id === id)

    console.log(newItem)
}

