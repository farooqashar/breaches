import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DataTypes({ dataTypes }) {
  return (
    <div className="container">
      <h1>Breachable Data Classes</h1>
      <p className="text-info">
        There are many examples of data that can be compromised in a breach.
      </p>
      <br />
      <br />
      <ul>
        {dataTypes.map((each) => {
          return (
            <div>
              <li>{each}</li>
            </div>
          );
        })}
      </ul>
      <br />
      <div className="container">
        <Link to="/">
          <button class="btn btn-secondary">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default DataTypes;
