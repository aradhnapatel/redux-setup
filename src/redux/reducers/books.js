import {
  GETBOOK_REQUEST,
  GETBOOK_SUCCESS,
  GETBOOK_ERROR,
} from '../../utils/constant';

const initialState = {
  fetching: false,
  title: {},
  bookList: {},
  error: {},
};

export const Books = (state = initialState, action) => {
  switch (action.type) {
    case GETBOOK_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GETBOOK_SUCCESS:
      return {
        ...state,
        title: action.payload,
        bookList: action.payload,
        fetching: false,
      };
    case GETBOOK_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
