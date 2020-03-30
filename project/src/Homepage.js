import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout} from 'antd';
import {Button} from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Homepage.css';

const {Header, Footer, Sider, Content} = Layout;

export default class Homepage extends Component {
    render() {
        return (
            // <div>
            //     <h1>This is the Homepage</h1>
            //     <Link to='/resume'>Resume</Link><br/>
            //     <Link to='/fakebook'>Fakebook</Link><br/>
            //     <Link to='/app'>App</Link>
            //     <Button type="primary" style={{background: 'red', borderColor: 'yellow'}}>Primary</Button>
            //     <Button>Default</Button>
            //     <Button type="dashed">Dashed</Button>
            //     <Button type="link">Link</Button>
            // </div>
            <div>
                <Layout>
                    <Sider style={{height: '100vh', backgroundColor: 'green'}}>Sittichai</Sider>
                    <Layout>
                        <Header>Sittichai</Header>
                        <Layout>
                            <Content style={{padding: '30px'}}>
                                <Link to='/resume'>
                                    <Button type="primary" style={{background: 'red', borderColor: 'yellow'}}>Resume</Button>
                                </Link>
                            </Content>
                            <Sider style={{backgroundColor: 'pink'}}>Sittichai</Sider>
                        </Layout>
                        <Footer style={{backgroundColor: 'gray'}}>Sittichai</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    };
};