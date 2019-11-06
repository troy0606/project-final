import React from "react";
import MemberOrder from "../components/MemberOrder";
import MemberSideBar from "../components/MemberSideBar";

const MemberCenter = () => {
  return (
    <>
      <div className="d-flex">
        <MemberSideBar />
        {/* <MemberOrder style={{ backgroundColor: "#EABEAE" }} /> */}
      </div>
    </>
  );
};

export default MemberCenter;
