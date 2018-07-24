import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import App from './component/App';
import reducer from './store/reducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,applyMiddleware(logger))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
