import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/postActions';
import { Post } from '../components/Post';

// dispatch will automatically be available on a connected component.
const SinglePostPage = ({ match, dispatch, post, loading, hasErrors }) => {
  useEffect(() => {
    console.log(match.params.id);

    dispatch(fetchPost(match.params.id));
  }, [dispatch, match.params.id]);

  const renderPost = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return <Post key={post.id} post={post} showButton={false} />
  };

  return(
    <section>
      <h1>Post</h1>
      {post &&
      renderPost()
      }
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading,
  hasErrors: state.post.hasErrors,
});

export default connect(mapStateToProps)(SinglePostPage);
