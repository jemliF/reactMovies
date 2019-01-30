import axios from 'axios';
import { handleError } from './commonActions';
export const createActor = (payload) => {
  return (dispatch, getState) => {
    dispatch(createActorsStarted, payload);
    axios.post('http://localhost:5000/api/v1/actors', payload)
      .then((res) => {
        dispatch(createActorSuccess(res.data));
      },
        (err) => {
          dispatch(handleError(err));
        });

  }
};

export const fetchActors = (payload) => {
  return (dispatch, getState) => {
    dispatch(fetchActorsStarted, payload);
    axios.get('http://localhost:5000/api/v1/actors')
      .then((res) => {
        dispatch(fetchActorsSuccess(res.data));
      },
        (err) => {
          dispatch(handleError(err));
        });

  }
};

export const fetchActorsSuccess = (payload) => ({
  type: 'FETCH_ACTORS_SUCCESS',
  payload
});

export const createActorSuccess = (payload) => ({
  type: 'CREATE_ACTOR_SUCCESS',
  payload
});

export const fetchActorsStarted = (payload) => ({
  type: 'FETCH_ACTORS_STARTED',
  payload
});

export const createActorsStarted = (payload) => ({
  type: 'CREATE_ACTOR_STARTED',
  payload
});