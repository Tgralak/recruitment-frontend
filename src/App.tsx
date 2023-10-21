import './App.scss';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="main">
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
