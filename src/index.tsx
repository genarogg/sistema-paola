import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
    return <p>Hola mundo</p>;
}

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

//@ts-ignore
ReactDOM.render(<App />, document.getElementById('app'));