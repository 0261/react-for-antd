import React from 'react';
import { PieCanvas } from '@nivo/pie';

interface Props {
    data: Array<any>;
}

const Pie: React.FunctionComponent<Props> = ({ data }) => {
    return (
        <div>
            <PieCanvas data={data} width={600} height={600} pixelRatio={2}>
                {' '}
            </PieCanvas>
        </div>
    );
};

export default Pie;
