import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pay from './pay';
import Maskyhq from './maskyhq';
class Maskpay extends Component{
    render(){
        return(
            <div className="dy-maskpay">
                <Pay/>
                <Maskyhq/>
            </div>
        )
    }
}
export default Maskpay;
