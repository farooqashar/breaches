import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Breaches({ breaches }) {
  return (
    <div className="container">

      <h1>Breaches</h1>
      <br/>
      <br/>
      {breaches.map((each_breach) => {
        return (
          <>
          <Card variant="outlined">
            <CardContent>
              <h2 class="text-danger">
                {each_breach["Name"]} | {each_breach["Domain"]}
              </h2>

              <h6 dangerouslySetInnerHTML={{ __html: each_breach["Description"] }}>
              </h6>

              <h6><i className="ssm">Breach Date:</i> {each_breach["BreachDate"]}</h6>

              <h6><i className="ssm">Compromised Data Classes:</i> 
              <br/> <br/>
              {each_breach["DataClasses"].map(each => {return(<h6>{each}</h6>)})}</h6>

            </CardContent>
          </Card>
          <br/>
          <br/>
          </>
        );
      })}
    </div>
  );
}

export default Breaches;
