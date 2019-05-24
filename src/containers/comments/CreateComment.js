import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(title, comment) {
    dispatch(createComment(props.postId, title, comment));
  }
});


export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
