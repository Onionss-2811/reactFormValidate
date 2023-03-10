import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="height-100vh width-100 bg-secondary bg-gradient d-flex justify-content-center align-items-center">
      <div className=" width-25 bg-white rounded-2 d-flex justify-content-center align-items-center">
      <Form />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
