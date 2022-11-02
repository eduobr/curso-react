import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {
    //authReducer, {}: para login o logout, init: para leer el localStorage
    const [user, dispatch] = useReducer(authReducer,{}, init)

    //cada vez que cambie el usuario lo vamos a guardar en el localStorage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    
    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
