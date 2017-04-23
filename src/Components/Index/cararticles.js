import React, {Component} from 'react';
import Header from './header';
import './Css/header.css';
import './Css/cararticless.css';

class Cararticles extends Component {
    render(){
        return(
            <div className="hyf-cararticles">
                <Header left="icon-arrow" title="车先生" right="icon-search"/>
                <div className="hyf-banner">
                    <div className="border"></div>
                </div>
                <div className="hyf-carart-main container">
                    <ul className="hyf-carart-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cararticles;