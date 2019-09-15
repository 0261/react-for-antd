import React from 'react';
import { Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
const AsyncDashboard = importedComponent(() =>
    import(/* webpackChunkName:'Dashboard' */ '../containers/dashboards/Dashboard'),
);
const AsyncDataSource = importedComponent(() =>
    import(/* webpackChunkName:'Datasource' */ '../containers/datasources/DataSource'),
);
const AsyncStart = importedComponent(() => import(/* webpackChunkName:'Start' */ '../containers/start/Start'));
const AsyncHome = importedComponent(() => import(/* webpackChunkName:'Home' */ '../containers/home/Home'));
const AsyncAws = importedComponent(() =>
    import(/* webpackChunkName:'SettingConfigure' */ '../containers/settings/aws/Aws'),
);
const AsyncPie = importedComponent(() => import(/* webpackChunkName:'ChartPie' */ '../containers/charts/pie/Pie'));

// const AsyncFirebase = importedComponent(() =>
//     import(/* webpackChunkName:'SettingConfigure' */ '../containers/settings/firebase/Firebase'),
// );

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route path='/datasource' component={AsyncDataSource} />
            <Route path='/start' component={AsyncStart} />
            <Route path='/dashboard' component={AsyncDashboard} />
            <Route path='/setting/aws' component={AsyncAws} />
            <Route path='/chart/pie' component={AsyncPie} />
            {/* <Route path='/setting/firebase' component={AsyncFirebase} /> */}
        </Switch>
    );
};

export default App;
