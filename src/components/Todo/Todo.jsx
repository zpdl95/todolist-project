import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status, text } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input
        type='checkbox'
        id={id}
        checked={status === 'completed' ? true : false}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <span onClick={handleDelete}>
        <FaTrash />
      </span>
    </li>
  );
}
