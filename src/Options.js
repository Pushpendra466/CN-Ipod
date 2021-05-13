import React from 'react';
import ZingTouch from 'zingtouch';

// this component is for the selection of items from menu

class Options extends React.Component{

 
componentDidMount()
  {   // Storing global this in self ,that is to be used inside the activeRegion
      let self = this;
      let containerElement = document.getElementById('options');
      let activeRegion = ZingTouch.Region(containerElement);
      let childElement = document.getElementById('outer');
      activeRegion.bind(childElement, 'rotate', function(event){
        // passing the angle to the parent app.js
      self.props.changeAngle(event.detail.angle);
  });

  }

  handleClick = () =>{
    // on click the middle buton of ipod is passed to parent app.js
    this.props.selectMenu(true)
  }

  handleMenuClick = ()=>{
    // on click the menu buton of ipod is passed to parent app.js
    this.props.selectMenu(false)
  }

  render()
  {
  

    return (
     <div id='options'>
        <div id='outer'>
        <div className='top' onClick={this.handleMenuClick}>Menu</div>
        <div className='right'><i className="fas fa-fast-forward"></i></div>
        <div className='left'><i className="fas fa-fast-backward"></i></div>
        <div className='bottom'><i className="fas fa-play"></i><i className="fas fa-pause"></i></div>
        </div>

        <div id='inner' onClick={this.handleClick}>

          </div>
      </div>
   
  );
}
}

export default Options;
