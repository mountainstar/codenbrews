import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  posts: PostReducer,
  auth: AuthReducer
});
