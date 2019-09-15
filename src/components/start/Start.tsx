import React, { useState, useCallback } from 'react';
import { Steps, Button, message, Icon, Result, Typography } from 'antd';
import styles from './Start.scss';
import DataSourceComponent from '../datasources/DataSource';
import DataSourceTableComponent from '../dataSourceTables/DataSourceTable';
import { withRouter, RouteComponentProps } from 'react-router';
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
interface Props extends RouteComponentProps {
    dataSource: string;
    table: string;
    steps: Array<Step>;
    tables: Array<string>;
    current: number;
    dataSources: Array<DataSource>;
    onNextCurrent: () => void;
    onPrevCurrent: () => void;
    onGetDatasource: () => string | null;
    onSetDatasource: (dataSource: string) => void;
    onRemoveDatasource: () => void;
    onGetTablenames: (dataSource: string | null) => Promise<any>;
    onGetTable: () => string;
    onSetTable: (table: string) => void;
    onRemoveTable: () => void;
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
                        dataSource={onGetDatasource()}
                    ></DataSourceTableComponent>
                )}
                {current === 2 && '차트 선택'}
                {current === 3 && '소스 테이블 차트 검토 후 생성'}
                {current === 4 && (
                    <Result status='success' title='성공적으로 완료되었습니다 !'>
                        <div className='desc'>
                            <Paragraph>
                                <Text strong className={styles.text16}>
                                    생성 정보
                                </Text>
                            </Paragraph>
                            <Paragraph>
                                <Icon type='database' />
                                <Text strong className={styles.text13}>
                                    선택된 데이터소스
                                </Text>
                                <h4>{dataSource.toLowerCase()}</h4>
                            </Paragraph>
                            <Paragraph>
                                <Icon type='table' />
                                <Text strong className={styles.text13}>
                                    선택된 테이블
                                </Text>
                                <h4>{table.toLowerCase()}</h4>
                            </Paragraph>
                        </div>
                    </Result>
                )}
            </div>
            <div className={styles.stepButton}>
                <div className={styles.sticky}>
                    {current < steps.length - 1 && current !== 3 && (
                        <Button type='primary' onClick={onNext}>
                            다음
                        </Button>
                    )}
                    {current === 3 && (
                        <Button type='primary' onClick={onNext}>
                            생성
                        </Button>
                    )}
                    {current > 0 && current !== 4 && (
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
