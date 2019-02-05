import axios from 'axios';
import store from '../index';
import { handleError } from './commonActions';
export const createMovie = (payload) => {
    return (dispatch, getState) => {
        dispatch(createMoviesStarted(payload));
        axios.post('http://localhost:5000/api/v1/movies', payload)
            .then((res) => {
                dispatch(createMovieSuccess(payload));
            },
                (err) => {
                    dispatch(handleError(err));
                });

    }
};
export const editMovie = (payload) => ({
    type: 'EDIT_MOVIE',
    payload
});
export const fetchMovies = () => {
    store.dispatch(fetchMoviesStarted());
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/v1/movies')
            .then((res) => {
                store.dispatch(fetchMoviesSuccess(res.data));
                resolve(res.data);
            },
                (err) => {
                    store.dispatch(handleError({ type: 'FETCH_MOVIES', err }));
                    reject(err);
                });
    });
};

export const fetchMoviesSuccess = (payload) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload
});

export const fetchMoviesStarted = (payload) => ({
    type: 'FETCH_MOVIES_STARTED',
    payload
});

export const createMovieSuccess = (payload) => ({
    type: 'CREATE_MOVIE_SUCCESS',
    payload
});

export const createMoviesStarted = (payload) => ({
    type: 'CREATE_MOVIES_STARTED',
    payload
});
