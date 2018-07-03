import React from 'react';

import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';
import Login from '././components/Login/Login';
import Home from '././components/Home/Home';
import ContactSearch from '././components/ContactSearch/ContactSearch';
import AuditLog from '././components/AuditLog/AuditLog';
import Test from '././components/Test/Test';

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