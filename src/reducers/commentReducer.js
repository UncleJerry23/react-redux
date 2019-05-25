const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CREATE_COMMENT':
      return {
        ...state,
        [action.payload.postId]: [
          ...(state[action.payload.postId] || []),
          { title: action.payload.title, body: action.payload.body }
        ]
      };
    case 'DELETE_COMMENT':
      return {
        ...state,
        [action.payload.postId]: [
          ...state[action.payload.postId].slice(0, action.payload.commentId),
          ...state[action.payload.postId].slice(action.payload.commentId + 1),
        ]
      };
    default:
      return state;
  }
}

