import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';
import style from './App.module.pcss';
import { useState } from 'react';
import { useDarkMode } from './context/theme';

const filters = ['all', 'active', 'completed'];

function App() {
  const { darkMode } = useDarkMode();
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className={`${style.App}`}>
      <div className={style.container}>
        <Nav filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </div>
  );
}

export default App;
