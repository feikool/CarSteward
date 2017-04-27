import React, { Component } from 'react';
import './Static/Css/icon.css';
import './Static/Css/base.css';
import {BrowserRouter, Route} from 'react-router-dom';
// 路由相关    载入路由要显示的组件， 注意路径
// 首页
import Index from './Components/Index/index';
// 车管家
import Steward from './Components/Steward/steward';
// 车友汇
import Frined from './Components/Friend/friend';
// 个人中心
import Personal from './Components/Personal/personal';
// 发帖页面
import EditPage from './Components/Common/editpage';
//限时抢购
import Shopping from './Components/Index/shopping';
//违章查询
import Violation from './Components/Index/violation';
//有奖话题
import Prizetopic from './Components/Index/prizetopic';
//搜索
import  Search from './Components/Index/search';
// =================================================================================
//       下面写要url切换的路由路径， 和要切换到的组件页面   除了'/' 需要exact  别的只写path
// =================================================================================


class App extends Component {
  render() {
    return (
        <BrowserRouter>
           <div>
             <Route exact path="/" component={Index}/>
             <Route path="/steward" component={Steward}/>
             <Route path="/frined" component={Frined}/>
             <Route path="/personal" component={Personal}/>
             <Route path="/editpage" component={EditPage}/>
             <Route path="/shoppin" component={Shopping}></Route>
             <Route path="/violation" component={Violation}></Route>
             <Route path="/prizetopic" component={Prizetopic}></Route>
             <Route path="/search" component={Search}></Route>
           </div>
        </BrowserRouter>
    );
  }
}

export default App;
