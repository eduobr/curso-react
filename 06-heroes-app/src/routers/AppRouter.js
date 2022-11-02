import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {user} = useContext(AuthContext)
  //console.log(user);
  
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <PublicRoute 
            exact 
            path="/login" 
            component={LoginScreen} 
            isAuthenticated={user.logged}
            />
          <PrivateRoute 
            path="/"
            component={DashboardRouter}
            isAuthenticated={user.logged}
            />
        </Switch>
      </div>
    </Router>
  );
};
