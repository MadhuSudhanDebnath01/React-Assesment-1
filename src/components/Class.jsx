import React from "react";
import './mystyle.css';

class Class extends React.Component{
    
    render(){
        
        return(
          <div className='box'>
        <h2>This is created using class component </h2>
         <p >This is done using external css </p> 
        <p style={{color:"blue"}}>This is done using inline css </p>
        
        </div>    
        );
    }
}
export default Class;
