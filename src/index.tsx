import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/style.css"
import Home from './components/views/home/Home';

// import "./sass/_actionCell.scss"
// import "./_btnRowCircle.scss";
// import "./_headBtn.scss"
// import "./sass/_myAgGridReact.scss"
// import "./sass/_demo.scss"

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