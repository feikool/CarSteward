/**
 * Created by Administrator on 2017/4/28.
 */
import React, { Component } from 'react';
class Hotsearch extends Component{
    render(){
        return(
            <div className="xj-hotsearchbigbox">
                <div className="xj-hotsearchbox">
                    <div className="hotsearchhead">
                        <img src={require('./Img/remen.png')} alt=""/>
                    </div>
                    <ul className="listfirst">
                        <li>6折车险</li>
                        <li>大白汽车香水</li>
                        <li>靓车堂</li>
                    </ul>
                    <ul className="listsecond">
                        <li>靓车堂</li>
                        <li>车用风扇</li>
                        <li>二手车估值</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Hotsearch;