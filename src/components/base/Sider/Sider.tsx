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
                            <span>설정</span>
                        </span>
                    }
                >
                    <Menu.Item key='/setting/aws'>
                        <Link to='/setting/aws'>AWS 허가</Link>
                    </Menu.Item>
                    {/* <Menu.Item key='/setting/firebase'>
                        <Link to='/setting/firebase'>Firebase Permission</Link>
                    </Menu.Item> */}
                </Menu.SubMenu>
                <Menu.Item key='/start'>
                    <Link to='/start'>
                        <Icon type='build' />
                        <span>차트 추가</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key='/dashboard'>
                    <Link to='/dashboard'>
                        <Icon type='dashboard' />
                        대시보드
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};
export default withRouter(SiderFC);
