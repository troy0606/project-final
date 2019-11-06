import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "../common/memberOrderList.css";
import MemberOrderList from "./MemberOrderList";
import MemberOrderDetail from "./MemberOrderDetail";

const MemberOrder = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 p-0">
          <MemberOrderList />
        </div>
        <div className="col-8 p-0">
          <MemberOrderDetail />
        </div>
      </div>
    </div>
  );
};

export default MemberOrder;
