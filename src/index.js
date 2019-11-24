import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-rangeslider/lib/index.css'
import * as serviceWorker from './serviceWorker';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
