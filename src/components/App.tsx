import * as React from 'react';
import '../styles/css/App.css';

import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import AxiosTest from "./AxiosTest";
import Error from "./Error";
import Home from "./Home";
import Navigation from "./Navigation";

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path={'/'} component={Home} exact={true}/>
                        <Route path={'/axios'} component={AxiosTest}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
