import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { TodoItem } from '../TodoItem/TodoItem';
import { removeTodo, toggleTodo } from '../../store/actions';
import { motion } from 'framer-motion';
import './TodoList.scss';

export const TodoList = () => {
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => () => dispatch(removeTodo(id));
  const handleToggle = (id: string) => () => dispatch(toggleTodo(id));

  return (
    <motion.ul className="todoList">
      {todos.map((todo) => {
        const { id } = todo;

        return (
          <motion.li layout key={id} style={{ listStyleType: 'none' }}>
            <TodoItem {...todo} onRemove={handleRemove(id)} onToggle={handleToggle(id)} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
