import React, { Component } from 'react';
import Header from './header';
import Essay from './essay';
import Comment from './comment';
class Detailer extends Component{
    render(){
        return(
            <div>
                <Header title={'车友汇'} left={'icon-arrow'} right={'icon-heart'}/>
                <div className="detailer-main-wrap">
                    <div className="container">
                        <div className="rlm-user">
                            <div className="rlm-user-head"></div>
                            <div className="rlm-user-info">
                                <div className="rlm-user-info-wrap">
                                    <div className="rlm-user-text"><h6>你是我的眼</h6><i className="rlm-user-icon-1"></i><i className="rlm-user-icon-2"></i><span>5分钟前</span></div>
                                    <p>生活就应该浪费在美好事物上...</p>
                                </div>
                            </div>
                            <div className="rlm-user-kind">#先生志</div>
                        </div>
                        <Essay/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detailer;