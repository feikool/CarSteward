import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
            <nav className="rlm-header">
                <a className="rlm-header-left"><i className="icon-pointer"></i></a>
                <div className="rlm-header-center">
                    <span><i></i><i></i><i></i></span>
                    <span>车友汇</span>
                    <span><i></i><i></i><i></i></span>
                </div>
                <a className="rlm-header-left"><i className="icon-search"></i></a>
            </nav>
        )
    }
}

export default Header;