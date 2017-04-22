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
                            <p><h6>我是你的眼</h6><i className="rlm-user-icon-1"></i><i className="rlm-user-icon-2"></i><span className="rlm-user-time">5分钟前</span></p>
                            <p>从今以后保持低调，对自己的美...</p>
                        </div>
                    </div>
                    <div className="rlm-user-kind">#先生志</div>
                </div>
            </div>
        )
    }
}
export default ShareArticle;