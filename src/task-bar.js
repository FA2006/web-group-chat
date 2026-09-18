import { useState } from 'react';
import { MdGroups } from 'react-icons/md';

const tasks = [
    { title: 'Group 1', id: 1 },
    { title: 'Group 2', id: 2 },
    { title: 'Group 3', id: 3 },
    { title: 'Group 4', id: 4 }
];

const TaskBar = () => {
    const [selectedTask, setSelectedTask] = useState(tasks[0].id);

    return (
        <nav className="task-bar" aria-label="Bottom navigation">
            {tasks.map((task) => (
                <button
                    type="button"
                    key={task.id}
                    className={`task-icon ${selectedTask === task.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTask(task.id)}
                    aria-pressed={selectedTask === task.id}
                >
                    <MdGroups className="task-icon-svg" />
                    <span>{task.title}</span>
                </button>
            ))}
        </nav>
    );
};

export default TaskBar;