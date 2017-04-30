import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
            <div className="xj-header container">
                <a className="xj-header-left"onClick={(e)=>{e.stopPropagation();history.back();}}><i className="icon-arrow"></i></a>
                <div className="xj-header-center">
                    <form action="">
                        <div className="xj-search">
                            <a href="#"className="icon-search" ></a>
                        </div>
                        <input type="text" placeholder="店铺/车品/订单"/>
                        <div className="xj_voice">
                            <ul>
                                <a href="#">
                                    <li className="icon-mic xj-mic"></li>
                                </a>
                            </ul>
                        </div>
                    </form>
                </div>
                <a className="xj-header-left" href="#"><i className=""></i></a>
            </div>
        )
    }
}

export default Header;