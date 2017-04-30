/**
 * Created by Administrator on 2017/4/30.
 */
import React, { Component } from 'react';
class Recent extends Component{
    render(){
        return(
            <div className="xj-rencentbigbox">
                <div className="xj-rencent"></div>
                <div className="xj-rencentbox">

                    <ul className="rencentbox">
                        <li>
                            <p className="xj-img">
                                <img src={require('./Img/gjl_shop_1.png')}  alt=""/>
                                <a href="" className="icon-shopping"></a>
                            </p>
                            <span>
                                <p>迷你小冰箱</p>
                                <p>
                                    <i>MINI</i>
                                    <i> REFRIGERATOR</i>
                                </p>
                                <p>$ 2399</p>
                            </span>
                        </li>

                    </ul>
                    <ul className="rencentbox">
                        <li>
                            <p className="xj-img">
                                <img src={require('./Img/gjl_shop_2.png')}  alt=""/>
                                <a href="" className="icon-shopping"></a>
                            </p>
                            <span>
                                <p>迷你小冰箱</p>
                                <p>
                                    <i>MINI</i>
                                    <i> REFRIGERATOR</i>
                                </p>
                                <p>$ 2399</p>
                            </span>
                        </li>

                    </ul>
                    <ul className="rencentbox">
                        <li>
                            <p className="xj-img">
                                <img src={require('./Img/gjl_shop_3.png')}  alt=""/>
                                <a href="" className="icon-shopping"></a>
                            </p>
                            <span>
                                <p>迷你小冰箱</p>
                                <p>
                                    <i>MINI</i>
                                    <i> REFRIGERATOR</i>
                                </p>
                                <p>$ 2399</p>
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        )

    }
}

export default Recent;