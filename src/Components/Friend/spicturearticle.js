// 小图片文章组件
import React, { Component } from 'react';
import User from './friend_user';
class SPictureArticle extends Component{
    render(){
        return(
            <div className="spicturearticle">
                <User/>
                <div className="rlm-spa-img-lis-wrap">
                    <p>生命就应该浪费在美好的事物上,生命就应该浪费在美好的事物上生命就应该浪费在美好的事物上</p>
                    <div className="spa-img-lis">
                        <img src={require('./Imgs/s-p-a-1.png')} alt="" className="spa-img-item"/>
                        <img src={require('./Imgs/s-p-a-2.png')} alt="" className="spa-img-item"/>
                        <img src={require('./Imgs/s-p-a-3.png')} alt="" className="spa-img-item"/>
                    </div>
                </div>
                <div className="rlm-comment">
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-eye"></i>
                        <span>6899</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-laud"></i>
                        <span>6899</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-comments"></i>
                        <span>6899</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default SPictureArticle;