import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Table, Layout, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// import { ipcRenderer } from 'electron';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default class Profile extends React.Component {
  state = {
    images: [],
  };
  componentDidMount() {
    axios
      .get('https://yourapi.com/api/images')
      .then((response) => {
        this.setState({ images: response.data.images });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showImage = (image) => {
    ipcRenderer.send('toggle-image', image);
  };
  render() {
    return (
      <Layout>
        {/* <Header className="header"> </Header> */}
        <Layout>
          <Button type="primary">
            <Link to="/">Go back to home</Link>
          </Button>
          <Content>
            <ul>
              {this.state.images.map((image) => (
                <li
                  className="list-group-item"
                  onClick={() => {
                    this.showImage(image.url);
                  }}
                >
                  {image.title}
                </li>
              ))}
            </ul>
            <Table dataSource={dataSource} columns={columns} />;
          </Content>

          {/* <Sider>Sider</Sider> */}
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
