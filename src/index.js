import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Style/index.css';
import callApi from './PersoLibrary/callApi';

// callApi(18).then(e => console.log(e.userInfos.firstName))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
    </div>
  </React.StrictMode>
);