import React, { Component } from 'react';
import StartComponent from '../../components/start/Start';
import { listTables } from '../../lib/dynamodb';

const steps = [
    {
        title: '데이터 소스 선택 단계',
        icon: 'database',
    },
    {
        title: '테이블 선택 단계',
        icon: 'table',
    },
    {
        title: '차트 선택 단계',
        icon: 'fund',
    },
    {
        title: '검토 단계',
        icon: 'info',
    },
    {
        title: '완료',
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
interface State {
    current: number;
    tables: Array<string>;
    dataSource: string;
    table: string;
}
export default class Start extends Component<{}, State, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
            tables: [],
            dataSource: this.handlGetDatasource(),
            table: this.handleGetTable(),
        };
    }
    nextCurrent = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prevCurrent = () => {
        this.setState({ current: this.state.current - 1 });
    };

    handlGetDatasource = () => {
        return localStorage.getItem('datasource') || '';
    };

    handleSetDatasource = (dataSource: string) => {
        localStorage.setItem('datasource', dataSource);
        this.setState({ ...this.state, dataSource });
    };

    handleRemoveDatasource = () => {
        localStorage.removeItem('datasource');
        this.setState({ ...this.state, dataSource: '' });
    };

    handleGetTableNames = async (dataSource: string | null) => {
        if (dataSource === 'DYNAMODB') {
            const tables = await listTables();
            this.setState({ current: this.state.current, tables: tables.TableNames || [] });
        }
    };

    handleGetTable = () => {
        return localStorage.getItem('table') || '';
    };

    handleSetTable = (table: string) => {
        localStorage.setItem('table', table);
        this.setState({ ...this.state, table });
    };

    handleRemoveTable = () => {
        localStorage.removeItem('table');
        this.setState({ ...this.state, table: '' });
    };

    render() {
        return (
            <StartComponent
                steps={steps}
                dataSources={dataSources}
                dataSource={this.state.dataSource}
                tables={this.state.tables}
                table={this.state.table}
                onNextCurrent={this.nextCurrent}
                onPrevCurrent={this.prevCurrent}
                current={this.state.current}
                onGetDatasource={this.handlGetDatasource}
                onSetDatasource={this.handleSetDatasource}
                onRemoveDatasource={this.handleRemoveDatasource}
                onGetTablenames={this.handleGetTableNames}
                onGetTable={this.handleGetTable}
                onSetTable={this.handleSetTable}
                onRemoveTable={this.handleRemoveTable}
            ></StartComponent>
        );
    }
}
