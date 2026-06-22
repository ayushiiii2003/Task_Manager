import type { Task } from '../types/Task';

interface TaskFormProps {
  task: Task;
  onUpdate: (id: string, priority: 'low' | 'medium' | 'high') => void;
}

function TaskForm({ task, onUpdate }: TaskFormProps) {
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdate(task.id, priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Priority:
        <select value={priority} onChange={(event) => setPriority(event.target.value as 'low' | 'medium' | 'high')}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Update Priority</button>
    </form>
  );
}

export default TaskForm;