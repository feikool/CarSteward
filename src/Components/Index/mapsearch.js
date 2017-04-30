/**
 * Created by Administrator on 2017/4/30.
 */
import React, { Component } from 'react';
import './Css/xj-map.css'
import Header from './header';
import Maping from  './xj-searching'

class Mapsearch extends Component{
    render(){
        return(
            <div className="mapbox">
                <Header left="icon-arrow" title="搜索中" right=""/>
                <Maping/>
            </div>

        )
    }
}
export default Mapsearch;
