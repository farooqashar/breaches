import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Breaches</h1>

      <p className="text-info container">
        This is a simple webpage designed to feature information about various
        breaches of different entities.
      </p>

      <div className="container">
        <Link to="/dataTypes">
          <button className="btn btn-primary">
            Check Out Different Breachable Data Types
          </button>
        </Link>
      </div>
      <br />
      <div className="container">
        <Link to="/breaches">
          <button className="btn btn-primary">
            Check Out Various Breaches
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
