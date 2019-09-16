import React from 'react';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import { Result, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
interface Props {
    dataSource: string;
    table: string;
    chart: string;
}
const SuccessComponent: React.FunctionComponent<Props> = ({ chart, dataSource, table }) => {
    return (
        <Result
            status='success'
            title='성공적으로 완료되었습니다 !'
            subTitle={`${dataSource} - ${table} - ${chart}`}
            extra={[
                <Button type='primary' key='console'>
                    <Link to='/dashboard'>대시보드로 이동하기</Link>
                </Button>,
            ]}
        ></Result>
    );
};

export default SuccessComponent;
