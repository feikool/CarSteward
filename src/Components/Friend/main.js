import React, { Component } from 'react';
import Record from './record';
class Main extends Component{
    render(){
        return(
            <div className="rlm-main-wrap">
                <div className="rlm-main-banner-wrap">
                    <div className="rlm-main-banner-text container">
                        <p>手机里的初春</p>
                        <p>MOBILE PHONE IN <span>SRRING</span></p>
                    </div>
                </div>
                <div className="rlm-main-btn-wrap container">
                    <a href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车常识</span>
                    </a>
                    <a href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车社区</span>
                    </a>
                    <a href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车新手</span>
                    </a>
                    <a href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车社区</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Main;
