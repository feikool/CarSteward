import React, { Component } from 'react';
import './Css/header.css';
class Header extends Component{
    render(){
        return(
            <nav className="hyf-header container" id="hyf-header">
                <a className="hyf-header-left"><i className={this.props.left}></i></a>
                <div className="hyf-header-center">
                    <span className="hyf-center-left"><i></i><i></i><i></i></span>
                    <span className="hyf-center-center">{this.props.title}</span>
                    <span className="hyf-center-right"><i></i><i></i><i></i></span>
                </div>
                <a className="hyf-header-left"><i className={this.props.right}></i></a>
            </nav>
        )
    }
}

export default Header;