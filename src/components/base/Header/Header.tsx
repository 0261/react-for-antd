import React, { useCallback } from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import styles from './Header.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import config from '../../../../config';
const { Header } = Layout;

interface Props extends RouteComponentProps {}

const invisibleBreadCrumbs = ['/setting', '/chart'];

const HeaderComponent: React.FunctionComponent<Props> = ({ children, location }) => {
    const pathSnippets = location.pathname.split('/').filter(pathname => pathname);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const isInActive = invisibleBreadCrumbs.includes(url);
        return (
            <Breadcrumb.Item key={url}>
                <Link to={isInActive ? '#' : url} style={{ cursor: 'not-allowed' }}>
                    {config.breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const initBreadCrumbItems = [
        <Breadcrumb.Item key='home'>
            <Link to='/'>Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Header className={styles.header}>
            <div className={styles.align}>
                <Menu theme='light' mode='horizontal' selectable className={styles.menu}>
                    <Menu.Item className={styles.menuItem} key='bread'>
                        <Breadcrumb>{initBreadCrumbItems}</Breadcrumb>
                    </Menu.Item>
                </Menu>
                <Menu theme='light' mode='horizontal' selectable className={styles.menu}>
                    <Menu.Item className={styles.menuItem} key='github' style={{}}>
                        <a href='https://github.com/0261/react-for-antd'>
                            <Icon className={styles.icon} style={{ marginRight: 0 }} type='github'></Icon>
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    );
};
export default withRouter(HeaderComponent);
