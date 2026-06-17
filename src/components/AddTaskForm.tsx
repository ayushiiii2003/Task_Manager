import { useState, FormEvent } from 'react';

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (trimmed === '') {
      return;
    }
    onAddTask(trimmed);
    setTitle('');
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="task-input"
      />
      <button type="submit" className="add-btn">
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm;
