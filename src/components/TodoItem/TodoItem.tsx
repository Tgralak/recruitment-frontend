import type { Todo } from '../../store/store';
import './TodoItem.scss';

interface TodoItemProps extends Todo {
  onRemove: () => void;
  onToggle: () => void;
}

export const TodoItem = ({ text, isCompleted, onRemove, onToggle }: TodoItemProps) => {
  return (
    <div className="todoItem">
      <div className="todoItem-checkbox">
        <input type="checkbox" defaultChecked={isCompleted} onClick={onToggle} />
      </div>
      <div className="todoItem-text">
        <p className={isCompleted ? 'todoItem-completed' : undefined}>{text}</p>
      </div>
      <button className="todoItem-removeButton" onClick={onRemove}>
        x
      </button>
    </div>
  );
};
