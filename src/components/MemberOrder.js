import React, { Component } from "react";
import MemberOrderList from "../components/MemberOrderList";
import MemberOrderDetail from "../components/MemberOrderDetail";

const MemberOrder = () => {
  return (
    <>
      <wrapper
        className="container-fluid row d-flex"
        style={{ margin: "15px 0 15px" }}
      >
        <div className="col-4 p-0">
          <MemberOrderList />
        </div>
        <div className="col-8 p-0">
          <MemberOrderDetail />
        </div>
      </wrapper>
    </>
  );
};

export default MemberOrder;
