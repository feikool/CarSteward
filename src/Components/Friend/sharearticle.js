// 分享文章组件
import React, { Component } from 'react';
import User from './friend_user';
class ShareArticle extends Component{
    render(){
        return(
            <div className="sharearticle">
                <User/>
                <div className="sa-content">
                    <div className="sa-content-wrap">
                        <img src={require('./Imgs/s-a-1.png')} alt="" className="sa-content-img"/>
                        <div className="sa-content-text-wrap">
                            <div className="sa-content-text">
                                <p>乐天在华业务竟然这么多！</p>
                                <h6>知乎日报</h6>
                            </div>
                            <div className="sa-content-right">分享文章</div>
                        </div>
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
export default ShareArticle;