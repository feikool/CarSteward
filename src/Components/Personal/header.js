import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Sns extends Component{
    render(){
        return(
            <header>
                <div className="title">
                    <span className="list-1"><i></i><i></i><i></i></span><h1>个人中心</h1><span className="list-2"><i></i><i></i><i></i></span>
                </div>
                <Link to="/personal/account" className="set">
                    <div className="setting icon-settings"> </div>
                </Link>
            </header>
        )
    }
}
class AccountHeader extends Component{
    render(){
        return(
            <header>
        <Link to="/personal" className="act">
        <div className="account icon-arrow"> </div>
        </Link>
        <div className="title">
        <span className="list-1"><i></i><i></i><i></i></span><h1>我的帐号</h1><span className="list-2"><i></i><i></i><i></i></span>
        </div>
        </header>
        )
    }
}
class Header extends Component{
    judgment=()=>{

    };
    render(){
        return(
            <div>
                <AccountHeader path="/personal/account" component={AccountHeader}/>
                {/*<Sns path="/personal" component={Sns}/>*/}
            </div>
        )
    }
}
export default Header;