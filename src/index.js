import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history'
import registerServiceWorker from './registerServiceWorker'
import centralState from './services/game/redurcers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {  BrowserRouter as Router} from 'react-router-dom'

const history = createBrowserHistory()
let store = createStore(centralState)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
