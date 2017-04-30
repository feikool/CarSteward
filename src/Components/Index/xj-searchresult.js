/**
 * Created by Administrator on 2017/4/30.
 */
import React, { Component } from 'react';
class Shop extends Component{
    render(){
        return(
            <div className="mapbigbox">
                <img src={require('./Img/map02.png')} alt=""/>
                <div className="xj-shopbigbox">
                    <div className="shopbox">
                        <div className="xj-shopleftbox">
                            <img src={require('./Img/banner.png')} alt="" className="tx"/>
                            <ul className="starbox">
                                <li><img src={require('./Img/start_03.png')} alt=""/></li>
                                <li><img src={require('./Img/start_03.png')} alt=""/></li>
                                <li><img src={require('./Img/start_03.png')} alt=""/></li>
                                <li><img src={require('./Img/start_03.png')} alt=""/></li>

                                <li><img src={require('./Img/start_05.png')} alt=""/></li>
                            </ul>
                        </div>
                        <ul className="xj-shoprightbox">
                            <li>
                                <p>靓车堂</p>
                                <p>(平阳路店)</p>
                                <p>
                                    <img src={require('./Img/jianpai_03.png')} alt=""/>
                                </p>
                            </li>
                            <li>大店区短风北街七巷</li>
                            <li></li>
                            <li>
                                <span>
                                    <p className="icon-shopping"></p>
                                    <p>   2K</p>
                                </span>
                                <span>
                                    <p className="icon-text"></p>
                                    <p>   3.6K</p>
                                </span>
                                <span>
                                    <p className="icon-house"></p>
                                    <p>   2.17KM</p>
                                </span>
                            </li>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default Shop;
