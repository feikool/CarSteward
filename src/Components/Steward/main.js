import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Title extends Component{
    render(){
        return(
            <div className="dy-title container">
                <div className="dy-sjnew"></div>
                <div className="dy-fwxm"></div>
            </div>
        )
    }
}
class Project extends Component{
    render(){
        return(
            <div className="dy-project">
                <div className="dy-init container">
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
class Evaluate extends Component{
    render(){
        return(
            <div className="dy-evaluate">
                <div className="dy-init container">
                    <div className="dy-pingce"></div>
                </div>
            </div>
        )
    }
}
class Button extends Component{
    render(){
        return(
            <div className="dy-button">
                <div className="dy-init">
                    <Link to="/calendar" className="dy-left-button">预约洗车</Link>
                    <Link to="/order" className="dy-right-button">立即结算</Link>
                </div>
            </div>
        )
    }
}
class Plue extends Component{
    render(){
        return(
            <Link to="/plus" className="dy-pluse">
                +
            </Link>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <div class="dy-main">
                <Title/>
                <Project/>
                <Evaluate/>
                <Button/>
                <Plue/>
            </div>
        )
    }
}
export default Main;
