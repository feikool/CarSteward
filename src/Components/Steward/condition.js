import React, { Component } from 'react';
import Header from './header';
import Headerbg from './headerbg';
import Timeline from './timeline';
import Conditionfooter from './conditionfooter';
class Condition extends Component{
    render(){
        return(
            <div className="dy-condition">
                <Header title={'订单状态'} left={'icon-arrow'} right={'icon-search'}/>
                <Headerbg/>
                <Timeline/>
                <Conditionfooter/>
            </div>
        )
    }
}
export default Condition;
