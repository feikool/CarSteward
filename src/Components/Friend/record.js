import React, { Component } from 'react';
// 小图片文章组件
import General from './general';


class Record extends Component{
    render(){
        return(
            <div className="rlm-record-wrap">
                <General temp={1}/>
            </div>
        )
    }
}
export default Record;