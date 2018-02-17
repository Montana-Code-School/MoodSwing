import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const store = new Store({
  portName: 'MY_APP' // communication port name
});

// The store implements the same interface as Redux's store
// so you can use tools like `react-redux` no problem!
render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));