import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TaskForm from '../../components/TaskForm';
import type { Task } from '../../types/Task';

const task: Task = {
  id: '1',
  title: 'Test Task',
  completed: false,
  priority: 'low'
};

describe('TaskForm component', () => {
  it('renders the form with the correct priority', () => {
    const { getByText, getByValue } = render(<TaskForm task={task} onUpdate={() => {}} />);
    expect(getByText('Priority:')).toBeInTheDocument();
    expect(getByValue('low')).toBeInTheDocument();
  });

  it('calls the onUpdate function when the form is submitted', () => {
    const onUpdate = jest.fn();
    const { getByText, getByValue } = render(<TaskForm task={task} onUpdate={onUpdate} />);
    const select = getByValue('low');
    fireEvent.change(select, { target: { value: 'medium' } });
    const submitButton = getByText('Update Priority');
    fireEvent.click(submitButton);
    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledWith(task.id, 'medium');
  });
});