import React, { Component } from 'react';
import './Css/rlm_friend.css';
// 车友汇头部组件
import Header from './header';
// 页面信息载体
import Main from './main';
class Friend extends Component{
    render(){
        return(
            <div className="rlm-friend">
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default Friend;