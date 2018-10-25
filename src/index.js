import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root')

let render = () => {
    ReactDOM.render(<App />, rootElement);
}

if(module.hot) {
    module.hot.accept('./app/layouts/App', () => {
        setTimeout(render)
    })
}

render();
// registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
