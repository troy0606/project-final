import React, { useState } from "react";

import { provider } from 'react-redux'
// import store from '../../store'
import { Container, Row, Col } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import MemberOrderList from "./MemberOrderList";
import MemberOrderDetail from "./MemberOrderDetail";

const MemberOrder = (props) => {
  const [orderType, setOrderType] = useState(1);
  const changeOrderType = (a) => {
    setOrderType(a);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 p-0">
          <MemberOrderList changeOrderType={changeOrderType} />
        </div>
        <div className="col-8 p-0">
          <MemberOrderDetail orderType={orderType} />
        </div>
      </div>
    </div>
  );
};

export default MemberOrder;
