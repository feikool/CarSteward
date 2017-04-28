import React, {Component} from 'react';
import Header from './header';
import './Css/header.css';
import './Css/index.css';
/*--------------车先生-----------------*/
class Cararticles extends Component {
    render(){
        return(
            <div className="hyf-cararticles">
                <Header left="icon-arrow" title="车先生" right="icon-search"/>
                <div className="hyf-Cararbanner">
                    <div className="border"></div>
                </div>
                <div className="hyf-carart-main container">
                    <ul className="hyf-carart-list">
                        <li className="hyf-carart-item1"></li>
                        <li className="hyf-carart-item2"></li>
                        <li className="hyf-carart-item3"></li>
                        <li className="hyf-carart-item4"></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cararticles;