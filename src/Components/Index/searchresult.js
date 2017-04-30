/**
 * Created by Administrator on 2017/4/30.
 */
import React, { Component } from 'react';
import './Css/xj-searchresult.css'

import Header from './header';
import Shop from './xj-searchresult.js'

class Searchresult extends Component{
    render(){
        return(
            <div>
               <Header left="icon-arrow" title="搜索结果" right=""/>
                <Shop/>
            </div>
        )
    }
}
export default Searchresult;