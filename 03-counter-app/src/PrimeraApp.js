import React from "react";
import PropTypes from "prop-types";
//import React, {Fragment} from 'react';

//Functional Component
/* ocupamos la destructuración de props */
//si queremos asignar un valor por defecto en caso de que no se
//mande saludo debemos: {saludo = 'Hola Mundo'}
const PrimeraApp = ({ saludo = "Hola Mundo", subtitulo }) => {
  //const saludo = "Hola Mundo const";
  //const saludo = 123.123;
  //const saludo = [1,2,3,4,5,6];
  //Los booleanos no los imprime
  //const saludo = false;
  //no podemos imprimir objetos directamente
  /*const saludo = {
    nombre: "Eduardo",
    edad: 25,
  };*/

  //podemos usar un JSON.stringify() para imprimir objetos
  //<pre>{JSON.stringify(saludo, null, 3)</pre>;

  console.log(saludo);

  return (
    <>
      <h1>{saludo}</h1>
      {/*<h1>{saludo}</h1>*/}
      <p>{subtitulo}</p>
      <p>Mi primera aplicación</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
