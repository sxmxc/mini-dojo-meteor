import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//route components
import Dashboard from "../../ui/Dashboard.jsx"
import listEmployees from "../../ui/listEmployees.jsx";
import Overview from "../../ui/Overview.jsx";

export const renderRoutes = () => (
  <Router history={browserHistory}>
   <Route path="/" component={Dashboard}>
      <Route path="/dashboard/employees" component={listEmployees}/>
      <Route path="/dashboard/overview" component={Overview}/>
   </Route>
  </Router>
);
