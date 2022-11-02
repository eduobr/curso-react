const persona = {
    nombre: 'Tony', 
    apellido: 'Stark',
    edad: 45, 
}

//console.table(persona);

//asignado por referencia por lo que si se cambia un valor en persona
//en este objeto también se cambiará
//const persona2 = persona;

//con el spread se extraen las propiedades y se crea un nuevo objeto
const persona2 = {...persona};

console.log(persona);
console.log(persona2);

