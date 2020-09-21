import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Header from './component/Header';


ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <App />
    </React.StrictMode>, document.getElementById('root')
)