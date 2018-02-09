import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import Privacy from './components/privacy';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <div>
         <Switch>
            <Route path="/privacy" component={Privacy} />
            <Route path="/" component={App} />
         </Switch>
        </div>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
