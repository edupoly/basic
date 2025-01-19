import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Countries from './Countries';
import Todolist from './Todolist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} >
        </Route>
        <Route path='/counter' element={<Counter></Counter>}></Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/todolist' element={<Todolist></Todolist>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
