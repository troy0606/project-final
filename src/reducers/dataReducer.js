import { RECEIVE_API_DATA } from "../actions/actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA: {
      return data;
      break;
    }
    default: {
      return state;
    }
  }
};
