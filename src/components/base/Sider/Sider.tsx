import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import styles from './Sider.scss';
const { Sider } = Layout;
interface Props extends RouteComponentProps {}
const SiderFC: React.FunctionComponent<Props> = ({ children, location }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Link to='/'>
                <div className={styles.logo} />
            </Link>
            <Menu theme='dark' defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode='inline'>
                <Menu.Item key='/datasource'>
                    <Link to='/datasource'>
                        <Icon type='database' />
                        <span>Data Sources</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='/dashboard'>
                    <Link to='/dashboard'>
                        <Icon type='dashboard' />
                        Dashboard
                    </Link>
                </Menu.Item>

                <Menu.SubMenu
                    key='/setting'
                    title={
                        <span>
                            <Icon type='setting' />
                            <span>Settings</span>
                        </span>
                    }
                >
                    <Menu.Item key='/setting/configure'>
                        <Link to='/setting/configure'>Configure</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Sider>
    );
};
export default withRouter(SiderFC);
