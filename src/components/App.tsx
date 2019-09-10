import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardContaniner from '../containers/dashboards/Dashboard';
import DataSourceContaniner from '../containers/datasources/DataSource';
import Home from './home/Home';
import Users from './users/User';

// import importedComponent from 'react-imported-component';
// const AsyncDashboard = importedComponent(() => import(/* webpackChunkName:'Dashboard' */ './dasboards/Dashboard'));
// const AsyncUser = importedComponent(() => import(/* webpackChunkName:'User' */ './users/User'));

const App = () => {
    return (
        <Switch>
            <Route exact path='/dashboard' component={DashboardContaniner} />
            <Route exact path='/datasource' component={DataSourceContaniner} />
        </Switch>
    );
};

export default App;
