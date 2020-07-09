import React from 'react';
import { Link } from 'react-router-dom';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;

class App extends React.Component {
  componentDidMount() {
    this.initMenu();
  }

  initMenu = () => {
    const menu = Menu.buildFromTemplate([
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
    Menu.setApplicationMenu(menu);
  };

  render() {
    return (
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
        <div>HOME PAGE </div>
      </div>
    );
  }
}

export default App;
