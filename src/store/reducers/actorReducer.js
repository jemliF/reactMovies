const initialState = {
  actors: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'CREATE_ACTOR':
      return { ...state }
    case 'FETCH_ACTORS_SUCCESS':
      return { ...state, actors: payload }
    default:
      break;
  }
  return state
}
