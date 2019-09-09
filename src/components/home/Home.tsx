import React from 'react';
import Layout from 'antd/lib/layout';
import LayoutCommon from '../common/Layout/Layout';
import styles from './Home.scss';

const Home: React.FunctionComponent = children => {
    return (
        <LayoutCommon>
            <div className={styles.home1123}>This is Home</div>
        </LayoutCommon>
    );
};
export default Home;
