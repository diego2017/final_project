import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import Routes from './config/routes.jsx'
import Axios from 'axios'

window.Axios = Axios;

if(process.env.NODE_ENV === "development"){
  window.API_HOST = "http://localhost:3000"
}else{
  window.API_HOST = "https://secure-depths-77310.herokuapp.com"
}
window.startApp = function(students){
  ReactDOM.render(
    Routes(students),
    document.getElementById('app')
  );
}
