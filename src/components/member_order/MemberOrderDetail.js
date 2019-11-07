import React,{useState} from "react";
// import {useSelector , useDispatch} from 'react-redux';

import "../../common/memberOrderDetail.scss";
import OrderDeListCourse from './OrderDeListCourse';
import OrderDeListTeacher from './OrderDeListTeacher';
import OrderDeListIngre from './OrderDeListIngre';

const MemberOrderDetail = ({orderType}) => {
  function renderSwitch(a) {
  switch(a) {
    case 1:
      return <OrderDeListIngre/>;
    case 2:
      return <OrderDeListCourse/>;
    case 3:
      return <OrderDeListTeacher/>;
    default:
      return '';
  }
}
  return (
    <>
      <div className="container">
      {renderSwitch(orderType)}
      </div>
    </>
  );
};

export default MemberOrderDetail;
