import React, { Component } from 'react';
import DataSourceComponent from '../../components/datasources/DataSource';

const datasources = [
    {
        name: 'DYNAMODB',
        img: '/src/static/img/dynamodb.svg',
        disabled: false,
    },
    {
        name: 'MYSQL',
        img: '/src/static/img/mysql.svg',
        disabled: true,
    },
    {
        name: 'FIREBASE',
        img: '/src/static/img/firebase.svg',
        disabled: true,
    },
    {
        name: 'MONGO',
        img: '/src/static/img/mongo.svg',
        disabled: true,
    },
    {
        name: 'REIDS',
        img: '/src/static/img/redis.svg',
        disabled: true,
    },
    {
        name: 'RDS',
        img: '/src/static/img/rds.svg',
        disabled: true,
    },
];
interface Props {}
class DataSourceContainers extends Component<Props> {
    handlGetDatasource() {
        const datasource = localStorage.getItem('datasource');
        return datasource;
    }
    handleSetDatasource(datasource: string) {
        localStorage.setItem('datasource', datasource);
    }
    handleRemoveDatasource() {
        localStorage.removeItem('datasource');
    }
    render() {
        return (
            <DataSourceComponent
                datasources={datasources}
                onGetDatasource={this.handlGetDatasource}
                onSetDatasource={this.handleSetDatasource}
                onRemoveDatasource={this.handleRemoveDatasource}
            ></DataSourceComponent>
        );
    }
}

export default DataSourceContainers;
