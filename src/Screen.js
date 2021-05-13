import './App.css';
import React from 'react';

// array of menu items to be shown
const menuItems = ['Cover Flow','Music','Games','Settings'];

// Screen component
class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      angle: null,
      active : 1
    }
  }

  // on changing the angle , i.e rotating on the circular path active item will be selected
changeAngle=(angle)=>{
    let setActive = this.state.active;
    if(angle>this.state.angle){
      if(this.state.active === 3){
        setActive =  0;
      }
      else {
        setActive = this.state.active + 1;
      }
    }
    else{
      if(this.state.active === 0){
        setActive = menuItems.length -1;
      }
      else{
        setActive = this.state.active -1;
      }
    }
    this.setState({
      angle: angle,
      active: setActive
    })
    }
  
  render()
  { 
  if(this.props.angle !== this.state.angle){
    this.changeAngle(this.props.angle);
  }
  if(!this.props.menuClick)
    {
      return (
     <div id='screen'>
     <p className='greet'>hi</p>
      <p><b>iPod.js</b></p>
      <ul>
      {
      menuItems.map((i,index)=>{
        if(index !== this.state.active)
     { return <li key={i} className=''>
      {i}
      </li>}
      else {
        return <li key={i} className='selected'>
      {i}
      </li>
      }
    })
         }
      </ul>
     </div>
  );
}
// According to the active item in state applying the selected css to specific item
else{
  if(this.state.active === 0)
  {return(
    <div id='screen'>
    <p className='title'>{menuItems[0]}</p>
    &emsp;&emsp;&emsp;&emsp;<i className="fas fa-headphones" style={{fontSize: '5rem'}}></i>
    </div>
  )}
  else if(this.state.active === 1)
  {return(
    <div id='screen'>
    <p className='title'>{menuItems[1]}</p>
    &emsp;&emsp;&emsp;<i className="fas fa-music" style={{fontSize: '5rem'}}></i>
    </div>
  )}
  else if(this.state.active === 2)
  {return(
    <div id='screen'>
    <p className='title'>{menuItems[2]}</p>
    &emsp;&emsp;&emsp;<i className="fas fa-dice" style={{fontSize: '5rem'}}></i>
    </div>
  )}
  else if(this.state.active === 3)
  {return(
    <div id='screen'>
    <p className='title'>{menuItems[3]}</p>
    &emsp;&emsp;&emsp;<i className="fas fa-cogs" style={{fontSize: '5rem'}}></i>
    </div>
  )}
  else return;
}

}
}


export default Screen;
