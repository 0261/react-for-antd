import React, { useState, useCallback } from 'react';
import { Steps, Button, message, Icon, Result, Typography, Descriptions } from 'antd';
import styles from './Start.scss';
import DataSourceComponent from '../datasources/DataSource';
import DataSourceTableComponent from '../dataSourceTables/DataSourceTable';
import ChartComponent from '../charts/Chart';
import { withRouter, RouteComponentProps } from 'react-router';
// import SummaryComponent from '../summary/Summary';
import SuccessComponent from '../success/Success';
const { Step } = Steps;
const { Paragraph, Text } = Typography;
interface DataSource {
    name: string;
    img: string;
    disabled: boolean;
}
interface Step {
    title: string;
    icon: string;
}
interface Chart {
    name: string;
    displayName: string;
    disabled: boolean;
    img: string;
}
interface TableDescription {
    AttributeName: string;
    KeyType: 'HASH' | 'RANGE' | string;
}
interface Props extends RouteComponentProps {
    dataSource: string;
    table: string;
    steps: Array<Step>;
    tables: Array<string>;
    current: number;
    dataSources: Array<DataSource>;
    charts: Array<Chart>;
    chart: string;
    tableDescription: Array<TableDescription>;
    onNextCurrent: () => void;
    onPrevCurrent: () => void;
    onGetDatasource: () => string | null;
    onSetDatasource: (dataSource: string) => void;
    onRemoveDatasource: () => void;
    onGetTablenames: (dataSource: string | null) => Promise<any>;
    onGetTable: () => string;
    onSetTable: (table: string) => void;
    onGetTableDescription: (dataSource: string | null, table: string) => object;
    onRemoveTable: () => void;
    onGetChart: () => string;
    onSetChart: (chart: string) => void;
    onRemoveChart: () => void;
}

const StartComponent: React.FunctionComponent<Props> = ({
    steps,
    current,
    onNextCurrent,
    onPrevCurrent,
    dataSources,
    dataSource,
    onGetDatasource,
    onRemoveDatasource,
    onSetDatasource,
    onGetTablenames,
    tables,
    table,
    onGetTable,
    onSetTable,
    onRemoveTable,
    charts,
    onGetChart,
    onRemoveChart,
    onSetChart,
    chart,
    onGetTableDescription,
    tableDescription,
}) => {
    const onNext = (e: any) => {
        if (current === 0 && !onGetDatasource()) {
            message.warning('데이터소스를 선택해주세요.', 1);
            return;
        }
        if (current === 1 && !onGetTable()) {
            message.warning('테이블을 선택해주세요.', 1);
            return;
        }
        if (current === 2 && !onGetChart()) {
            message.warning('차트를 선택해주세요.', 1);
            return;
        }
        onNextCurrent();
    };

    const onPrev = (e: any) => {
        onPrevCurrent();
    };

    return (
        <div className={styles.start}>
            <div className={styles.step}>
                <Steps current={current}>
                    {steps.map(step => (
                        <Step key={step.title} title={step.title} icon={<Icon type={step.icon} />} />
                    ))}
                </Steps>
            </div>
            <div className={styles.stepContent}>
                {current === 0 && (
                    <DataSourceComponent
                        dataSources={dataSources}
                        dataSource={dataSource}
                        onSetDatasource={onSetDatasource}
                        onRemoveDatasource={onRemoveDatasource}
                    ></DataSourceComponent>
                )}
                {current === 1 && (
                    <DataSourceTableComponent
                        tables={tables}
                        table={table}
                        onGetTablenames={onGetTablenames}
                        onSetTable={onSetTable}
                        onGetTable={onGetTable}
                        onRemoveTable={onRemoveTable}
                        onGetTableDescription={onGetTableDescription}
                        dataSource={onGetDatasource()}
                        tableDescription={tableDescription}
                    ></DataSourceTableComponent>
                )}
                {current === 2 && (
                    <ChartComponent
                        charts={charts}
                        chart={chart}
                        dataSource={dataSource}
                        onSetChart={onSetChart}
                        onGetChart={onGetChart}
                        onRemoveChart={onRemoveChart}
                    ></ChartComponent>
                )}
                {/* {current === 3 && (
                    <SummaryComponent dataSource={dataSource} chart={chart} table={table}></SummaryComponent>
                )} */}
                {current === 3 && (
                    <SuccessComponent dataSource={dataSource} chart={chart} table={table}></SuccessComponent>
                )}
            </div>
            <div className={styles.stepButton}>
                <div className={styles.sticky}>
                    {current < steps.length - 1 && current !== 3 && (
                        <Button type='primary' onClick={onNext}>
                            다음
                        </Button>
                    )}
                    {current > 0 && current !== 3 && (
                        <Button style={{ marginLeft: 8 }} onClick={onPrev}>
                            이전
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(StartComponent);
