import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Books} from './books';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

const state = {
  Books,
};

export default persistCombineReducers(config, state);
