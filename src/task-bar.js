import { MdGroups } from 'react-icons/md';
import { FiMinus } from 'react-icons/fi';

const TaskBar = ({ tasks, selectedTask, onSelectTask, onRemoveTask, onOpenGroup }) => {
    return (
        <nav className="task-bar" aria-label="Bottom navigation">
            {tasks.map((task) => (
                <div className="task-item" key={task.id}>
                    <button
                        type="button"
                        className="task-remove"
                        aria-label={`Remove ${task.title}`}
                        onClick={() => onRemoveTask(task.id)}>
                        <FiMinus size={12} />
                    </button>

                    <button
                        type="button"
                        className={`task-icon ${selectedTask === task.id ? 'selected' : ''}`}
                        onClick={() => {
                            onSelectTask(task.id);
                            onOpenGroup(task.groupId || task.id);
                        }}
                        aria-pressed={selectedTask === task.id}>
                        <MdGroups className="task-icon-svg" />
                        <span>{task.title}</span>
                    </button>
                </div>
            ))}
        </nav>
    );
};

export default TaskBar;