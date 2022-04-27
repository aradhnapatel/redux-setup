import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger';

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
  persistStore(store, () => {
    console.log('restored reducers');
  });
  return store;
}
