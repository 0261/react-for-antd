import styles from './Dashboard.scss';
import SankeyChart from '../charts/sankey/Sankey';
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
import React, { useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const replacePxToBlank = (str: string) => {
    return str.replace(/px/g, '');
};
const ReactGridLayout = WidthProvider(RGL);

//TODO 로컬스토리지에 저장된 데이터를 가지고 컴포넌트를 생산한다.
// 예를 들어 로컬스토리지에 저장된 값이 11개라면 11개를 생성하고 각 엘리먼트가 어떤 차트를 쓰고 있는지
// 그 데이터는 무엇인지에 따라 그려지는 값이 달라진다.

const Layout: React.FC = () => {
    const [line, setLine] = useState({ width: 600, height: 300 });
    return (
        <ReactGridLayout
            onResizeStop={(a, b, c, d, mouseEvent, htmlElement) => {
                const height = +replacePxToBlank(htmlElement.parentElement.style.height);
                const width = +replacePxToBlank(htmlElement.parentElement.style.width);
                setLine({ width, height });
            }}
        >
            {[1].map(i => (
                <div key={i}>
                    <SankeyChart data={data} width={line.width} height={line.height}></SankeyChart>
                </div>
            ))}
        </ReactGridLayout>
    );
};

export default Layout;
