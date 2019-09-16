import React, { Component } from 'react';
import StartComponent from '../../components/start/Start';
import { listTables, getTableDescription } from '../../lib/dynamodb';

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
    // {
    //     title: '검토 단계',
    //     icon: 'info',
    // },
    {
        title: '완료',
        icon: 'check',
    },
];
const dataSources = [
    {
        name: 'Dynamodb',
        img: '/src/static/img/dynamodb.svg',
        disabled: false,
    },
    {
        name: 'Mysql',
        img: '/src/static/img/mysql.svg',
        disabled: true,
    },
    {
        name: 'Firebase',
        img: '/src/static/img/firebase.svg',
        disabled: true,
    },
    {
        name: 'Mongo',
        img: '/src/static/img/mongo.svg',
        disabled: true,
    },
    {
        name: 'Redis',
        img: '/src/static/img/redis.svg',
        disabled: true,
    },
    {
        name: 'RDS',
        img: '/src/static/img/rds.svg',
        disabled: true,
    },
];
const charts = [
    {
        displayName: 'Pie Chart',
        name: 'Pie',
        disabled: false,
        img: '/src/static/img/pie.png',
    },
    {
        displayName: 'Bar Chart',
        name: 'Bar',
        disabled: false,
        img: '/src/static/img/bar.png',
    },
    {
        displayName: 'Network Chart',
        name: 'Network',
        disabled: false,
        img: '/src/static/img/network.png',
    },
];
interface TableDescription {
    AttributeName: string;
    KeyType: 'HASH' | 'RANGE' | string;
}
interface State {
    current: number;
    tables: Array<string>;
    dataSource: string;
    table: string;
    chart: string;
    tableDescription: Array<TableDescription>;
}
export default class Start extends Component<{}, State, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
            tables: [],
            dataSource: this.handlGetDatasource(),
            table: this.handleGetTable(),
            chart: this.handleGetChart(),
            tableDescription: [],
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
        if (dataSource === 'Dynamodb') {
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
        this.setState({ ...this.state, table: '', tableDescription: [] });
    };

    handleGetTableDescription = async (dataSource: string | null, table: string) => {
        try {
            if (dataSource === 'Dynamodb') {
                const { KeySchema, tableName } = await getTableDescription(table);
                this.setState({
                    ...this.state,
                    tableDescription: KeySchema,
                });
            }
        } catch (error) {}
    };

    handleGetChart = () => {
        return localStorage.getItem('chart') || '';
    };
    handleSetChart = (chart: string) => {
        localStorage.setItem('chart', chart);
        this.setState({ ...this.state, chart });
    };
    handleRemoveChart = () => {
        localStorage.removeItem('chart');
        this.setState({ ...this.state, chart: '' });
    };

    render() {
        return (
            <StartComponent
                steps={steps}
                dataSources={dataSources}
                dataSource={this.state.dataSource}
                charts={charts}
                chart={this.state.chart}
                tables={this.state.tables}
                table={this.state.table}
                tableDescription={this.state.tableDescription}
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
                onGetTableDescription={this.handleGetTableDescription}
                onGetChart={this.handleGetChart}
                onSetChart={this.handleSetChart}
                onRemoveChart={this.handleRemoveChart}
            ></StartComponent>
        );
    }
}
