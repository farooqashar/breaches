import React from "react";
import { Link } from "react-router-dom";



function Home() {

  return (
        <>
        <h1>Breaches</h1>
      <Link to="/dataTypes">
        <button class="btn btn-primary">Check Out Different Breachable Data Types</button>
      </Link>

        <Link to="/breaches">
        <button class="btn btn-primary">Check Out Various Breaches</button>
      </Link>
        </>
  );
}

export default Home;