import {createAction} from 'redux-actions';
import * as constants from '../utils/constant';

export const getBookRequest = createAction(constants.GETBOOK_REQUEST);
export const getBookSuccess = createAction(constants.GETBOOK_SUCCESS);
export const getBookError = createAction(constants.GETBOOK_ERROR);
