import React from "react";
import MemberOrder from "../components/MemberOrder";
import MemberSideBar from "../components/MemberSideBar";
import { HashRouter as Router, Route ,Switch} from "react-router-dom";

const MemberCenter = ({match}) => {
  return (
    <>
      <div className="d-flex">
        <MemberSideBar />
          <Switch>
            <Route exact path={`${match.url}/orderlist`} component={MemberOrder}/>
            <Route exact path={`${match.url}/orderlist`} component={MemberOrder}/>
            <Route exact path={`${match.url}/orderlist`} component={MemberOrder}/>
            <Route exact path={`${match.url}/orderlist`} component={MemberOrder}/>
          </Switch>
      </div>
    </>
  );
};

export default MemberCenter;