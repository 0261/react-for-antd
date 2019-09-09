import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import styles from './Header.scss';
const { Content, Header, Footer } = Layout;

const HeaderFC: React.FunctionComponent = () => {
    return (
        <Header className={styles.header}>
            <Menu theme='light' mode='horizontal' selectable className={styles.menu}>
                <Menu.Item key='github'>
                    <a href='https://github.com/0261/react-for-antd'>
                        <Icon type='github'></Icon>
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
export default HeaderFC;
