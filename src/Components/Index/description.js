import React, {Component} from 'react';
import Icon from 'antd/lib/icon';
import 'antd/dist/antd.min.css';

import Header from './header';

import './Css/description.css';
import 'antd/dist/antd.min.css';
class Descmain extends Component {
    render() {
        return (
            <div className="hyf-desc-info">
                <div className="hyf-desc-info-con ">
                    <div className="hyf-desc-info-img">
                        <img src={require('./Img/hyf_parts_1.png')} alt=""/>
                    </div>
                    <div className="hyf-desc-info-centent">
                        <h1>金属摆件 汽车摆件</h1>
                        <h2>Metal decoration car</h2>
                        <span className="desc-info-center"></span>
                        <p className="info-centent-sub">沿途汽车用品有限公司生产销售各类汽车用品、涵盖车内外
                            装饰改装及安全系列产品。</p>
                        <ul className="desc-info-color">
                            <li></li>
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className="desc-info-cost">
                            <p><span>468</span>.00</p>
                            <div className="desc-info-cost">
                                <span className="desc-info-cost-left"><i></i></span>
                                <input type="text" value='2'/>
                                <span className="desc-info-cost-right"><Icon type="plus"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Commodity extends Component {
    render() {
        return (
            <div className="hyf-dity-main container">
                <div className="hyf-dity-cont">
                    <div className="title">
                        <div className="title-con"></div>
                    </div>
                    <div className="dity-main">
                        <ul className="dity-main-list">
                            <li>商品详情</li>
                            <li className="active">宝贝评价</li>
                        </ul>
                        <div className="dity-goodplay">
                            <div className="dity-goodplay-con"><p>&nbsp;<span>85</span>%</p></div>
                        </div>
                        <ul className="buttones">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Review extends Component {
    /* userAvatar 头像
     * userId    用户id
     * userTime  评论时间
     * userColor  用户购买颜色
     * reviewCon  内容
     * reviewImg   图片
     *  reviewReply  回复*/
    state = {
        data:[
            {
                userAvatar: 'hyf_list2.png',
                userId: '大石碎胸口',
                userTime: '2017.02.13',
                userColor: '# 琥珀色',
                reviewCon: '>轻易不回复，除非东西好，这个东西放在车上确实很好，物超所值，越看越喜欢！',
                reviewImg: ['hyf_list2.png', 'hyf_list1.png'],
                reviewReply: '感谢亲的支持！'
            }
        ]
    }

    render() {
        let list = this.state.data.map((v, i) => (
            <li className="hyf-review-item" key={i}>
                <div className="review-user">
                    <div className="user-left">
                        <div className="user-avatar"><img src={require('./Img/'+v.userAvatar)} alt=""/></div>
                        <div className="user-id">
                            <p>{v.userId}</p>
                            <time>{v.userTime}</time>
                        </div>
                    </div>
                    <div className="user-right">
                        <div className="user-color">{v.userColor}</div>
                    </div>
                </div>
                <div className="review-content">
                    <p className="review-con">{v.reviewCon}</p>
                    <ul className="review-con-img">
                        {v.reviewImg.map((v,i)=>(
                            <li key={i}><img src={require('./Img/'+v)} alt=""/></li>
                        ))}
                    </ul>
                    <div className="review-con-reply">
                        <span>商家回复: </span><p className="reply-con">{v.reviewReply}</p>
                    </div>
                </div>
            </li>
        ))
        return (
            <ul className="hyf-review-list container">
                {list}
            </ul>
        )
    }
}

class Description extends Component {
    render() {
        return (
            <div className="hyf-desc">
                <Header left="icon-arrow" title="商品详情" right="icon-shoppingcar"/>
                <div className="hyf-desc-banner"></div>
                <Descmain/>
                <Commodity/>
                <Review/>
            </div>
        )
    }
}

export default Description;