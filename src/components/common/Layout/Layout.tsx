import React from 'react';
import { Layout } from 'antd';
import SiderBase from '../../base/Sider/Sider';
import FooterBase from '../../base/Footer/Footer';
import HeaderBase from '../../base/Header/Header';
import ContentBase from '../../base/Content/Content';
import styles from './Layout.scss';

const LayoutFC: React.FunctionComponent = ({ children }) => {
    return (
        <Layout className={styles.layout}>
            <SiderBase />
            <Layout>
                <HeaderBase />
                <ContentBase>{children}</ContentBase>
                <FooterBase />
            </Layout>
        </Layout>
    );
};
export default LayoutFC;
