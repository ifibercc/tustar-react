import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import RouterContainer from './routes';
import './App.css';

const {Header, Sider, Content, Footer} = Layout;
// 通过接口获取
const navList = [
  {
    id: '001',
    url: '/public',
    icon: 'user',
    text: 'public'
  }, {
    id: '002',
    url: '/login',
    icon: 'home',
    text: 'login'
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Layout style={{
          height: '100vh'
        }}>
          <Sider style={{
            overflow: 'auto'
          }}>
            <div className="logo"></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {navList.map(nav => (
                <Menu.Item key={nav.id}>
                  <Icon type={nav.icon}/>
                  <span className="nav-text">
                    <Link to={nav.url}>{nav.text}</Link>
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{
              background: '#FFF',
              padding: 0
            }}/>
            <Content style={{
              margin: '24px 16px 0',
              overflow: 'initial'
            }}>
              <div style={{
                padding: 24,
                background: '#FFF',
                textAlign: 'center'
              }}>
                <RouterContainer/>
              </div>
            </Content>
            <Footer style={{
              textAlign: 'center'
            }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
