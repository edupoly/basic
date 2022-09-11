import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="betterview">
      <h1 data-testid='head' className='App-welcome-text'>Welcome to Testing</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
