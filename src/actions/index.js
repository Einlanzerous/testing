import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export function fetchComments() {
  const resp = axios.get('https://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: resp
  };
};

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
