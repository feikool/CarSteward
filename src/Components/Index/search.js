/**
 * Created by Administrator on 2017/4/26.
 */
import React, { Component } from 'react';
import './Css/xj_header.css';
import './Css/xj-search.css';
//搜索头部组件
import Header from './xj_header';
//热门搜索
import Hotsearch from './xj-hotsearch.js';
//历史搜索
import Historysearch from './xj_historysearch';
//近期浏览
import Recent from './xj-recent';

class Search extends Component{
    render(){
        return(
            <div className="xj-big-box">
               <Header/>
                <Hotsearch/>
                <Historysearch/>
                <Recent/>
            </div>
        )
    }
}
export default Search;

