import React, { Component } from 'react';
class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <nav className="rlm-header container">
                <a className="rlm-header-left"onClick={(e)=>{e.stopPropagation();history.back();}}><i className={this.props.left}></i></a>
                <div className="rlm-header-center">
                    <span className="rlm-center-left"><i></i><i></i><i></i></span>
                    <span className="rlm-center-center">{this.props.title}</span>
                    <span className="rlm-center-right"><i></i><i></i><i></i></span>
                </div>
                <a className="rlm-header-left"><i className={this.props.right}></i></a>
            </nav>
        )
    }
}

export default Header;