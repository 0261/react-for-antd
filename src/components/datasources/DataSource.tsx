import React, { useState } from 'react';
import styles from './DataSource.scss';
import { Card, Row, Col } from 'antd';
import { message } from 'antd';

interface DataSource {
    name: string;
    img: string;
    disabled: boolean;
}

interface Props {
    dataSources: Array<DataSource>;
    onGetDatasource: () => string | null;
    onSetDatasource: (datasource: string) => void;
    onRemoveDatasource: () => void;
}

const DataSource: React.FunctionComponent<Props> = ({
    dataSources,
    onSetDatasource,
    onGetDatasource,
    onRemoveDatasource,
}) => {
    const initSelectedKey = onGetDatasource();
    const [selectedKey, setSelectedKey] = useState(initSelectedKey);

    const onSelect = (dataSource: DataSource) => {
        if (dataSource.disabled) {
            return;
        }
        if (selectedKey !== dataSource.name) {
            setSelectedKey(dataSource.name);
            onSetDatasource(dataSource.name);
            message.success(`${dataSource.name} 선택 성공`);
        } else {
            setSelectedKey('');
            onRemoveDatasource();
            message.success(`${dataSource.name} 해제 성공`);
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
