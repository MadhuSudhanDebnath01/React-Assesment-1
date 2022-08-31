
import React from 'react';
import './App.css';
import Class from './components/Class';
import {Function} from './components/Function';


class App extends React.Component{
    state = {
      showClass: false,
      showFunction:false 
 };   
render(){
  return (
    <div className="container">
      <h1 className='header'>Styling using functional and class components</h1>
      <div className="bstyle">
        <button className='lbutton' onClick ={ () =>this.setState({showClass : !this.state.showClass})}>To see styling in Class component</button>
      {console.log(this.state.showClass)}
      <button className='rbutton' onClick ={ () =>this.setState({showFunction : !this.state.showFunction})}>To see styling in Function component</button>
      {console.log(this.state.showFunction)}
      </div>
    
     
       {this.state.showClass ? <Class /> : null} 
      {this.state.showFunction ?  <Function /> : null} 
      

    </div>
  );
}
}
export default App;

