import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import DataTypes from "./pages/dataTypes.js";
import Breaches from "./pages/breaches.js";

import './App.css';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/breaches" exact component={Breaches}/>
            <Route path="/datatypes" exact component={DataTypes}/>
            >
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
