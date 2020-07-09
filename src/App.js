import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/profile">Go back to profile</Link>
        </li>
        <li>
          <Link to="/jobs">JobsList</Link>
        </li>
      </ul>
      <div>HIOME </div>
    </div>
  );
}

export default App;
