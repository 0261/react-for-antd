import React, { Component } from 'react';
import DasboardComponent from '../../components/dasboards/Dashboard';
import { query } from '../../lib/dynamodb';
import { Expression, equal } from '@typemon/dynamodb-expression';

interface Props {}

class DashboardContainer extends Component<Props> {
    render() {
        return <DasboardComponent></DasboardComponent>;
    }
}

export default DashboardContainer;
