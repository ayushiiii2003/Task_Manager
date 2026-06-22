import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskItem from '../../components/TaskItem';
import type { Task } from '../../types/Task';

const task: Task = {
  id: '1',
  title: 'Test Task',
  completed: false,
  priority: 'low'
};

describe('TaskItem component', () => {
  it('renders the task with the correct title and priority', () => {
    const { getByText } = render(<TaskItem task={task} onToggle={() => {}} onDelete={() => {}} />);
    expect(getByText(task.title)).toBeInTheDocument();
    expect(getByText(task.priority)).toBeInTheDocument();
  });

  it('calls the onToggle function when the checkbox is clicked', () => {
    const onToggle = jest.fn();
    const { getByRole } = render(<TaskItem task={task} onToggle={onToggle} onDelete={() => {}} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(task.id);
  });

  it('calls the onDelete function when the delete button is clicked', () => {
    const onDelete = jest.fn();
    const { getByText } = render(<TaskItem task={task} onToggle={() => {}} onDelete={onDelete} />);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(task.id);
  });
});