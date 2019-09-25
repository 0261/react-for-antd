import React, { useState } from 'react';
import { Sankey } from '@nivo/sankey';
interface Props {
    data: {
        nodes: Array<{ id: string | number }>;
        links: Array<{ source: string | number; target: string | number }>;
    };
    width: number;
    height: number;
}

const SankeyChart: React.FunctionComponent<Props> = ({ children, data, width, height }) => {
    return (
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
        ></Sankey>
    );
};

export default SankeyChart;
