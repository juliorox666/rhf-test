import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
        </Router>
      </div>
    </div>
  );
};

export default App;
