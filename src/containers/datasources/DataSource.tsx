import React, { Component } from 'react';
import DataSourceComponent from '../../components/datasources/DataSource';

const datasources = [
    {
        name: 'MYSQL',
        img: '/src/static/img/mysql.svg',
    },
    {
        name: 'DYNAMODB',
        img: '/src/static/img/dynamodb.svg',
    },
    {
        name: 'REIDS',
        img: '/src/static/img/redis.svg',
    },
    {
        name: 'FIREBASE',
        img: '/src/static/img/firebase.svg',
    },
];
interface Props {
    location: {
        pathname: string;
    };
}
class DataSourceContainers extends Component<Props> {
    render() {
        return <DataSourceComponent url={this.props.location.pathname} datasources={datasources}></DataSourceComponent>;
    }
}

export default DataSourceContainers;
