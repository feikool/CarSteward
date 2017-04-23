import React, { Component } from 'react';
import Header from './header';
import BPictureArticle from './bpicturearticle';
import ShareArticle from './sharearticle';
class General extends Component{
    render(){
        return(
            <div className="general">
                <Header title={'车常识'} left={'icon-arrow'} right={'icon-heart'}/>
                <BPictureArticle/>
                <ShareArticle/>
            </div>
        )
    }
}

export default General;