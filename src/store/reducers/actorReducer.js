const initialState = {
  actors: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'CREATE_ACTOR':
      return { ...state }
    case 'FETCH_ACTORS_SUCCESS':
      return { ...state, actors: payload, loading: false }
    case 'CREATE_ACTOR_SUCCESS':
      return { ...state, actors: [payload, ...state.actors], loading: false }
    case 'FETCH_ACTORS_STARTED':
      return { ...state, actors: payload, loading: false }
    case 'CREATE_ACTOR_STARTED':
      return { ...state, actors: [payload, ...state.actors], loading: false }
    default:
      break;
  }
  return state
}
