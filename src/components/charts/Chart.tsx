import React, { useState, useEffect } from 'react';
import { Collapse, Icon, Card, Row, Col } from 'antd';
import styles from './Chart.scss';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
const { Panel } = Collapse;
interface Chart {
    name: string;
    displayName: string;
    disabled: boolean;
}
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

interface Props {
    charts: Array<{ name: string; displayName: string; disabled: boolean; img: string }>;
    onGetChart: () => string;
    onSetChart: (chart: string) => void;
    onRemoveChart: () => void;
    chart: string;
    dataSource: string;
}
const ChartComponent: React.FunctionComponent<Props> = ({
    charts,
    chart,
    onSetChart,
    onRemoveChart,
    onGetChart,
    dataSource,
}) => {
    const selectedChart = chart;
    const [activeKeys, setActiveKeys] = useState(['required', 'optional']);

    useEffect(() => {
        onRemoveChart();
    }, []);

    const OnChange = (key: string | Array<string>) => {
        const selectedKey = typeof key === 'string' ? [key] : key;
        setActiveKeys(selectedKey);
    };
    const onSelect = (chart: Chart) => {
        if (chart.disabled) {
            return;
        }
        if (selectedChart !== chart.name) {
            onSetChart(chart.name);
        } else {
            onRemoveChart();
        }
    };
    return (
        <div className={styles.chart}>
            <h4>
                {!selectedChart && '차트를 선택해주세요.'}
                {selectedChart && `선택된 차트 [ ${selectedChart} ]`}
            </h4>
            <Collapse
                onChange={OnChange}
                defaultActiveKey={activeKeys}
                expandIcon={({ isActive }) => <Icon type='caret-right' rotate={isActive ? 90 : 0} />}
            >
                <Panel header='차트' key='required' style={customPanelStyle}>
                    <Row gutter={16}>
                        {charts.length > 0 &&
                            charts.map(chart => {
                                return (
                                    <Col
                                        span={8}
                                        key={chart.name}
                                        className={chart.name === selectedChart ? styles.selectedCol : styles.col}
                                        onClick={() => onSelect(chart)}
                                    >
                                        <Card
                                            title={
                                                <img className={styles.img} src={chart.img} alt={chart.displayName} />
                                            }
                                            hoverable={true}
                                            className={chart.disabled ? styles.disabledCard : styles.card}
                                        >
                                            <b>{chart.displayName}</b>
                                            <p style={{ fontStyle: 'italic' }}>{chart.disabled && 'comming soon'}</p>
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </Panel>
                <Panel header='옵션' key='optional' style={customPanelStyle}>
                    {/* TODO: 추후에 다른 데이터소스가 개발될 경우 컴포넌트로 분리하고 각 데이터베이스에 맞도록 처리할 것 */}
                    {dataSource === 'Dynamodb' && (
                        <div className='desc'>
                            <Paragraph>
                                <Text
                                    strong
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    DynamoDB 옵션
                                </Text>
                            </Paragraph>
                            <Paragraph>
                                <Icon style={{ color: 'blue' }} type='check-circle' /> 파티션키와 소트키로 조회가
                                가능합니다.{' '}
                                <a
                                    href='https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html'
                                    target='_blank'
                                >
                                    링크를 참고하세요. &gt;
                                </a>
                            </Paragraph>
                            <Paragraph>
                                <Icon style={{ color: 'blue' }} type='clock-circle' /> 시계열 데이터 처리를 위해
                                파티션키와 소트키를 설계해주세요.{' '}
                                <a
                                    href='https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/bp-time-series.html'
                                    target='_blank'
                                >
                                    링크를 참고하세요. &gt;
                                </a>
                            </Paragraph>
                        </div>
                    )}
                </Panel>
            </Collapse>
        </div>
    );
};

export default ChartComponent;
