import {
    TEST_REQUEST,
    TEST_SUCCESS,
    TEST_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function test() {
  return dispatch => {
    dispatch(request());

    return axios.get(`http://localhost:3002/test`)
      .then(response => {
        dispatch(success());
      })
      .catch(error => {
        dispatch(failure(error));
      });
  }

  function request() { return { type: TEST_REQUEST } }
  function success() { return { type: TEST_SUCCESS } }
  function failure(error) { return { type: TEST_FAILURE, error } }
}
