import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import Routes from './config/routes.jsx'
import Axios from 'axios'

window.Axios = Axios;
window.startApp = function(studentId){
  window.studentId = studentId;
  ReactDOM.render(
    // <App />,
    Routes,
    document.getElementById('app')
  );
}
