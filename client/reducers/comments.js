function postComments(state = [], action) {
  const i = action.index;
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
        user: action.author,
        text: action.comment
      }]

    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]

    default:
      return state;
  }
  return state;
}

export default function comments (state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}
