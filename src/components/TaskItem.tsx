import type { Task } from '../types/Task';
import PrioritySelector from './PrioritySelector';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onPriorityChange: (id: string, priority: string) => void;
}

function TaskItem({ task, onToggle, onDelete, onPriorityChange }: TaskItemProps) {
  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPriorityChange(task.id, event.target.value);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'task-title completed' : 'task-title'}>
        {task.title}
      </span>
      <span style={{ color: task.priority === 'low' ? 'green' : task.priority === 'medium' ? 'orange' : 'red' }}>
        {task.priority}
      </span>
      <PrioritySelector priority={task.priority} onChange={handlePriorityChange} />
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;