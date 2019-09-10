import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import styles from './Header.scss';
const { Header } = Layout;

const HeaderFC: React.FunctionComponent = () => {
    return (
        <Header className={styles.header}>
            <Menu theme='light' mode='horizontal' selectable className={styles.menu}>
                <Menu.Item key='github'>
                    <a href='https://github.com/0261/react-for-antd'>
                        <Icon type='github' className={styles.icon}></Icon>
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
export default HeaderFC;
