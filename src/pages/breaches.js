import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Breaches({ breaches }) {
  return (
    <>
      {breaches.map((each_breach) => {
        return (
          <Card variant="outlined">
            <CardContent>
              <h2 class="text-danger">
                {each_breach["Name"]} {each_breach["Domain"]}
              </h2>

              {/* <h6>Capital: {each_breach.capital}</h6>

          <h6>Phone Extension: {each_breach.phone} </h6>

          <h6>Country Code: {each_breach.code}</h6>

          <h6>Currency: {each_breach.currency}</h6> */}
            </CardContent>
          </Card>
        );
      })}
      }
    </>
  );
}

export default Breaches;
