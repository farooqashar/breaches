import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [breaches, setBreaches] = useState();
  const [dataTypes, setDataTypes] = useState();

useEffect(() => {
  fetch("https://haveibeenpwned.com/api/v3/dataclasses")
  .then(response => response.json())
  .then(data => setDataTypes(data))
  },[]);

  return (
    <div className="App">
        {console.log(dataTypes)}
    </div>
  );
}

export default App;
