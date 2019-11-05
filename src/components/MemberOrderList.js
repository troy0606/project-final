import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "../common/memberOrderList.css";
const MemberOrderList = () => {
  return (
    <>
      <Container
        className="memberOrderList"
        style={{ backgroundColor: "#544741" }}
      >
        <div class="orderListTitle d-flex">
          <GiHamburgerMenu
            className="mx-3 mt-5"
            style={{ fontSize: "30px", color: "white" }}
          />
          <h3 className="ml-5 mt-5">訂單紀錄</h3>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </>
  );
};

export default MemberOrderList;
