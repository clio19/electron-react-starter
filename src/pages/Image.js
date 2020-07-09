import React, { Component } from 'react';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

export default class Image extends Component {
  state = {
    imageUrl: '',
  };

  componentDidMount() {
    ipcRenderer.on('image', (event, arg) => {
      this.setState({
        imageUrl: arg,
      });
    });
  }
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="image" />
      </div>
    );
  }
}
