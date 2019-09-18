import React, { useEffect, useCallback } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './DataSourceTable.scss';
interface TableDescription {
    AttributeName: string;
    KeyType: 'HASH' | 'RANGE' | string;
}
interface Props {
    dataSource: string | null;
    tables: Array<string>;
    table: string;
    tableDescription: Array<TableDescription>;
    onGetTablenames: (dataSource: string | null) => Promise<void>;
    onGetTableDescription: (dataSource: string | null, table: string) => object;
    onGet: (key: string) => string;
    onSet: (key: string, value: string) => void;
    onRemove: (key: string) => void;
}
const DataSourceTable: React.FunctionComponent<Props> = ({
    dataSource,
    tables,
    onGetTablenames,
    table,
    onGetTableDescription,
    tableDescription,
    onRemove,
    onGet,
    onSet,
}) => {
    const selectedKey = table;
    useEffect(() => {
        onRemove('table');
        const fetchData = async () => {
            await onGetTablenames(dataSource);
        };
        fetchData();
    }, []);
    const onSelect = (table: string) => {
        if (selectedKey !== table) {
            onSet('table', table);
            const fetchData = async () => {
                await onGetTableDescription(dataSource, table);
            };
            fetchData();
        } else {
            onRemove('table');
        }
    };
    return (
        <div className={styles.datasourceTable}>
            <h4>
                {!selectedKey && '테이블을 선택해주세요.'}
                {selectedKey && `선택된 테이블 [ ${selectedKey} ]`}
            </h4>
            <Row gutter={16}>
                {tables.length > 0 &&
                    tables.map(table => {
                        return (
                            <Col
                                span={6}
                                key={table}
                                className={table === selectedKey ? styles.selectedCol : styles.col}
                                onClick={() => onSelect(table)}
                            >
                                <Card title={table} className={styles.card} hoverable={true}>
                                    {tableDescription.length > 0 &&
                                        table === selectedKey &&
                                        tableDescription.map(desc => {
                                            return (
                                                <p style={{ margin: 0 }}>
                                                    {desc.AttributeName} /{' '}
                                                    <b>{desc.KeyType === 'HASH' ? '파티션 키' : '소트 키'}</b>
                                                </p>
                                            );
                                        })}
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSourceTable;
