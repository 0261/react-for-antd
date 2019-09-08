import React from 'react';
import Layout from 'antd/lib/layout';
import { LayoutFC } from '../../components/common/Layout';
const { Content } = Layout;
const Users: React.FunctionComponent = children => {
    return (
        <LayoutFC url='/users'>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>This is Users</div>
            </Content>
        </LayoutFC>
    );
};
export default Users;
