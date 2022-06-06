import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DetailBlog from "./page/DetailBlog/DetailBlog";
import AddBlog from "./page/AddBlog/AddBlog";
import Content from "./container/Content/Content";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
          </ul>

          <Route path="/" exact component={Content} />
          <Route path="/detail-blog/:blogID" component={DetailBlog} />
          <Route path="/add" component={AddBlog} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
