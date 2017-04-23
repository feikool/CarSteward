import React, {Component} from 'react';

import Flashsale from './cararticles';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Index extends Component {
    render() {
        return (
            <Router>
                <div className="hyf-index">
                    <Route path="/flashsale" component={Flashsale}/>
                </div>
            </Router>
        )
    }
}

export default Index;