import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

//import将会把页面放入主界面接口
import Home from "./pages/Home";
import EvidenceList from "./pages/EvidenceList";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
import AnalyseArticle from "./pages/AnalyseArticle";
import ModerateArticle from "./pages/ModerateArticle"; 
import SearchingArticle from "./pages/SearchingArticle";

const App = () =>  {
  
  //(Navlink)是放置菜单的区域。菜单是页面的重要组成部分,菜单的集合定义为导航条如Home，EvidenceList，Analyse an Article，Searching an Article，Submit an Article
  //route path等于当前路由对象的路径
  //404 当用户在后方添加了不知名域名或者输入了我们没有的页面时，回弹回404页面
    return (
        <Router>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/EvidenceList">EvidenceList</NavLink></li>
                <li><NavLink to = "/AnalyseArticle">Analyse an Article</NavLink></li>
                <li><NavLink to = "/ModerateArticle">Moderate an Article</NavLink></li>
                <li><NavLink to = "/SearchingArticle">Searching an Article</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
                
                
            </ul>
            
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route  path="/EvidenceList" component={EvidenceList}/>
            <Route  path="/AnalyseArticle" component={AnalyseArticle}/>
            <Route  path="/ModerateArticle" component={ModerateArticle}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
            <Route  path="/SearchingArticle" component={SearchingArticle}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404" />

          </div>
        </div>
        </Router>
    );
}
 
export default App;
