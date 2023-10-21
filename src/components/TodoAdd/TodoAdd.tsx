import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions';
import './TodoAdd.scss';

export const TodoAdd = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const isInputValueEmpty = inputValue.trim().length < 1;

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleAddTodo} className="todoAdd">
      <input value={inputValue} onChange={handleInputChange} placeholder="Add your next task" />
      <div className="todoAdd-button">
        <button disabled={isInputValueEmpty} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
