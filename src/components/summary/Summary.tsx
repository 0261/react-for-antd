import React from 'react';
import { Descriptions } from 'antd';

interface Props {
    dataSource: string;
    table: string;
    chart: string;
}
const SummaryComponent: React.FunctionComponent<Props> = ({ chart, dataSource, table }) => {
    return (
        <div>
            <br />
            <br />
            <Descriptions bordered title='요약' size={'default'}>
                <Descriptions.Item label='설정 정보'>
                    데이터 소스 : {dataSource}
                    <br />
                    테이블 : {table}
                    <br />
                    차트 : {chart}
                    <br />
                </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
        </div>
    );
};

export default SummaryComponent;
