import React, { Component } from 'react';
// 引入样式
import {Link} from 'react-router-dom';
import './Css/rlm_floor.css';

class Footer extends Component{
    state={
        flag:1
    };
    render(){
        console.log(this.state.flag)
        return(
            <div className="rlm-footer">
                        <Link  to="/" className={this.state.flag===1?'hot':''} onClick={()=>this.setState({flag:1})}>
                            <i className="icon-home"></i>
                            <span>首页</span>
                        </Link>
                        <Link to="/steward" className={this.state.flag===2?'hot':''} onClick={()=>this.setState({flag:2})}>
                            <i className="icon-comments"></i>
                            <span>车管家</span>
                        </Link>
                        <Link to="/frined" className={this.state.flag===3?'hot':''} onClick={()=>this.setState({flag:3})}>
                            <i className="icon-friends"></i>
                            <span>车友汇</span>
                        </Link>
                        <Link to="/personal" className={this.state.flag===4?'hot':''} onClick={()=>this.setState({flag:4})}>
                            <i className="icon-person"></i>
                            <span>我的</span>
                        </Link>
                    </div>
        )
    }
}

export default Footer;