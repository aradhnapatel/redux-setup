import {Alert} from 'react-native';
import {apiInstance} from '../httpClient/index';
import * as actions from './index';

export const getBookData = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(actions.getBookRequest());
    apiInstance
      .get(`/posts?_limit=10&_page=$1`)
      .then(res => {
        dispatch(actions.getBookSuccess(res.data));
        resolve();
      })
      .catch(e => {
        dispatch(actions.getBookError(e.response.data.message));
        Alert.alert(e.response.data.message);
        reject();
      });
  });

export const getPostsData = async pageNumber => {
  try {
    const res = await apiInstance.get(`/posts?_limit=10&_page=${pageNumber}`);
    return res.data;
  } catch (e) {
    Alert.alert(e.response.data.message);
    return e;
  }
};
