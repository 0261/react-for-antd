import React, { useState } from 'react';
import styles from './DataSource.scss';
import { Card, Row, Col } from 'antd';

interface Source {
    name: string;
    img: string;
}

interface Props {
    datasources: Array<Source>;
    url: string;
}

const DataSource: React.FunctionComponent<Props> = ({ children, datasources, url }) => {
    const [selectedKey, setSelectedKey] = useState('');
    const [active, setActive] = useState(false);
    const onSelect = (event: any, name: string) => {
        setSelectedKey(name);
    };
    return (
        <div className={styles.datasource}>
            <h2>Selected Data Source {selectedKey && `[ ${selectedKey} ]`}</h2>
            <Row gutter={16}>
                {datasources.length > 0 &&
                    datasources.map(datasource => {
                        return (
                            <span key={datasource.name} onClick={e => onSelect(e, datasource.name)}>
                                <Col span={6}>
                                    <Card
                                        title={
                                            <img className={styles.img} src={datasource.img} alt={datasource.name} />
                                        }
                                        hoverable={true}
                                        className={styles.card}
                                        bordered={true}
                                    >
                                        <b>{datasource.name}</b>
                                    </Card>
                                </Col>
                            </span>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSource;
