import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/style.css"
import Home from './components/views/home/Home';
import Dashboard from './components/views/dashboard/home/DashBoard';
import Bienes from './components/views/dashboard/bienes/Bienes';
import Departamentos from './components/views/dashboard/departamentos/Departamentos';
import AggDepartamento from './components/views/dashboard/departamentos/agg/Agg';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/bienes" component={Bienes} />
                <Route exact path="/dashboard/departamentos" component={Departamentos} />
                <Route exact path="/dashboard/departamentos/agregar" component={AggDepartamento} />
            </Switch>
        </BrowserRouter>
    );
}

//@ts-ignore
ReactDOM.render(<App />, document.getElementById('app'));