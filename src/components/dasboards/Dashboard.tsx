// import React, { useState } from 'react';
// import styles from './Dashboard.scss';
// import { Sankey } from '@nivo/sankey';
// import { Resizable, ResizableBox } from 'react-resizable';
// import { contains } from '@typemon/dynamodb-expression';

// interface Props {}

// const Dashboard: React.FunctionComponent<Props> = ({ children }) => {
//     return <div className={styles.dashboard}>dashboard</div>;
// };

// export default Dashboard;

import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

interface Props {
    items: number;
    onLayoutChange: (layout: Array<RGL.Layout>) => void;
    rowHeight: number;
    cols: number;
    className: string;
}
interface State {
    layout: Array<{
        x: number;
        y: number;
        w: number;
        h: number;
        i: string;
    }>;
}
class MessyLayout extends React.PureComponent<Props, State> {
    static defaultProps = {
        className: 'layout',
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12,
    };

    constructor(props: Props) {
        super(props);
        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return [1, 2, 3, 4, 5, 67, 8, 9, 10, 12, 32, 36456, 456, 457].map(i => (
            <div key={i}>
                <span className='text'>{i}</span>
            </div>
        ));
    }

    generateLayout() {
        const p = this.props;
        return [1, 2, 3, 4, 5, 67, 8, 9, 10, 12, 32, 36456, 456, 457].map(function(i) {
            const w = Math.ceil(Math.random() * 4);
            const y = Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 300,
                h: y,
                i: i.toString(),
            };
        });
    }

    onLayoutChange(layout: Array<RGL.Layout>) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange} {...this.props}>
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default MessyLayout;
