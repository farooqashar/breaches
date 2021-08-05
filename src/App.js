import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {

  const [breaches, setBreaches] = useState();
  const [dataTypes, setDataTypes] = useState();

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
    </div>
  );
}

export default App;
