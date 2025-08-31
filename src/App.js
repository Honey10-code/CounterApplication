import './App.css';
import ClassCounter from './Component/ClassCounter';
import FunctionCounter from './Component/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
