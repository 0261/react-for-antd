import React, { useState } from 'react';
import styles from './DataSource.scss';
import { Card, Row, Col } from 'antd';

interface Source {
    name: string;
    img: string;
    disabled: boolean;
}

interface Props {
    datasources: Array<Source>;
    onGetDatasource: () => string | null;
    onSetDatasource: (datasource: string) => void;
    onRemoveDatasource: () => void;
}

const DataSource: React.FunctionComponent<Props> = ({
    datasources,
    onSetDatasource,
    onGetDatasource,
    onRemoveDatasource,
}) => {
    const initSelectedKey = onGetDatasource();
    const [selectedKey, setSelectedKey] = useState(initSelectedKey);

    const onSelect = (datasource: Source) => {
        if (datasource.disabled) {
            return;
        }
        if (selectedKey !== datasource.name) {
            setSelectedKey(datasource.name);
            onSetDatasource(datasource.name);
        } else {
            setSelectedKey('');
            onRemoveDatasource();
        }
    };
    return (
        <div className={styles.datasource}>
            <h2>Selected Data Source [ {selectedKey && `${selectedKey}`} ]</h2>
            <Row gutter={16}>
                {datasources.length > 0 &&
                    datasources.map(datasource => {
                        return (
                            <Col
                                onClick={() => onSelect(datasource)}
                                className={datasource.name === selectedKey ? styles.selectedCol : styles.col}
                                span={8}
                                key={datasource.name}
                            >
                                <Card
                                    title={<img className={styles.img} src={datasource.img} alt={datasource.name} />}
                                    hoverable={true}
                                    className={datasource.disabled ? styles.disabledCard : styles.card}
                                >
                                    <b>{datasource.name}</b>
                                    <p style={{ fontStyle: 'italic' }}>{datasource.disabled && 'comming soon'}</p>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSource;
