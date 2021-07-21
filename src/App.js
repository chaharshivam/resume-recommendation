import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";
import CheckPage from "./components/CheckPage";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/check" exact component={CheckPage}/>
            </BrowserRouter>
        )
    }
}

export default App;
