import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import DataTypes from "./pages/dataTypes.js";
import Breaches from "./pages/breaches.js";

import './App.css';

function App() {

  const [breaches, setBreaches] = useState();
  const [dataTypes, setDataTypes] = useState([]);

useEffect(() => {
  fetch("https://haveibeenpwned.com/api/v3/dataclasses")
  .then(response => response.json())
  .then(data => setDataTypes(data))
  },[]);

  useEffect(() => {
  fetch("https://haveibeenpwned.com/api/v3/breaches")
  .then(response => response.json())
  .then(data => setBreaches(data))
  },[]);


  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/breaches" exact component={Breaches}/>
            <Route path="/datatypes" exact   render={(props) => (
    <DataTypes {...props} dataTypes={dataTypes} />
  )}/>
            >
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
