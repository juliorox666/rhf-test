import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { SigninPage } from "pages/Signin";
import { HomePage } from "pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <div className="app__title">React Hook Form Test</div>
      </header>
      <div className="app__content">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="*" component={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
