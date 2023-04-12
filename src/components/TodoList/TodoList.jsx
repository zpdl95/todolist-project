import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import style from './TodoList.module.pcss';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleUpdate = (updated) =>
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updated.id ? updated : todo))
    );

  const handleDelete = (deleted) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted.id));

  const filterd = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ul className={`${style.lists} ${style.listsColor}`}>
        {filterd.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <footer className={`${style.footer} ${style.footerColor}`}>
        <AddTodo onAdd={handleAdd} />
      </footer>
    </>
  );
}

// 컴포넌트 자체와 큰 관련이 없으면 외부에 생성
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}
