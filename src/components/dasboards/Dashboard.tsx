import React, { useState } from 'react';
import styles from './Dashboard.scss';
import { Sankey } from '@nivo/sankey';
import { Resizable, ResizableBox } from 'react-resizable';
const data = {
    nodes: [
        {
            id: 'John',
            color: 'hsl(206, 70%, 50%)',
        },
        {
            id: 'Raoul',
            color: 'hsl(191, 70%, 50%)',
        },
        {
            id: 'Jane',
            color: 'hsl(26, 70%, 50%)',
        },
        {
            id: 'Marcel',
            color: 'hsl(168, 70%, 50%)',
        },
        {
            id: 'Ibrahim',
            color: 'hsl(310, 70%, 50%)',
        },
        {
            id: 'Junko',
            color: 'hsl(216, 70%, 50%)',
        },
    ],
    links: [
        {
            source: 'Jane',
            target: 'Junko',
            value: 194,
        },
        {
            source: 'Jane',
            target: 'Marcel',
            value: 73,
        },
        {
            source: 'Jane',
            target: 'Ibrahim',
            value: 141,
        },
        {
            source: 'Jane',
            target: 'John',
            value: 199,
        },
        {
            source: 'Jane',
            target: 'Raoul',
            value: 39,
        },
        {
            source: 'Raoul',
            target: 'Junko',
            value: 11,
        },
        {
            source: 'Raoul',
            target: 'John',
            value: 54,
        },
        {
            source: 'Marcel',
            target: 'John',
            value: 83,
        },
        {
            source: 'Marcel',
            target: 'Raoul',
            value: 193,
        },
        {
            source: 'Junko',
            target: 'John',
            value: 98,
        },
        {
            source: 'John',
            target: 'Ibrahim',
            value: 108,
        },
    ],
};

interface Props {}
const Dashboard: React.FunctionComponent<Props> = ({ children }) => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(400);
    return (
        <div className={styles.dashboard}>
            <ResizableBox
                onResize={(e, d) => {
                    setWidth(d.size.width);
                    setHeight(d.size.height);
                }}
                width={width}
                height={height}
                minConstraints={[window.innerWidth / 3, window.innerHeight / 3]}
                maxConstraints={[window.innerWidth, window.innerHeight / 2]}
            >
                <Sankey
                    width={width}
                    height={height}
                    data={data}
                    margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
                    align='start'
                    sort='input'
                    colors={{ scheme: 'nivo' }}
                    nodeOpacity={1}
                    nodeThickness={54}
                    nodeSpacing={60}
                    nodeBorderWidth={0}
                    nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                    linkHoverOpacity={1}
                    linkHoverOthersOpacity={0.1}
                    linkContract={25}
                    linkBlendMode='darken'
                    enableLinkGradient={true}
                    labelPosition='outside'
                    labelOrientation='vertical'
                    labelPadding={11}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 130,
                            itemWidth: 100,
                            itemHeight: 14,
                            itemDirection: 'right-to-left',
                            itemsSpacing: 2,
                            itemTextColor: '#999',
                            symbolSize: 14,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000',
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </ResizableBox>
        </div>
    );
};

export default Dashboard;
