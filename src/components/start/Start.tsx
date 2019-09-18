import React, { useState, useCallback } from 'react';
import { Steps, Button, message, Icon, Result, Typography, Descriptions } from 'antd';
import styles from './Start.scss';
import DataSourceComponent from '../datasources/DataSource';
import DataSourceTableComponent from '../dataSourceTables/DataSourceTable';
import ChartComponent from '../charts/Chart';
import { withRouter, RouteComponentProps } from 'react-router';
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
    onGetTablenames: (dataSource: string | null) => Promise<any>;
    onGetTableDescription: (dataSource: string | null, table: string) => object;
    onGet: (key: string) => string;
    onSet: (key: string, value: any) => void;
    onRemove: (key: string) => void;
}

const StartComponent: React.FunctionComponent<Props> = ({
    steps,
    current,
    onSet,
    onGet,
    onRemove,
    onNextCurrent,
    onPrevCurrent,
    dataSources,
    dataSource,
    onGetTablenames,
    tables,
    table,
    charts,
    chart,
    onGetTableDescription,
    tableDescription,
}) => {
    const onNext = (e: any) => {
        if (current === 0 && !onGet('dataSource')) {
            message.warning('데이터소스를 선택해주세요.', 1);
            return;
        }
        if (current === 1 && !onGet('table')) {
            message.warning('테이블을 선택해주세요.', 1);
            return;
        }
        if (current === 2 && !onGet('chart')) {
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
                        onSet={onSet}
                        onRemove={onRemove}
                    ></DataSourceComponent>
                )}
                {current === 1 && (
                    <DataSourceTableComponent
                        tables={tables}
                        table={table}
                        dataSource={onGet('dataSource')}
                        tableDescription={tableDescription}
                        onGetTablenames={onGetTablenames}
                        onGetTableDescription={onGetTableDescription}
                        onGet={onGet}
                        onSet={onSet}
                        onRemove={onRemove}
                    ></DataSourceTableComponent>
                )}
                {current === 2 && (
                    <ChartComponent
                        charts={charts}
                        chart={chart}
                        dataSource={dataSource}
                        onGet={onGet}
                        onSet={onSet}
                        onRemove={onRemove}
                    ></ChartComponent>
                )}
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
