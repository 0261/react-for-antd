import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const SiderFC: React.FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={collapsed => setCollapsed(collapsed)}>
            <div className='logo' />
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                <Menu.Item key='1'>
                    <Icon type='user' />
                    <span>Information</span>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Icon type='dashboard' />
                    <span>Dashboards</span>
                </Menu.Item>
                <SubMenu
                    key='sub2'
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
                    key='sub1'
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
