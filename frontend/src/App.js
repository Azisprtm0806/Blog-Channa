import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DetailBlog from "./page/DetailBlog/DetailBlog";
import AddBlog from "./page/AddBlog/AddBlog";
import Content from "./container/Content/Content";
import EditBLog from "./page/EditBlog/EditBlog";

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
          </ul>

          <Route path="/" exact component={Content} />
          <Route path="/detailBlog/:blogID" component={DetailBlog} />
          <Route path="/editBlog/:blogID" component={EditBLog} />
          <Route path="/add" component={AddBlog} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
