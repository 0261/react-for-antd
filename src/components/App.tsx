import React from 'react';
import { Switch, Route } from 'react-router-dom';

import importedComponent from 'react-imported-component';
const AsyncDashboard = importedComponent(() =>
    import(/* webpackChunkName:'Dashboard' */ '../containers/dashboards/Dashboard'),
);
const AsyncDataSource = importedComponent(() =>
    import(/* webpackChunkName:'Datasource' */ '../containers/datasources/DataSource'),
);
const AsyncHome = importedComponent(() => import(/* webpackChunkName:'Datasource' */ '../containers/home/Home'));

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route exact path='/datasource' component={AsyncDataSource} />
            <Route exact path='/dashboard' component={AsyncDashboard} />
        </Switch>
    );
};

export default App;
