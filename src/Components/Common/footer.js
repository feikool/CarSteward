import React, { Component } from 'react';
// 路由组件
import {BrowserRouter, Route, Link} from 'react-router-dom';
// 引入样式
import './Css/rlm_floor.css';
// 首页
import Index from '../Index/index';
// 车管家
import Steward from '../Steward/steward';
// 车友汇
import Frined from '../Friend/friend';
// 个人中心
import Personal from '../Personal/personal';

class Footer extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <div>
                        <Route exact path="/" component={Index}/>
                        <Route path="/steward" component={Steward}/>
                        <Route path="/frined" component={Frined}/>
                        <Route path="/personal" component={Personal}/>
                    </div>
                    <div className="rlm-footer">
                        <Link  to="/" className="rlm-footer-index">
                            <i className="icon-home"></i>
                            <span>首页</span>
                        </Link>
                        <Link to="/steward" className="rlm-footer-steward">
                            <i className="icon-comments"></i>
                            <span>车管家</span>
                        </Link>
                        <Link to="/frined" className="rlm-footer-frined">
                            <i className="icon-friends"></i>
                            <span>车友汇</span>
                        </Link>
                        <Link to="/personal" className="rlm-footer-personal">
                            <i className="icon-person"></i>
                            <span>我的</span>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Footer;