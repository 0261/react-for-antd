import React from 'react';
import { Pie } from '@nivo/pie';

interface Props {
    data: Array<any>;
    width: number;
    height: number;
}
const PieComponent: React.FunctionComponent<Props> = ({ data, width, height }) => {
    return <Pie width={width} height={height} data={data} />;
};

export default PieComponent;
