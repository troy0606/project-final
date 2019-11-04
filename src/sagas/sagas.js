import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { receiveApiData, REQUEST_API_DATA } from "../actions/actions";
import { fetchData } from "../api/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    //   call API
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    // yield put(receiveApiData(e));
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export default mySaga;
