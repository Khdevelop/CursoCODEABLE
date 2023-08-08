/* VARIABLES */


/* Esta no se usa en programacion actual. 
Se puede redefinir su valor
Y su uso es global */

//Definimos la variable con un valor 
var name = "Antonia";

//Cambiamos el valor de la variable ya existente.
// No es necesario poner de nuevo var, solo el nombre de la variable
name = "Karen <3"


/* ------------------------ */
/* let se usa en un contexto definido, dentro de una funcion
tambien puede redefinirse como var */
let lastName = "Hincapie"; 

/* const define una constante, no se puede redefinir... Pero puede mutar de acuerdo a su tipo de dato */
const firstName = "Karen";


/* TIPOS DE DATOS */

/* Esto es un arreglo, puede tener varios datos en su interior de cualquier tipo */

const rabbits = ["Lolita" , "Antonia", "Mercedes"]

/* Arrary Desctructuring, es para dividir los datos de un arreglo*/
const [ lola, anto, merce ] = rabbits;


/* Objetos es un tipo de dato que permite guardar varias varibales en su interior, se usa 
de una manera especifica, como llave:valor, la llave sera el nombre interno de esa variable, y el valor
sera, su valor, que puede ser cualquier otro tipo de dato*/

/* EJERCICIO */
const user = {
    firstName: "Karen",
    lastName: "Hincapie",
    id: 12345678,
    isActive: false
};

if(user.isActive){
    console.log("Estas activo")
}else{
    console.log("Estas inactivo")
}