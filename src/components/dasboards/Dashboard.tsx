import React, { useState, useReducer } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import SankeyChart from '../charts/sankey/Sankey';
import { ResponsivePie } from '@nivo/pie';
import styles from './Dashboard.scss';
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
// TODO 로컬스토리지에 저장된 데이터를 가지고 컴포넌트를 생산한다.
// 예를 들어 로컬스토리지에 저장된 값이 11개라면 11개를 생성하고 각 엘리먼트가 어떤 차트를 쓰고 있는지
// 그 데이터는 무엇인지에 따라 그려지는 값이 달라진다.
// 그리드의 가로 단위는 그리드라서 이걸 px로 변경해주는 작업이 필요할듯 하기도 하다.
const pieData = [
    {
        id: 'stylus',
        label: 'stylus',
        value: 102,
        color: 'hsl(339, 70%, 50%)',
    },
    {
        id: 'c',
        label: 'c',
        value: 70,
        color: 'hsl(210, 70%, 50%)',
    },
    {
        id: 'sass',
        label: 'sass',
        value: 31,
        color: 'hsl(317, 70%, 50%)',
    },
    {
        id: 'go',
        label: 'go',
        value: 308,
        color: 'hsl(100, 70%, 50%)',
    },
    {
        id: 'java',
        label: 'java',
        value: 434,
        color: 'hsl(138, 70%, 50%)',
    },
];
const Layout: React.FC = () => {
    const [widthHeight, setWidthHeight] = useState({
        width: window.innerWidth / 3,
        height: window.innerHeight / 3,
    });
    return (
        <React.Fragment>
            <Draggable
                onStop={(e, d) => {
                    console.log(e);
                    console.log(d);
                }}
                handle='.react-resizable'
                cancel='.react-resizable-handle'
            >
                <div>
                    <h2>sankey chart</h2>
                    <ResizableBox
                        minConstraints={[window.innerWidth / 3, window.innerHeight / 3]}
                        maxConstraints={[window.innerWidth, window.innerHeight]}
                        className={styles.dashboard}
                        width={widthHeight.width}
                        height={widthHeight.height}
                        onResizeStop={(event, data) => {
                            setWidthHeight({
                                width: data.size.width,
                                height: data.size.height,
                            });
                        }}
                    >
                        <SankeyChart data={data} width={widthHeight.width} height={widthHeight.height}></SankeyChart>
                    </ResizableBox>
                </div>
            </Draggable>
            <Draggable cancel='.react-resizable-handle'>
                <div>
                    <h2>pie chart</h2>
                    <ResizableBox
                        minConstraints={[window.innerWidth / 3, window.innerHeight / 3]}
                        maxConstraints={[window.innerWidth, window.innerHeight]}
                        className={styles.dashboard}
                        width={widthHeight.width}
                        height={widthHeight.height}
                        onResizeStop={(event, data) => {
                            setWidthHeight({
                                width: data.size.width,
                                height: data.size.height,
                            });
                        }}
                    >
                        <ResponsivePie
                            data={pieData}
                            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            colors={{ scheme: 'nivo' }}
                            borderWidth={1}
                            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextXOffset={6}
                            radialLabelsTextColor='#333333'
                            radialLabelsLinkOffset={0}
                            radialLabelsLinkDiagonalLength={16}
                            radialLabelsLinkHorizontalLength={24}
                            radialLabelsLinkStrokeWidth={1}
                            radialLabelsLinkColor={{ from: 'color' }}
                            slicesLabelsSkipAngle={10}
                            slicesLabelsTextColor='#333333'
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'ruby',
                                    },
                                    id: 'dots',
                                },
                                {
                                    match: {
                                        id: 'c',
                                    },
                                    id: 'dots',
                                },
                                {
                                    match: {
                                        id: 'go',
                                    },
                                    id: 'dots',
                                },
                                {
                                    match: {
                                        id: 'python',
                                    },
                                    id: 'dots',
                                },
                                {
                                    match: {
                                        id: 'scala',
                                    },
                                    id: 'lines',
                                },
                                {
                                    match: {
                                        id: 'lisp',
                                    },
                                    id: 'lines',
                                },
                                {
                                    match: {
                                        id: 'elixir',
                                    },
                                    id: 'lines',
                                },
                                {
                                    match: {
                                        id: 'javascript',
                                    },
                                    id: 'lines',
                                },
                            ]}
                            legends={[
                                {
                                    anchor: 'bottom',
                                    direction: 'row',
                                    translateY: 56,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    symbolSize: 18,
                                    symbolShape: 'circle',
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
            </Draggable>
        </React.Fragment>
    );
};

export default Layout;
