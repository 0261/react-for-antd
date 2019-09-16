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
            extra={[
                <Button type='primary' key='console'>
                    <Link to='/dashboard'>대시보드로</Link>
                </Button>,
                <Button type='default' key='console'>
                    <Link to='/home'>홈으로</Link>
                </Button>,
            ]}
        >
            <div className='desc'>
                <Paragraph>
                    <Text
                        strong
                        style={{
                            fontSize: 16,
                        }}
                    >
                        설정 정보
                    </Text>
                </Paragraph>
                <Paragraph>
                    <b>데이터소스 : {dataSource}</b>{' '}
                </Paragraph>
                <Paragraph>
                    <b>테이블 : {table}</b>{' '}
                </Paragraph>
                <Paragraph>
                    <b>차트 : {chart}</b>{' '}
                </Paragraph>
            </div>
        </Result>
    );
};

export default SuccessComponent;
