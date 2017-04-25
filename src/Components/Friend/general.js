import React, { Component } from 'react';
import Header from './header';
import BPictureArticle from './bpicturearticle';
import ShareArticle from './sharearticle';
class General extends Component{
    constructor(){
        super();
        this.r = window.location.href.split('=')[1];
        switch (this.r) {
            case '1':
                this.title = '车常识';
                break;
            case '2':
                this.title = '车社区';
                break;
            case '3':
                this.title = '车新手';
                break;
            case '4':
                this.title = '先生志';
                break;
        };
        this.state={
            dataSource:[]
        }
    }
    componentDidMount(){
        let temp = this.r;
        fetch(`/essay/lists?esid=${temp}`)
            .then(res=>res.json())
            .then((data)=>{
                let td = React.Children.toArray(data);
                console.log(td);
                console.log(data)
            })
    }
    render(){
        return(
            <div className="general">
                <Header title={this.title} left={"icon-arrow"} right={"icon-heart"}/>
                <div className="rlm-temp"></div>
                <BPictureArticle/>
                <ShareArticle/>
                <div>{this.state.dataSource}</div>
            </div>
        )
    }
}

export default General;