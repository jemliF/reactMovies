import axios from 'axios';
import { handleError } from './commonActions';
export const createMovie = (payload) => ({
    type: 'CREATE_MOVIE',
    payload
});
export const editMovie = (payload) => ({
    type: 'EDIT_MOVIE',
    payload
});
export const fetchMovies = (payload) => {
    return (dispatch, getState) => {
        axios.get('http://localhost:5000/api/v1/movies')
            .then((res) => {
                dispatch(fetchMoviesSuccess(res.data));
            },
                (err) => {
                    dispatch(handleError(err));
                });

    }
};

export const fetchMoviesSuccess = (payload) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload
});
