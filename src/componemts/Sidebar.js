import React, { Component } from 'react';
class Sidebar extends Component{
    constructor(props){
      super(props);
    }
    render(){
        console.log(this.props);
      return(
        <div className={"sliding-menu animated " + this.props.slideClass}>
          <button type="button" onClick={this.props.onClick}>
            <span className="glyphicon glyphicon-arrow-left"></span>
          </button>
          {this.props.children}
        </div>
      );
    }
  }
  export default Sidebar;
  




  
