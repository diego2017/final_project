import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import Routes from './config/routes.jsx'


window.startApp = function(){
  ReactDOM.render(
    // <App />,
    Routes,
    document.getElementById('app')
  );
}
