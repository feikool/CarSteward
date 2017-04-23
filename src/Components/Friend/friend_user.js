import React, { Component } from 'react';
class User extends Component{
    render(){
        return(
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
        )
    }
}
export default User;