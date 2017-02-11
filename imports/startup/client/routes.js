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
import Login from "../../ui/pages/Login.jsx";
import listEmployees from "../../ui/components/listEmployees.jsx";
import OnBoard from "../../ui/components/OnBoard.jsx";
import OffBoard from "../../ui/components/OffBoard.jsx";
import TimeClock from "../../ui/components/TimeClock.jsx";
import ServiceOrders from "../../ui/components/ServiceOrders.jsx";

export const renderRoutes = () => (
  <Router history={browserHistory}>
   <Route path="/" component={Layout}>
   <IndexRoute component={Default}/>
   <Route path="/settings" component={Settings} />
   <Route path="/login" component={Login} />

      <Route path="/dashboard" component={Dashboard}>
        <IndexRoute component={Welcome}/>
        <Route path="/dashboard/overview" component={Overview} />
        <Route path="/dashboard/serviceorders" component={ServiceOrders} />
        <Route path="/dashboard/timeclock" component={TimeClock} />
        <Route path="/dashboard/employees" component={Employees}>
          <Route path="/dashboard/employees/all" component={listEmployees}/>
          <Route path="/dashboard/employees/onboard" component={OnBoard}/>
          <Route path="/dashboard/employees/offboard" component={OffBoard}/>
        </Route>
      </Route>

   </Route>
  </Router>
);
