const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CREATE_COMMENT':
      return { state: { comments: [...initialState.comments, action.payload] } };
    case 'DELETE_COMMENT':
      return { state: { comments: [...initialState.comments].filter(comment => comment.title !== action.payload.title) } };
    default:
      return state;
  }
}

