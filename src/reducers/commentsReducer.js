// Import all actions
import {GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE } from '../actions/commentsActions';

export const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, loading: true };
    case GET_COMMENTS_SUCCESS:
      return { comments: action.payload, loading: false, hasErrors: false };
    case GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
