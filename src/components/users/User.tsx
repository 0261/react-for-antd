import React from 'react';
import Layout from 'antd/lib/layout';
import LayoutCommon from '../common/Layout/Layout';
const Users: React.FunctionComponent = children => {
    return (
        <LayoutCommon>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>This is Users</div>
        </LayoutCommon>
    );
};
export default Users;
