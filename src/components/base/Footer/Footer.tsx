import React from 'react';
import Layout from 'antd/lib/layout';
const { Footer } = Layout;
import styles from './Footer.scss';

const FooterFC: React.FunctionComponent = () => {
    return <Footer className={styles.footer}>Footer Here</Footer>;
};

export default FooterFC;
