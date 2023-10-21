import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

const mockTodoItem = { id: 'id1', text: 'mockTodoText', isCompleted: false };

describe('<TodoItem /> component', () => {
  const onToggle = jest.fn();
  const onRemove = jest.fn();

  it('renders data', () => {
    render(<TodoItem {...mockTodoItem} onRemove={onRemove} onToggle={onToggle} />);
    expect(screen.getByText('mockTodoText')).toBeInTheDocument();
  });

  it('handles delete', () => {
    render(<TodoItem {...mockTodoItem} onRemove={onRemove} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onRemove).toBeCalled();
  });
});
