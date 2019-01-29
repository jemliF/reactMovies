const initialState = {
    movies: [],
    actors: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CREATE_MOVIE_STARTED':
            state = { ...state, loading: true }
            break;

        case 'CREATE_MOVIE_SUCCESS':
            state = { ...state, loading: false }
            break;

        case 'EDIT_MOVIE':
            state = { ...state }
            break;

        case 'FETCH_MOVIES_SUCCESS':
            state = { ...state, movies: payload, loading: false }
            break;

        case 'FETCH_MOVIES_STARTED':
            state = { ...state, loading: true }
            break;

        default:
            break;
    }
    return state;
}
