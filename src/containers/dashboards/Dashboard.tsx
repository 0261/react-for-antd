import React, { Component } from 'react';
import DasboardComponent from '../../components/dasboards/Dashboard';
import PieComponent from '../../components/common/Pie/Pie';

const data = [];
interface Props {
    location: {
        pathname: string;
    };
}

class DashboardContainer extends Component<Props> {
    render() {
        return (
            <DasboardComponent url={this.props.location.pathname}>
                <div>
                    Dashboard container
                    {data.length > 0 && <PieComponent data={[]} width={400} height={400} />}
                </div>
            </DasboardComponent>
        );
    }
}

export default DashboardContainer;
