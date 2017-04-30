import React, { Component } from 'react';
import User from './friend_user';
import {Link} from 'react-router-dom';
class BPictureArticle extends Component{
    render(){
        if(!this.props.data){
            return null;
        }

        return(
            <Link to='/detailer' className="bpicturearticle">
                <User data={this.props.data} title={this.props.title}/>
                <div className="bpa-content-wrap">
                    <p>{this.props.data['e_title']}</p>
                    <img src={require(`./Imgs/${this.props.data['e_img']}`)} alt="" className="bpa-content-img"/>
                    <p>{this.props.data['e_text']}</p>
                </div>
                <div className="rlm-comment">
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-eye"></i>
                        <span>{this.props.data['look']}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-laud"></i>
                        <span>{this.props.data['laud']}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-comments"></i>
                        <span>{this.props.data['reply']}</span>
                    </a>
                </div>
            </Link>
        )
    }
}
export default BPictureArticle;