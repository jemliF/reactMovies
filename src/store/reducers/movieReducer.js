const initialState = {
    movies: [],
    actors: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CREATE_MOVIE':
            state = { ...state }
            break;

        case 'EDIT_MOVIE':
            state = { ...state }
            break;

        case 'FETCH_MOVIES_SUCCESS':
            state = { ...state, movies: payload }
            break;

        default:
            break;
    }
    return state;
}
