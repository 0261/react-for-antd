import React from 'React';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const { SubMenu } = Menu;

export default class Navigation extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="appstore" />
                            테스트 시리즈
                        </span>
                    }
                >
                    <Menu.ItemGroup title="시리즈1">
                        <Menu.Item key="setting:3">테스트 1</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="시리즈2">
                        <Menu.Item key="setting:1">테스트 1</Menu.Item>
                        <Menu.Item key="setting:2">테스트 2</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="kids">
                    <Icon type="aliwangwang" />
                    키즈
                </Menu.Item>
                <Menu.Item key="champion">
                    <Icon type="idcard" />
                    아이디카드
                </Menu.Item>
                <Menu.Item key="synergy">
                    <Icon type="team" />팀
                </Menu.Item>
                <Menu.Item key="item">
                    <Icon type="database" />
                    데이터베이스
                </Menu.Item>
                <Menu.Item key="patch">
                    <Icon type="rise" />
                    증가
                </Menu.Item>
            </Menu>
        );
    }
}
