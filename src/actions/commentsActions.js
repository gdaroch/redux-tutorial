export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

// Create redux action creators that return an action
// Begin telling Redux we are going to fetch comments from an API.
export const getComments = () => ({
  type: GET_COMMENTS,
});

// Pass the comments to Redux on successful API call
export const getCommentsSuccess = comments => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});

// Inform Redux that an error was encountered during Redux on failed API call
export const getCommentsFailure = () => ({
  type: GET_COMMENTS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchComments(postId) {
  return async dispatch => {
    dispatch(getComments());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();
      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure(error));
    }
  }
};

