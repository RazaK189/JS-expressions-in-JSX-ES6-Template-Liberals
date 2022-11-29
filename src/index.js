import React from "react";
import ReactDOM from "react-dom";

const fName = "Raza";
const lName = "Khan";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p> Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

//can add javascript expressions or values not statements by using { }
//{`${fName} ${lName}`} -- liberl templating form of concatetnation
