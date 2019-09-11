import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import App from './components/App';
import Sider from './components/base/Sider/Sider';
import Header from './components/base/Header/Header';
import Content from './components/base/Content/Content';
import Footer from './components/base/Footer/Footer';

const Root: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider />
                <Layout>
                    <Header />
                    <Content>
                        <App />
                    </Content>
                    {/* <Footer /> */}
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

export default Root;
