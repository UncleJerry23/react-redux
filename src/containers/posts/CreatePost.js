import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, postBody) {
    dispatch(createPost(title, postBody));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
