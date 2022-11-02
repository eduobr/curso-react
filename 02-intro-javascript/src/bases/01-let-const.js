//si el valor de una variable no va a cambiar debemos agregarle const
const nombre = 'Eduardo';
const apellido = 'Obreque';

let valorDado = 5;
valorDado = 4;

if (true) {
    //podemos volver a crear la variable nombre ya que se encuentra
    //dentro de otro scope
    const nombre = 'Fernando';
    console.log(nombre);
}

console.log(nombre, apellido, valorDado);