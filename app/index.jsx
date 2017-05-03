import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import Routes from './config/routes.jsx'
import Axios from 'axios'

window.Axios = Axios;
window.startApp = function(students){
  ReactDOM.render(
    Routes(students),
    document.getElementById('app')
  );
}
