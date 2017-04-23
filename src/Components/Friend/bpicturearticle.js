import React, { Component } from 'react';
class BPictureArticle extends Component{
    render(){
        return(
            <div className="bpicturearticle">
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