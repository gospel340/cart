import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducers from './reducers/cartReducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css'

const store = createStore(cartReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));