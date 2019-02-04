const initialState = {
    movies: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CREATE_MOVIE_STARTED':
            return { ...state, loading: true }

        case 'CREATE_MOVIE_SUCCESS':
            const movies = state.movies;
            movies.push(payload);
            return { ...state, movies, loading: false }

        case 'EDIT_MOVIE':
            return { ...state }

        case 'FETCH_MOVIES_SUCCESS':
            return { ...state, movies: payload, loading: false }

        case 'FETCH_MOVIES_STARTED':
            return { ...state, loading: true }

        default:
            return state;
    }

}
