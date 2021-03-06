import React, { Component } from 'react';
import Header from './header';
import Map from './map'
import Plusmain from './plusmain';
import Zhezhao from './zhezhao';

class Plus extends Component{
    render(){
        return(
            <div className="dy-plus">
                <Zhezhao/>
                <div className="dy-over">
                    <Header title={'靓车堂(平阳路店)'} left={'icon-arrow'} right={'icon-shoppingcar'}/>
                    <Map/>
                    <Plusmain/>
                </div>

            </div>

        )
    }
}
export default Plus;