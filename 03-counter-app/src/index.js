import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

//una manera de trabajar con css
import './index.css'

//JSX (javascript + xml)
//const saludo = <h1>Hola Mundo</h1>

//obtenemos la referencia del div con id=root de la página index.html
const divRoot = document.querySelector('#root');

//renderizamos el saludo en el elemento div del HTML
//ReactDOM.render(saludo, divRoot)
//ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku"/>, divRoot)
ReactDOM.render( <CounterApp value={10}/>, divRoot)
