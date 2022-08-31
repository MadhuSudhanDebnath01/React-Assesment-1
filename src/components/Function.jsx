import React from "react";
import './mystyle.css';


export  function Function () {
    return(
        <div className="box">
         <h2>This is created using Functional component </h2>
         <p >This is done using external css </p> 
        <p style={{color:"blue"}}>This is done using inline css </p>


        </div>   
    );
    
} 