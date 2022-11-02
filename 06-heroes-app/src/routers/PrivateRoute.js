import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

//el exact, path, etc. se le pasan en el ...rest

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    //console.log(rest.location.pathname);
    localStorage.setItem('lastPath', rest.location.pathname);
    
    return (
        <Route {...rest} 
            //props = history, location, search
            component={(props)=>(
                //si esta autenticado manda lo mismo
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
