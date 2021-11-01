import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "../src/Page/About"
import Home from "../src/Page/Home"

ReactDOM.render(
  <Router>
    <Switch>
    
      <Route exact path='/' component={App} />
          </Switch>
      </Router>,
      document.getElementById('root')
      );
