import React, { Component } from 'react';
import DasboardComponent from '../../components/dasboards/Dashboard';
import PieComponent from '../../components/common/Pie/Pie';

const data = [];
interface Props {}

class DashboardContainer extends Component<Props> {
    render() {
        return (
            <DasboardComponent>
                <div>
                    Dashboard container
                    {data.length > 0 && <PieComponent data={[]} width={400} height={400} />}
                </div>
            </DasboardComponent>
        );
    }
}

export default DashboardContainer;
