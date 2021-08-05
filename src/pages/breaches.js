import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Breaches() {

const [breaches, setBreaches] = useState();

useEffect(() => {
  fetch("https://haveibeenpwned.com/api/v3/breaches")
  .then(response => response.json())
  .then(data => setBreaches(data))
  },[]);

  return (
        <>
        <h1>{breaches}</h1>
        </>
  );
}

export default Breaches;