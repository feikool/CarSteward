import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Paymain extends Component{
    render(){
        return(
            <div className="dy-paymain">
                <ul>
                    <li></li>
                    <li></li>
                     <li>
                         <Link to="./condition">
                            查看详情
                        </Link>
                     </li>
                </ul>
            </div>
        )
    }
}
export default Paymain;
