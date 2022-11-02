import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //useState() devuelve un arreglo
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter(counter++);
    //No funciona ya que es lo mismo que:
    //counter = counter + 1;
    //y no podemos cambiar el valor de una constante directamente   
  };

  const handleReset = () => {
      setCounter(value);
  }

  const handleSubstract = () =>{
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/*<buttononClick={(e)=>handleAdd(e)}>*/}
      {/*Lo anterior es lo mismo que esto, solamente
       que acá le mandamos al función por referencia*/}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
