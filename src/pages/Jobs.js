import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { ipcRenderer } from 'electron';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

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

  showImage = () => {
    ipcRenderer.send('toggle-image');
  };
  render() {
    return (
      <div>
        <h1>images List</h1>
        <Link to="/">Go back to home</Link>
        <div>
          <ul>
            {this.state.images.map((image) => (
              <li
                className="list-group-item"
                onClick={() => {
                  this.showImage();
                }}
              >
                {image.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
