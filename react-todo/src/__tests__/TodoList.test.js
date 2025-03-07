import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('add-todo-form');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completed status when clicked', () => {
    render(<TodoList />);
    const todo = screen.getByTestId('todo-item-1');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-button-1');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});