import React,{Component} from 'react';
class Footer extends Component{
    render(){
        return(
                <footer>
                    <div className="logout">
                        <h2>退出账号</h2>
                    </div>
                    <div className="lis">
                        <i></i><span></span><i></i>
                    </div>
                    <div className="describe">
                        <span>WITHDRAW FROM</span>
                    </div>
                </footer>
        )
    }
}
export default Footer;