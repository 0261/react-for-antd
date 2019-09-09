import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Sider.scss';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderFC: React.FunctionComponent = children => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={collapsed => setCollapsed(collapsed)}>
            <Link to='/'>
                <div className={styles.logo} />
            </Link>
            <Menu theme='dark' defaultSelectedKeys={['/']} selectedKeys={['/']} mode='inline'>
                <Menu.Item key='/users'>
                    <Link to='/users'>
                        <Icon type='user' />
                        <span>Users</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='/dashboards'>
                    <Link to='/dashboards'>
                        <Icon type='dashboard' />
                        Dashboards
                    </Link>
                </Menu.Item>
                <SubMenu
                    key='sub1'
                    title={
                        <span>
                            <Icon type='pie-chart' />
                            <span>Metrics</span>
                        </span>
                    }
                >
                    <Menu.Item key='3'>
                        <span>metric1</span>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <span>metric2</span>
                    </Menu.Item>
                    <Menu.Item key='5'>
                        <span>metric3</span>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub2'
                    title={
                        <span>
                            <Icon type='project' />
                            <span>Monitors</span>
                        </span>
                    }
                >
                    <Menu.Item key='6'>monitor1</Menu.Item>
                    <Menu.Item key='7'>monitor2</Menu.Item>
                    <Menu.Item key='8'>monitor3</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default SiderFC;
