import React, { useEffect } from 'react';
import styles from './DataSource.scss';
import { Card, Row, Col, message } from 'antd';

interface DataSource {
    name: string;
    img: string;
    disabled: boolean;
}

interface Props {
    dataSources: Array<DataSource>;
    dataSource: string;
    onSetDatasource: (datasource: string) => void;
    onRemoveDatasource: () => void;
}

const DataSource: React.FunctionComponent<Props> = ({
    dataSources,
    onSetDatasource,
    dataSource,
    onRemoveDatasource,
}) => {
    const selectedKey = dataSource;

    const onSelect = (dataSource: DataSource) => {
        if (
            dataSource.name === 'Dynamodb' &&
            (!localStorage.getItem('accesskey') || !localStorage.getItem('secretkey'))
        ) {
            message.warning('AWS Permission을 진행해주세요.');
            return;
        }
        if (dataSource.disabled) {
            return;
        }
        if (selectedKey !== dataSource.name) {
            onSetDatasource(dataSource.name);
        } else {
            onRemoveDatasource();
        }
    };
    return (
        <div className={styles.datasource}>
            <h4>
                {!selectedKey && '데이터 소스를 선택해주세요.'}
                {selectedKey && `선택된 데이터소스 [ ${selectedKey} ]`}
            </h4>
            <Row gutter={16}>
                {dataSources.length > 0 &&
                    dataSources.map(dataSource => {
                        return (
                            <Col
                                onClick={() => onSelect(dataSource)}
                                className={dataSource.name === selectedKey ? styles.selectedCol : styles.col}
                                span={8}
                                key={dataSource.name}
                            >
                                <Card
                                    title={<img className={styles.img} src={dataSource.img} alt={dataSource.name} />}
                                    hoverable={true}
                                    className={dataSource.disabled ? styles.disabledCard : styles.card}
                                >
                                    <b>{dataSource.name}</b>
                                    <p style={{ fontStyle: 'italic' }}>{dataSource.disabled && 'comming soon'}</p>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSource;
