function saludar (){
    console.log("Hola Bienvenido a la segunda entrega")
}
saludar();

let menu = [ 
    " 1 Ver productos",
    " 2 Ver carrito de compras",
    " 3 Ver total",
    " 4 Salir"
];

let opciones = prompt (`Seleciona una opcion:\n${menu.join('\n')}`);

switch (opciones) {
    case " 1 ":
        console.log("Mostrar productos y ver total ");
    break;

    case " 2 ":
        console.log("Mostrar el carrito de compras");
    break;
    case "3":
        console.log("Ver el total");
    break;
    case "4 ":
        console.log("Salir");
    break;
}

const carrito = [
    {
        id:"01",
        nombre:"Azucar",
        precio:"15.80"
    },

    {
        id:"02",
        nombre:"Jabonr",
        precio:"30.25"
    },

    {
        id:"03",
        nombre:"Mermelada",
        precio:"20.30"
    },

    {
        id:"04",
        nombre:"Barra De Pan",
        precio:"10.15"
    }
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}

let precioTotal = 0;
for (const producto of carrito){
    precioTotal += parseFloat(producto.precio);
}
console.log("el precio del carrito es: " + precioTotal);