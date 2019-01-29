import axios from 'axios';
import {handleError} from './commonActions';
export const createActor = (payload) => ({
  type: 'CREATE_ACTOR',
  payload
});

export const fetchActors = (payload) => {
  return (dispatch, getState) => {
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