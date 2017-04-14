import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: '',
  usersEmail: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, usersEmail: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, userID: action.id };
    case LOGIN_USER_SUCCESS:
      return { ...state, email: '', password: '', usersEmail: action.payload };
    default:
      return state;
  }
};
