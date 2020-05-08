import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentsActions';
import { Post } from '../components/Post';
import { Comment } from '../components/Comment';

// dispatch will automatically be available on a connected component.
const SinglePostPage = ({ match, dispatch, post, comments, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPost(match.params.id));
    dispatch(fetchComments(match.params.id));
  }, [dispatch, match.params.id]);

  const renderPost = () => {
    if (loading.post) return <p>Loading posts...</p>
    if (hasErrors.post) return <p>Unable to display posts.</p>
    return <Post key={post.id} post={post} showButton={false} />
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>
    if (hasErrors.comments) return <p>Unable to display comments.</p>
    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return(
    <section>
      <h1>Post</h1>
      {post &&
        renderPost()
      }
      <h2>Comments</h2>
      {comments &&
        renderComments()
      }
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = state => ({
  post: state.post.post,
  comments: state.comments.comments,
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
});

export default connect(mapStateToProps)(SinglePostPage);
