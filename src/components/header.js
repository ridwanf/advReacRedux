import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component{
  authButton(){
    return <button>Sign in</button>
  }

  render(){
    return(
      <nav className ="navbar navbar-light">
        <ul className ="nav navbar-nav">
          <li className="nav-item"
        </ul>
      </nav>
    )
  }
}
