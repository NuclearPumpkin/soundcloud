import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
/* 
    AppContainer is a component, provided by react-hot-loader, 
    that handles hot reloading, as well as error handling. 
    It also internally handles disabling hot reloading/error handling 
    when running in a production environment, 
    so you no longer have to.
    Note that <AppContainer> must only wrap a single React component.
*/
import App from './components/App';

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
    ,document.getElementById('root'));
}

render(App);

if(module.hot) {
    module.hot.accept('./components/App', ()=>{
        // const NextApp = require('./App').default;
        render(App);
    })
}



