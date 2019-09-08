import React from 'react';
import { Layout } from 'antd';
import { SiderFC } from './Sider';
import { FooterFC } from './Footer';
import { HeaderFC } from './Header';

interface Props {
    children: any;
}

const LayoutFC: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderFC />
            <Layout>
                <HeaderFC />
                {children}
                <FooterFC />
            </Layout>
        </Layout>
    );
};
export default LayoutFC;
