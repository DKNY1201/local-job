import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import expenseReducer from './store/reducers/expense';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import { Provider }from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    expense: expenseReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
