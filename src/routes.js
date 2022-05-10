import React from "react";
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import NotFound from "./pages/notFound";

export const Routes = ( ) => {
    return(
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    )
}