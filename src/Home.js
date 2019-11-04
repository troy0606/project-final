import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import { requestApiData } from "./actions/actions";

const HOME = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);
  const reply = useSelector(state => state.dataReducer.results);
  const person = x => (
    <div key={x.id.value}>
      <h3>{x.gender}</h3>
      <h3>{x.name.first}</h3>
      <h3>{x.name.last}</h3>
      <img src={x.picture.medium} alt="profile_photo" />
    </div>
  );
  const result = reply || [];
  return (
    <>
      {result.length !== 0 ? (
        <div>{result.map(person)}</div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default HOME;
