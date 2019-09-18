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
    {
        displayName: 'Sankey Chart',
        name: 'Sankey',
        disabled: false,
        img: '/src/static/img/sankey.png',
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
            dataSource: this.handleGet('dataSource'),
            table: this.handleGet('table'),
            chart: this.handleGet('chart'),
            tableDescription: [],
        };
    }
    nextCurrent = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prevCurrent = () => {
        this.setState({ current: this.state.current - 1 });
    };

    handleGetTableNames = async (dataSource: string | null) => {
        if (dataSource === 'Dynamodb') {
            const tables = await listTables();
            this.setState({ current: this.state.current, tables: tables.TableNames || [] });
        }
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

    handleGet = (key: string) => {
        return localStorage.getItem(key) || '';
    };
    handleSet = (key: string, value: any) => {
        console.log(key, value);
        localStorage.setItem(key, value);
        this.setState({ ...this.state, [key]: value });
    };
    handleRemove = (key: string) => {
        localStorage.removeItem(key);
        this.setState({ ...this.state, [key]: '' });
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
                onGetTablenames={this.handleGetTableNames}
                onGetTableDescription={this.handleGetTableDescription}
                onGet={this.handleGet}
                onSet={this.handleSet}
                onRemove={this.handleRemove}
            ></StartComponent>
        );
    }
}
