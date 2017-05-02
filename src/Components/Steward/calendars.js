import React, { Component } from 'react';
import Header from './header';
import Map from './map'
import Plusmain from './plusmain';
import Mask from './mask';
class Calendars extends Component{
    render(){
        return(
            <div className="dy-overfl">
                <Mask/>
                <div className="dy-calendars">
                    <Header title={'靓车堂(平阳路店)'} left={'icon-arrow'} right={'icon-shoppingcar'}/>
                    <Map/>
                    <Plusmain/>
                </div>
            </div>
        )
    }

}
export default Calendars;

