import React, { Component } from 'react';
import User from './friend_user';
class BPictureArticle extends Component{
    render(){
        return(
            <div className="bpicturearticle">
                <User/>
                <div className="bpa-content-wrap">
                    <p>生命就应该浪费在美好的事物上。</p>
                    <img src={require('./Imgs/b-p-a-1.png')} alt="" className="bpa-content-img"/>
                    <p>生活就像一堵墙，里面的人想出来，外面的人想进来</p>
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
export default BPictureArticle;