import React from "react";
import MemberOrder from "../components/member_order/MemberOrder";
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
            <Route exact path={`/order`} component={MemberOrder} />
            <Route exact path={`/:edit`} component={MemberEdit} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default MemberCenter;
