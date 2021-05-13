import React from 'react';
import './App.css';
import Options from './Options';
import Screen from './Screen';

// Parent component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      angle: null,
      menuSelect : false
    }
  }
  // Receiving the angle from child component Options.js and setting in the state
  handleAngleChange = (childData) =>{
    if( Math.abs(this.state.angle - childData)>= 15 && this.state.angle != null)
    {this.setState({
        angle: childData
      });}
      else if(this.state.angle == null){
        this.setState({
          angle: childData
        });
      }
    }
    // receving the bool from child component Options.js and setting the state 
   handleSelectMenu = (val)=>{
    this.setState({
      menuSelect: val
    })
   }
    render()
    { 
      return (
    <div id='container'>
    {/* passing the props angle and on clicking the menu bool */}
    <Screen angle={this.state.angle} menuClick={this.state.menuSelect}/>
    {/* passing the function as a props to recive the data from the child component Options.js*/}
    <Options changeAngle = {this.handleAngleChange} selectMenu = {this.handleSelectMenu}/>
    </div>
   
  );
}

}

export default App;
