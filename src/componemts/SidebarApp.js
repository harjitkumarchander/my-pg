import React, { Component } from 'react';
import Sidebar from './Sidebar';

class SidebarApp extends Component{
    constructor(props) {
      super(props);
      this.state = {
        toggleMenu: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      console.log(this.state.toggleMenu);
      this.setState({toggleMenu: !this.state.toggleMenu});
    }
    
    render(){
        console.log(this.state);
      let slideClass;
      this.state.toggleMenu ? slideClass = 'slideInLeft slide-menu' : slideClass = 'slideInRight';
      
      return(
          
        <div className="main-container">
          <button type="button" onClick={this.handleClick}>
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <Sidebar slideClass={slideClass} onClick={this.handleClick}>
            <span className="glyphicon glyphicon-home"></span>
            <span className="glyphicon glyphicon-cloud-download"></span>
            <span className="glyphicon glyphicon-trash"></span>
            <span className="glyphicon glyphicon-upload"></span>
          </Sidebar>
        </div>
      );
    }
  }
  export default SidebarApp;