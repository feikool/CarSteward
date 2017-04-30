/**
 * Created by Administrator on 2017/4/28.
 */
import React, { Component } from 'react';
class Historysearch extends Component{
    render(){
        return(
           <div className="xj-historysearchbigbox">
               <div className="xj-historysearchbox">
                   <div className="hotsearchhead">
                       <img src={require('./Img/lishi.png')} alt=""/>
                   </div>
                   <ul className="historysearchbox">
                       <li></li>
                       <li>靓车堂</li>
                       <li className="icon-cross xj-cross"></li>
                   </ul>
                   <ul className="historysearchbox">
                       <li></li>
                       <li>靓车堂</li>
                       <li className="icon-cross xj-cross"></li>
                   </ul>
                   <ul className="historysearchbox">
                       <li></li>
                       <li>靓车堂</li>
                       <li className="icon-cross xj-cross"></li>
                   </ul>
                   <ul className="historysearchbox">
                       <li></li>
                       <li>靓车堂</li>
                       <li className="icon-cross xj-cross"></li>
                   </ul>
               </div>

           </div> 
        )
    }
}
export default Historysearch;
