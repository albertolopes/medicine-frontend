import React from 'react'
import { isAuthenticated } from '../services/auth/auth';
import AppBar from '../components/appBar/AppBarComponent'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
        {...Route} render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location}}} />
            )
        }
    />
);

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World</h1>}></Route>
            <PrivateRoute path="/app" component={AppBar}/>
        </Switch>
    </Router>
);

export default Routes;