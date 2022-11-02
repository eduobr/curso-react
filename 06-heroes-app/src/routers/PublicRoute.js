import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

//el exact, path, etc. se le pasan en el ...rest

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    
    return (
        <Route {...rest} 
            //props = history, location, search
            component={(props)=>(
                //si esta autenticado manda lo mismo
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
