import React from "react";
import MemberCenter from "./containers/MemberCenter";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  exact path="/member" component={MemberCenter} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
