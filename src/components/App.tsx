import React from 'react';
import { Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
const AsyncDashboard = importedComponent(() =>
    import(/* webpackChunkName:'Dashboard' */ '../containers/dashboards/Dashboard'),
);
const AsyncDataSource = importedComponent(() =>
    import(/* webpackChunkName:'Datasource' */ '../containers/datasources/DataSource'),
);
const AsyncHome = importedComponent(() => import(/* webpackChunkName:'Home' */ '../containers/home/Home'));
const AsyncConfigure = importedComponent(() =>
    import(/* webpackChunkName:'SettingConfigure' */ '../containers/settings/configure/Configure'),
);

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route path='/datasource' component={AsyncDataSource} />
            <Route path='/dashboard' component={AsyncDashboard} />
            <Route path='/setting/configure' component={AsyncConfigure} />
        </Switch>
    );
};

export default App;
