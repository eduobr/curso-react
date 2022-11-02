//Funciones en JS
function saludar(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = function(nombre){
    return `Hola ${nombre}`;
}

const saludar3 = (nombre)=>{
    return `Hola ${nombre}`;
}

const saludar4 = (nombre)=>`Hola ${nombre}`;

const saludar5 = ()=>`Hola Mundo`;



console.log(saludar('Goku'));
console.log(saludar2('Vegetta'));
console.log(saludar3('Tony'));
console.log(saludar4('Capitan'));
console.log(saludar5());

//con los parentesis le indicamos al objeto que vamos a devolver el objeto
//de manera implicita
const getUser = () =>({
    uid:'ABC123',
    username: 'El_Papi1502'
})

console.log(getUser());

//Tarea
//1. Transformen a una función de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
 const getUsuarioActivo = (nombre) =>({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Eduardo');
console.log(usuarioActivo);