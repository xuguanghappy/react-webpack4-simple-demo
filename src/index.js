import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import reducers from './config/reducers.js';
import App from './app.js'
import './test.less'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
    	<BrowserRouter>
        	<App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);


























//quiet the console.log of react-hot-loader
// if (module.hot) {
//     module.hot.accept();
//     window.addEventListener('message', e => {
//         if ('production' !== process.env.NODE_ENV) {
//             console.clear();
//         }
//     });
// }

