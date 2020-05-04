// import all actions
import { GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE } from '../actions/postActions';

export const initialState = {
  post: null,
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { post: action.payload, loading: false, hasErrors: false };
    case GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
