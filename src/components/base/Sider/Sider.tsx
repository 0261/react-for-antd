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
                <Menu.SubMenu
                    key='/setting'
                    title={
                        <span>
                            <Icon type='setting' />
                            <span>Settings</span>
                        </span>
                    }
                >
                    <Menu.Item key='/setting/aws'>
                        <Link to='/setting/aws'>AWS Permission</Link>
                    </Menu.Item>
                    {/* <Menu.Item key='/setting/firebase'>
                        <Link to='/setting/firebase'>Firebase Permission</Link>
                    </Menu.Item> */}
                </Menu.SubMenu>
                <Menu.Item key='/datasource'>
                    <Link to='/datasource'>
                        <Icon type='database' />
                        <span>Data Sources</span>
                    </Link>
                </Menu.Item>
                <Menu.SubMenu
                    key='/chart'
                    title={
                        <span>
                            <Icon type='bar-chart' />
                            <span>Charts</span>
                        </span>
                    }
                >
                    <Menu.Item key='/chart/pie'>
                        <Link to='/chart/pie'>Pie</Link>
                    </Menu.Item>
                    <Menu.Item key='/chart/bar'>
                        <Link to='/chart/bar'>Bar</Link>
                    </Menu.Item>
                    <Menu.Item key='/chart/network'>
                        <Link to='/chart/network'>Network</Link>
                    </Menu.Item>
                    {/* <Menu.Item key='/setting/firebase'>
                        <Link to='/setting/firebase'>Firebase Permission</Link>
                    </Menu.Item> */}
                </Menu.SubMenu>
                <Menu.Item key='/dashboard'>
                    <Link to='/dashboard'>
                        <Icon type='dashboard' />
                        Dashboard
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};
export default withRouter(SiderFC);
