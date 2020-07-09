import React from 'react';
import { Link } from 'react-router-dom';

import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const ElectronMenu = electron.remote.Menu;

class App extends React.Component {
  state = {
    date: null,
    collapsed: false,
  };

  componentDidMount() {
    this.initMenu();
  }

  handleChange = (date) => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  initMenu = () => {
    const menu = ElectronMenu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          { label: 'New Window' },
          {
            label: 'Settings',
            accelerator: 'CmdOrCtrl+,',
            click: () => {
              ipcRenderer.send('toggle-settings');
            },
          },
          { type: 'separator' },
          {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
          },
        ],
      },
      {
        label: 'Edit',
        submenu: [
          { label: 'Menu Item 1' },
          { label: 'Menu Item 2' },
          { label: 'Menu Item 3' },
        ],
      },
    ]);
    ElectronMenu.setApplicationMenu(menu);
  };

  render() {
    const { date } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div>
                <h1>Home page</h1>
                <ul>
                  <li>
                    <Link to="/profile">Go to your profile</Link>
                  </li>
                  <li>
                    <Link to="/images">Get Images</Link>
                  </li>
                </ul>
                <div>
                  <h1>HOME PAGE</h1>
                  <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={this.handleChange} />
                    <div style={{ marginTop: 20 }}>
                      Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
