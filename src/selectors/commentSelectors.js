export const getComments = (state, title) => state.comments.find(comment => comment.commentTitle === title) || [];
