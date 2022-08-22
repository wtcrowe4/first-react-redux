import Counter from './Counter';
import Todo from './Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux</h1>
      </header>
      <div className="container">
        <div className="counterDiv">
          <Counter />
        </div>
        <div className="todoDiv">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
