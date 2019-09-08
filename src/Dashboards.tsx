import React from 'react';
import Layout from 'antd/lib/layout';
import LayoutFC from './Layout';

const { Content } = Layout;
export const Dashboards: React.FunctionComponent = () => {
    return (
        <LayoutFC>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>This is Dashboards</div>
            </Content>
        </LayoutFC>
    );
};
