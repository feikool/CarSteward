import React, {Component} from 'react';
import Icon from 'antd/lib/icon';
//导航组件
import { Link } from 'react-router-dom';
//

class Banner extends Component {
    render() {
        return (
            <div className="hyf-banner-main">
                <ul className="hyf-banner-img">
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                </ul>
                <ul className="hyf-banner-list">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

class Speedy extends Component {
    render() {
        return (
                <div className="hyf-speedy container">
                    <ul className="hyf-speedy-main">
                        <li className="hyf-speedy-con">
                            <Link to="/flashsale">
                                <div className="hyf-speed-img"></div>
                                <p className="title">限时抢购</p>
                            </Link>
                        </li>
                        <li className="hyf-speedy-con">
                            <div className="hyf-speed-img"></div>
                            <p className="title">限时抢购</p>
                        </li>
                        <li className="hyf-speedy-con">
                            <div className="hyf-speed-img"></div>
                            <p className="title">限时抢购</p>
                        </li>
                    </ul>
                </div>

        )
    }
}

class Opimization extends Component {
    render() {
        return (
            <div className="hyf-optimization">
                <div className="hyf-optim-title">
                    <div className="title"></div>
                </div>
                <ul className="hyf-optim-con ">
                    <li></li>
                    <li className="hyf-optim-item container">
                        <h2><span>access</span>ories</h2>
                        <h3>优质配件</h3>
                        <div className="inner">
                            <Icon type="plus"/>
                        </div>
                        <p>精挑细选 为您选优</p>
                    </li>
                    <li></li>
                    <li className="hyf-optim-item container">
                        <h2><span>conver</span>sation</h2>
                        <h3>有奖话题</h3>
                        <div className="inner">
                            <Icon type="plus"/>
                        </div>
                        <p>你开车去的最美的地方</p>
                    </li>
                    <li></li>
                    <li className="hyf-optim-item container">
                        <h2><span>profe</span>ssional</h2>
                        <h3>上门服务</h3>
                        <div className="inner">
                            <Icon type="plus"/>
                        </div>
                        <p>三重发动机舱清洗</p>
                    </li>
                </ul>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Speedy/>
                <Opimization/>
            </div>
        )
    }
}

export default Main;