import React from 'react';

import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';
import Login from '././components/Pages/Login/Login';
import Home from '././components/Pages/Home/Home';
import ContactSearch from '././components/Pages/ContactSearch/ContactSearch';
import AuditLog from '././components/Pages/AuditLog/AuditLog';
import Test from '././components/Pages/Test/Test';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/contactSearch" component={ContactSearch}/>
            <Route path="/auditLog" component={AuditLog}/>
            <Route path="/test" component={Test}/>
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;