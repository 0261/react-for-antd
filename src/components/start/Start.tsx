import React, { useState, useCallback } from 'react';
import { Steps, Button, message, Icon } from 'antd';
import styles from './Start.scss';
import DataSourceComponent from '../datasources/DataSource';
const { Step } = Steps;
interface DataSource {
    name: string;
    img: string;
    disabled: boolean;
}
interface Step {
    title: string;
    icon: string;
}
interface Props {
    steps: Array<Step>;
    current: number;
    dataSources: Array<DataSource>;
    onNextCurrent: () => void;
    onPrevCurrent: () => void;
    onGetDatasource: () => string | null;
    onSetDatasource: (datasource: string) => void;
    onRemoveDatasource: () => void;
}

const StartComponent: React.FunctionComponent<Props> = ({
    steps,
    current,
    onNextCurrent,
    onPrevCurrent,
    dataSources,
    onGetDatasource,
    onRemoveDatasource,
    onSetDatasource,
}) => {
    const onNext = useCallback((e: any) => {
        if (!onGetDatasource()) {
            message.warning('데이터소스를 선택해주세요.', 1);
            return;
        }
        onNextCurrent();
    }, []);

    const onPrev = useCallback((e: any) => {
        onPrevCurrent();
    }, []);

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
                        onGetDatasource={onGetDatasource}
                        onSetDatasource={onSetDatasource}
                        onRemoveDatasource={onRemoveDatasource}
                    ></DataSourceComponent>
                )}
                {current === 1 && '테이블 선택'}
                {current === 2 && '차트 선택'}
                {current === 3 && '소스 테이블 차트 검토 후 생성'}
            </div>
            <div className={styles.stepButton}>
                {current < steps.length - 1 && (
                    <Button type='primary' onClick={onNext}>
                        다음
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type='primary' onClick={() => message.success('생성 완료')}>
                        완료
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={onPrev}>
                        이전
                    </Button>
                )}
            </div>
        </div>
    );
};

export default StartComponent;
