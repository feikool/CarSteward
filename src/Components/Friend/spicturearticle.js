// 小图片文章组件
import React, { Component } from 'react';
class SPictureArticle extends Component{
    render(){
        return(
            <div className="spicturearticle">
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
                <div className="rlm-spa-img-lis-wrap">
                    <p>生命就应该浪费在美好的事物上,生命就应该浪费在美好的事物上生命就应该浪费在美好的事物上</p>
                    <div className="spa-img-lis">
                        <div className="spa-img-item"></div>
                        <div className="spa-img-item"></div>
                        <div className="spa-img-item"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SPictureArticle;