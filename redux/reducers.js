import { GET_TITLES } from "./actions";

const initialState = {
  titles: [],
};

function titlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TITLES:
      return { ...state, titles: action.payload };
    default:
      return state;
  }
}

export default titlesReducer;
