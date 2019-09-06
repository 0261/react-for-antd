import './App.css';
import React from 'react';
import { Navigation } from './Navigation';

interface Props {}

// TODO: 라우터 추가할 것
const App: React.FunctionComponent<Props> = () => {
    return (
        <div className="App">
            <Navigation />
        </div>
    );
};

export default App;
