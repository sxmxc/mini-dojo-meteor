import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//route components
import Default from "../../ui/pages/Default.jsx"
import Layout from "../../ui/pages/Layout.jsx"
import Dashboard from "../../ui/pages/Dashboard.jsx"
import Employees from "../../ui/pages/Employees.jsx";
import Overview from "../../ui/pages/Overview.jsx";
import Settings from "../../ui/pages/Settings.jsx";
import Welcome from "../../ui/pages/Welcome.jsx";
import listEmployees from "../../ui/components/listEmployees.jsx";

export const renderRoutes = () => (
  <Router history={browserHistory}>
   <Route path="/" component={Layout}>
   <IndexRoute component={Default}/>
   <Route path="/settings" component={Settings} />

      <Route path="/dashboard" component={Dashboard}>
        <IndexRoute component={Welcome}/>
        <Route path="/dashboard/overview" component={Overview} />
        <Route path="/dashboard/employees" component={Employees}>
          <Route path="/dashboard/employees/all" component={listEmployees}/>
        </Route>

      </Route>

   </Route>
  </Router>
);
