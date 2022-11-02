import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

//el history es un prop que viene por defecto del React Router DOM
export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    // history.push('/')
    //reemplazamos el historial del navegador para que no pueda ir a la página anterior
    // history.replace('/')
    dispatch({
      type: types.login,
      payload: {
        name: "Eduardo",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
