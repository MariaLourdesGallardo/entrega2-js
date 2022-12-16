// CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener 
//las siguientes propiedades:

// - id –> number

// - producto –> nombre del producto

// - precio –> number

// - fechaVencimiento (en el caso de que tenga una) —> string

// - descripción –> string

// - categoría (si tiene una) —> string

// - oferta (booleano) –> true o false



const listaLua = [
    {
        "id": 100,
        "producto": "Yogurt Firme 125grs ",
        "precio": 18,
        "fechaVencimiento": "15/01/2023",
        "descripcion": "Vainilla",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 101,
        "producto": "Yogurt Firme 125grs ",
        "precio": 18,
        "fechaVencimiento": "15/01/2023",
        "descripcion": "Frutilla",
        "categoria": "lácteos",
        "oferta": true 
    },{
        "id": 102,
        "producto": "Yogurt con Cereales ",
        "precio": 27,
        "fechaVencimiento": "25/01/2023",
        "descripcion": "Vainilla",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 103,
        "producto": "Yogurt con Cereales ",
        "precio": 27,
        "fechaVencimiento": "25/01/2023",
        "descripcion": "Frutilla",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 104,
        "producto": "Yogurt 1 Litro ",
        "precio": 50,
        "fechaVencimiento": "02/01/2023",
        "descripcion": "Vainilla",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 105,
        "producto": "Yogurt 1 Litro ",
        "precio": 50,
        "fechaVencimiento": "03/01/2023",
        "descripcion": "Frutilla",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 106,
        "producto": "Yogurt 1 Litro ",
        "precio": 50,
        "fechaVencimiento": "03/01/2023",
        "descripcion": "Durazno",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 107,
        "producto": "Leche 1 Litro ",
        "precio": 45,
        "fechaVencimiento": "24/12/2022",
        "descripcion": "Entera",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 108,
        "producto": "Leche 1 Litro ",
        "precio": 45,
        "fechaVencimiento": "24/12/2022",
        "descripcion": "Descremada",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 109,
        "producto": "Dulce de Leche 250grs ",
        "precio": 35,
        "fechaVencimiento": "18/02/2023",
        "descripcion": "",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 110,
        "producto": "Dulce de Leche 400grs ",
        "precio": 59,
        "fechaVencimiento": "20/02/2023",
        "descripcion": "",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 111,
        "producto": "Dulce de Leche 400grs ",
        "precio": 59,
        "fechaVencimiento": "20/02/2023",
        "descripcion": "Repostero",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 112,
        "producto": "Manteca 250grs ",
        "precio": 35,
        "fechaVencimiento": "11/03/2023",
        "descripcion": "",
        "categoria": "lácteos",
        "oferta": false
    },{
        "id": 113,
        "producto": "Manteca 500 grs ",
        "precio": 60,
        "fechaVencimiento": "11/03/2023",
        "descripcion": "",
        "categoria": "lácteos",
        "oferta": true
    },{
        "id": 114,
        "producto": "Crema de Leche ",
        "precio": 65,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "",
        "categoria": "lácteos",
        "oferta": true
    }
]
console.log(listaLua)

// Quiero que algunos de los elementos tengan un true en oferta.

// 2) Utilizar un método de array que verifique si oferta es true,
// en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento 
//(elijan el descuento que quieran).

// listaLua.forEach ( (elemento) =>{
//     if( elemento.oferta === true){
//         console.log( Math.round(elemento.precio*0.90) )
//     }
// } )


// 3) Utilizando un método de array, que ordene a los elementos de 
//manera alfabética (a - z o z - a), como ustedes prefieran. 
//También pueden ordenar por número de id (ascendente o descendente).

// Usen este método haciendo una copia segura del array. 
//Pueden copiar el array de manera segura con los siguientes métodos:

// - […array] —> spread operator

// - array.slice() —> copia segura en otra variable

// - [].concat(array) —> copia segura en otra variable


const listaOrdenadaAlf = [...listaLua].sort ( (a,b) =>{
    if( a.producto < b.producto ){
        return -1
    }else if( a.producto > b.producto){
        return 1
    }else {
        return 0
    }
})

// console.log(listaOrdenadaAlf)



// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas
// de la tienda. En el caso de que si, entonces con filter, 
//filtre el array y que muestre en consola cada una de las ofertas.


// let oferta = confirm (" ¿Desea ver las ofertas ?")

// if(oferta === true){
//      listaLua.filter ( (element) =>{
//         if (element.oferta === true){
//             console.log(` OFERTA: ${element.producto} - ${element.descripcion}`)
//         }
//     } )
    
// }



// 5) A través de un prompt, permita al usuario buscar productos. 
//Una vez que ingrese un producto, busquen con find dicho producto y 
//muestrelo en un alert().


let buscarProducto =parseInt( prompt (`
    Ingrese el código del producto`))

const prodBuscado = listaLua.find ( (objeto) =>{
    return objeto.id === buscarProducto
} )

alert(`
    Producto:  ${prodBuscado.producto}
    Descripción: ${prodBuscado.descripcion}
    Fecha de Vencimiento: ${prodBuscado.fechaVencimiento}
    Precio: $ ${prodBuscado.precio}`)





// const prodBuscado = listaLua.find(item => item.producto == buscarProducto);


// const prodBuscado = listaLua.find ( (elem) =>{
//     return elem.producto === buscarProducto
// } )
// console.log(prodBuscado.producto)


// listaLua.find ( (elem) =>{
//     if ( buscarProducto === elem.producto){
//         return alert(`${elem.producto}`)
//     }
// } )

// const prodBuscado = listaLua.find ( (objeto) =>{
//     return objeto.producto === buscarProducto
// } );

// console.log(prodBuscado.producto)