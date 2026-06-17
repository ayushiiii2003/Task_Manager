import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { generateId } from './utils/idGenerator';
import type { Task } from './types/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: generateId(), title: 'Set up project structure', completed: true },
    { id: generateId(), title: 'Build task list component', completed: false },
  ]);

  function addTask(title: string) {
    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>
      <main className="app-main">
        <AddTaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  );
}

export default App;
