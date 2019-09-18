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
    onSet: (key: string, datasource: string) => void;
    onRemove: (key: string) => void;
}

const DataSource: React.FunctionComponent<Props> = ({ dataSources, onSet, dataSource, onRemove }) => {
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
            onSet('dataSource', dataSource.name);
        } else {
            onRemove('dataSource');
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
                                span={4}
                                key={dataSource.name}
                            >
                                <Card
                                    title={<img className={styles.img} src={dataSource.img} alt={dataSource.name} />}
                                    hoverable={true}
                                    className={dataSource.disabled ? styles.disabledCard : styles.card}
                                >
                                    <b>{dataSource.name}</b>
                                    <p style={{ fontStyle: 'italic' }}>
                                        {dataSource.disabled && 'comming soon'}
                                        {!dataSource.disabled && 'available'}
                                    </p>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSource;
