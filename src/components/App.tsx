import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './dasboards/Dashboard';
import Users from './users/User';

// import importedComponent from 'react-imported-component';
// const AsyncDashboard = importedComponent(() => import(/* webpackChunkName:'Dashboard' */ './dasboards/Dashboard'));
// const AsyncUser = importedComponent(() => import(/* webpackChunkName:'User' */ './users/User'));

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/dashboards' component={Dashboard} />
        </Switch>
    );
};

export default App;
