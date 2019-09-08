import React from 'react';
import { Layout } from 'antd';
import { SiderFC } from '../../base/Sider';
import { FooterFC } from '../../base/Footer';
import { HeaderFC } from '../../base/Header';

interface Props {
    url: string;
}
export const LayoutFC: React.FunctionComponent<Props> = ({ children, url }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderFC matchUrl={url} />
            <Layout>
                <HeaderFC />
                {children}
                <FooterFC />
            </Layout>
        </Layout>
    );
};
