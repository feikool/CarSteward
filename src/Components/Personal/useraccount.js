
import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import Footer from  './footer';
import Header from './header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class UserAccount extends Component{
    render(){
        return(
            <div className="accounts">
               <Header/>
                <div className="nav-empty"></div>
                <div className="header-bg-empty"></div>
                <div className="account-nav user-nav">
                    <div className="account-set">
                        <div className="user-header account-safe">
                            <div className="user-wrap">
                                <div className="account-title">
                                    <h2>头像</h2>
                                </div>
                                <div className="icon">
                                    <div className="wrap"></div>
                                </div>
                                <div className="arrow icon-arrow"></div>
                            </div>
                        </div>
                        <div className="new-message">
                            <div className="wrap">
                                <div className="message-wrap">
                                    <h2>用户名</h2>
                                </div>
                                <div className="arrow-wrap">
                                    <span>SNK72845275</span>
                                </div>
                            </div>
                        </div>
                        <div className="new-message">
                            <div className="wrap">
                                <div className="message-wrap">
                                    <h2>账户密码</h2>
                                </div>
                                <div className="arrow-wrap">
                                    <span>未设置</span>
                                </div>
                            </div>
                        </div>
                        <div className="new-message">
                            <div className="wrap">
                                <div className="message-wrap">
                                    <h2>用户名</h2>
                                </div>
                                <div className="arrow-wrap">
                                    <span>152******7898</span>
                                </div>
                            </div>
                        </div>
                        <div className="common">
                            <div className="common-wrap">
                                <h2>微信账号</h2>
                            </div>
                            <div className="arrow-wrap">
                                <span>绑定</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default UserAccount;