import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const { Content, Header, Footer } = Layout;

export const HeaderFC: React.FunctionComponent = () => {
    return (
        <Header style={{ background: '#fff', padding: 0, margin: '0px 16px 5px' }}>
            <Menu theme='light' mode='horizontal' selectable style={{ lineHeight: '64px', textAlign: 'right' }}>
                <Menu.Item key='github'>
                    <a href='https://github.com/0261/react-for-antd'>
                        <Icon type='github'></Icon>
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
