import axios from 'axios';
import { FETCH_POST } from './types';

export const getPost = () => {
  return (dispatch) => {
    const request = axios.get('https://codenbrew.iceking2.goozmo.com/wp-json/posts');
    console.log(request);
    request.then(({ data }) => {
      dispatch({
        type: FETCH_POST,
        payload: data
      });
    });
  };
};
