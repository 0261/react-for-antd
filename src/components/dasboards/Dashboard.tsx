import React from 'react';
import Layout from 'antd/lib/layout';
import { LayoutFC } from '../common/Layout';
const { Content } = Layout;
const Dashboard: React.FunctionComponent = children => {
    return (
        <LayoutFC url='/dashboards'>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>This is Dashboards</div>
            </Content>
        </LayoutFC>
    );
};

export default Dashboard;
