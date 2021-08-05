import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function DataTypes({dataTypes}) {

  return (
        <>

        <ul>
        {dataTypes.map(each => {
          return (
            <div>
            <li>{each}</li>
            </div>
          )
        })}
        </ul>
        {/* {dataTypes.forEach((each_type) => { 
          return (<h1>each_type</h1>)
          }
          )} */}
        
        {/* <h1>{
        
        dataTypes.forEach(each_type => {
          return (<h1>each_type</h1>)
        })
        }</h1> */}
        </>
  );
}

export default DataTypes;