import React, { Component } from 'react';
import StartComponent from '../../components/start/Start';

const steps = [
    {
        title: '데이터 소스 선택',
        icon: 'database',
    },
    {
        title: '테이블 선택',
        icon: 'table',
    },
    {
        title: '차트 선택',
        icon: 'fund',
    },
    {
        title: '검토',
        icon: 'check',
    },
];
const dataSources = [
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

export default class Start extends Component<{}, { current: number }, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    nextCurrent = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prevCurrent = () => {
        this.setState({ current: this.state.current - 1 });
    };

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
            <StartComponent
                onNextCurrent={this.nextCurrent}
                onPrevCurrent={this.prevCurrent}
                current={this.state.current}
                steps={steps}
                dataSources={dataSources}
                onGetDatasource={this.handlGetDatasource}
                onSetDatasource={this.handleSetDatasource}
                onRemoveDatasource={this.handleRemoveDatasource}
            ></StartComponent>
        );
    }
}
