import React from 'react';
import configureStore from './src/redux/store/store';
import {Provider} from 'react-redux';
import {Home} from './src/components/Home';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
