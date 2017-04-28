import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Myfriend extends Component{
    render(){
        return(
            <div className="myfriend">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"> </div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>好友</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Myfriend;