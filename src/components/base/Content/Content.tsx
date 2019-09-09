import React from 'react';
import Layout from 'antd/lib/layout';
import styles from './Content.scss';
const { Content } = Layout;

const ContentFC: React.FunctionComponent = ({ children }) => {
    return <Content className={styles.content}>{children}</Content>;
};

export default ContentFC;
