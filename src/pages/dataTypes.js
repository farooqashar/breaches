import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function DataTypes() {

const [dataTypes, setDataTypes] = useState();

useEffect(() => {
  fetch("https://haveibeenpwned.com/api/v3/dataclasses")
  .then(response => response.json())
  .then(data => setDataTypes(data))
  },[]);
  return (
        <>
        <h1>{dataTypes}</h1>
        </>
  );
}

export default DataTypes;