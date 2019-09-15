import React, { useEffect, useCallback } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './DataSourceTable.scss';
interface Props {
    dataSource: string | null;
    tables: Array<string>;
    table: string;
    onGetTablenames: (dataSource: string | null) => Promise<void>;
    onGetTable: () => string;
    onSetTable: (table: string) => void;
    onRemoveTable: () => void;
}
const DataSourceTable: React.FunctionComponent<Props> = ({
    dataSource,
    tables,
    onGetTablenames,
    onSetTable,
    onGetTable,
    onRemoveTable,
    table,
}) => {
    const selectedKey = table;
    useEffect(() => {
        const fetchData = async () => {
            await onGetTablenames(dataSource);
        };
        fetchData();
    }, []);
    const onSelect = (table: string) => {
        if (selectedKey !== table) {
            onSetTable(table);
        } else {
            onRemoveTable();
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
                                span={8}
                                key={table}
                                className={table === selectedKey ? styles.selectedCol : styles.col}
                                onClick={() => onSelect(table)}
                            >
                                <Card title={table} className={styles.card} hoverable={true}></Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
};

export default DataSourceTable;
