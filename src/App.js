import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';

function App() {
  return (
    <div className="betterview">
      <h1 data-testid='head' className='App-welcome-text'>Welcome to Testing</h1>
      <Countries></Countries>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
