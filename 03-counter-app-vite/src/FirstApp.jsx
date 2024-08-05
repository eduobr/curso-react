import React from 'react'
import PropTypes from 'prop-types'
// const newMessage = {
//     message: "Hola Mundo",
//     title: "Eduardo"
// } 

  // const getResult = (a,b) => {
  //     return a + b;
  // }

export const FirstApp = ({ title = 'Hola, Soy un titulo', subTitle, name }) => {

//   console.log(props);
  
  return (
    <>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* <h1>{getResult(2,3)}</h1> */}
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    // subTitle: PropTypes.number.isRequired 
}

// Será eliminado en futuras versiones de React
// FirstApp.defaultProps = {
//     title: 'No hay título',
//     subTitle: 'No hay subtítulo',       
//     name: 'Eduardo',
// }

export default FirstApp