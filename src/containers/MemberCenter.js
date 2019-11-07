import React from "react";
import MemberOrder from "../components/MemberOrder";
import MemberSideBar from "../components/MemberSideBar";
import MemberEdit from "../components/MemberEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
const MemberCenter = ({ match }) => {
  return (
    <>
      <div className="d-flex">
        <Router>
          <MemberSideBar />
          <Switch>
            <Route exact path={`/:edit`} component={MemberEdit} />
            {/* <Route exact path={`/order`} component={MemberOrder} /> */}
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default MemberCenter;
