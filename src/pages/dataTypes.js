import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function DataTypes(props) {

  return (
        <>

        {props.dataTypes.map(each => {
          return (
            <div>
            <h1>{each}</h1>
            </div>
          )
        })}
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