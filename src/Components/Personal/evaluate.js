import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Evaluate extends Component{
    render(){
        return(
            <div className="order">
                <header>
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"></div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>订单列表</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                    <Link to="/personal/account" className="set">
                        <div className="setting icon-edit"> </div>
                    </Link>
                </header>
                <div className="nav-empty"></div>

                <div className="order-nav">
                    <div className="order-tab">

                        <div className="tab-left">
                            <Link to="/personal/order">
                            <div className="tab-wrap ">
                                <div className="wrap-wrap"><h3>全部订单</h3></div>
                            </div>
                            </Link>
                        </div>
                        <div className="tab-right">
                            <Link to="/personal/evaluate">
                            <div className="tab-wrap active">
                                <div className="wrap-wrap"><h3>评价</h3></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="order-content">
                        <ul className="order-con-wrap">

                        </ul>

                    </div>
                </div>
                <footer>
                    <div className="logout">
                        <h2>再来一单</h2>
                    </div>
                    <div className="lis">
                        <i></i><span></span><i></i>
                    </div>
                    <div className="describe">
                        <span>ANTHOER ONE</span>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Evaluate;