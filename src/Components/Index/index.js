import React, {Component} from 'react';
import 'antd/dist/antd.min.css';

import './Css/index.css';
import Header from './header';
import Main from './main';

class Index extends Component {
    render() {
        return (
            <div className="hyf-index">
                <Header left="icon-pointer" title="车友汇" right="icon-search"/>
                <Main/>
            </div>
        )
    }
}

export default Index;