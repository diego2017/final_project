import React from "react";
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from "react-router";

import App from "../components/app.jsx";
import Details from "../components/details.jsx";
import Edit from "../components/edit.jsx";
import Axios from "axios"
import _ from "lodash"

let appRouter = (students) => {

  const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App} students={students} />
      <Route path="details/:id" component={Details} students={students}/>
      <Route path="edit/:id" component={Edit} students={students}/>
    </Router>
  )

  return routes;
}

export default appRouter;
