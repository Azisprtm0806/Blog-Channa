import React, {Component, Fragment} from 'react';
import './header.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import App from '../../App';
import DetailBlog from '../../page/DetailBlog/DetailBlog';
import AddBlog from '../../page/AddBlog/AddBlog';

class Header extends Component{
  render(){
    return(
      <Router>
        <Fragment>
          <div className="navigation">
              <Link to="/">HOME</Link>
              <Link to="/product">Product</Link>
              <Link to="/lifeCycle">LifeCycle</Link>
              <Link to="/youtube-comp">YouTube Comp Page</Link>
              <Link to="/hooks">Hooks</Link>
          </div>
                
          <Route path="/" exact component={App} />
          <Route path="/detail-blog/:blogID" component={DetailBlog} />
          <Route path="/add" component={AddBlog} />

      </Fragment>
      </Router>
    )
  }
}

export default Header;