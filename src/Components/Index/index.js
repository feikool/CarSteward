import React, {Component} from 'react';
import './Css/index.css';
import Header from './header';

class Banner extends Component {
    render() {
        return (
        <div className="hyf-banner-main">
            <ul className="hyf-banner-img">
                <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
            </ul>
            <ul className="hyf-banner-list">
                <li className="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        )
    }
}

class Speedy extends  Component{
    render(){
        return(
            <div className="hyf-speedy container">
                <ul className="hyf-speedy-main">

                </ul>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div className="hyf-index">
                <Header left="icon-pointer" title="车友汇" right="icon-search"/>
                <Banner/>
                <Speedy/>
            </div>
        )
    }
}

export default Index;