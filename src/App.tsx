import './App.css';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';

interface Props {}
const AsyncDynamicPage = importedComponent(() => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'));
const AsyncNavigation = importedComponent(() => import(/* webpackChunkName:'Navigation' */ './Navigation'));

const App: React.FunctionComponent<Props> = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dynamic" component={AsyncDynamicPage} />
                    <Route exact path="/nav" component={AsyncNavigation} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
