// 分享文章组件
import React, { Component } from 'react';
class ShareArticle extends Component{
    render(){
        return(
            <div className="sharearticle">
                <div className="rlm-user">
                    <div className="rlm-user-head"></div>
                    <div className="rlm-user-info">
                        <div className="rlm-user-info-wrap">
                            <div className="rlm-user-text"><h6>我是你的眼</h6><i className="rlm-user-icon-1"></i><i className="rlm-user-icon-2"></i><span className="rlm-user-time">5分钟前</span></div>
                            <p>从今以后保持低调，对自己的美...</p>
                        </div>
                    </div>
                    <div className="rlm-user-kind">#先生志</div>
                </div>
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