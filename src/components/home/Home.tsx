import React from 'react';
import Layout from 'antd/lib/layout';
import { LayoutFC } from '../common/Layout';
import styles from './Home.scss';
const { Content } = Layout;

const Home: React.FunctionComponent = children => {
    return (
        <LayoutFC url='/'>
            <Content style={{ margin: '0 16px' }}>
                <div className={styles.home1123}>This is Home</div>
            </Content>
        </LayoutFC>
    );
};
export default Home;
