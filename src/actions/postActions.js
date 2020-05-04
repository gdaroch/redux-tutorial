import { GET_POSTS_FAILURE } from "./postsActions";

// Redux action types
export const GET_POST = 'GET POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

// Create Redux action creators that return an action
// Begin telling Redux we're going to fetch post from an API
export const getPost = () => ({
  type: GET_POST
});

// Pass the post to Redux on successful API call
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post
});

export const getPostFailure = () => ({
  type: GET_POSTS_FAILURE
});

// Combine them all in an asynchronous thunk
export function fetchPost(postId) {
  return async dispatch => {
    dispatch(getPost());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      dispatch(getPostSuccess(data));
    } catch(error) {
      dispatch(getPostFailure(error));
    }
  }
};
