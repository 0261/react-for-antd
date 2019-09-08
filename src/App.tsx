import './App.css';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboards } from './Dashboards';
// import importedComponent from 'react-imported-component';

interface Props {}
// const AsyncDynamicPage = importedComponent(() => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'));
// const AsyncNavigation = importedComponent(() => import(/* webpackChunkName:'Navigation' */ './Navigation'));

const App: React.FunctionComponent<Props> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Dashboards} />
                {/* <Route exact path='/information' component={LayoutFC} />
                <Route exact path='/dashboard' component={LayoutFC} /> */}
            </Switch>
        </Router>
    );
};

export default App;
