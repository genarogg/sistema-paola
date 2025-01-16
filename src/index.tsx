import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/style.css"
import Home from './components/views/home/Home';
import Dashboard from './components/views/dashboard/DashBoard';

// import "./sass/_actionCell.scss"
// import "./_btnRowCircle.scss";
// import "./_headBtn.scss"
// import "./sass/_myAgGridReact.scss"
// import "./sass/_demo.scss"
// import "./_btnNormalBasic.scss"
// import "./_btnLoki.scss";
// import "./_btnSubmitBasic.scss"
// import "./faces/sass/_styleGeneral.scss"
// import "./sass/_demo.scss"
// import "./_btnText.scss"
// import "./sass/_resetPassword.scss"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

//@ts-ignore
ReactDOM.render(<App />, document.getElementById('app'));