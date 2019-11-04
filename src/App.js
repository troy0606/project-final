import React from "react"
import MemberCenter from "./containers/MemberCenter"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/member" component={MemberCenter} />
        </Switch>
      </Router>
    </>
  )
};

export default App

