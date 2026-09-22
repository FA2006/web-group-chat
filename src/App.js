import Navbar from './Navbar';
import Home from './home';
import TaskBar from './task-bar';
import GroupDM from './GroupDM';
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';

function AppContent() {
  const location = useLocation();
  const history = useHistory();
  const isGroupRoute = location.pathname.startsWith('/group/');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddToTaskBar = (group) => {
    setTasks((prevTasks) => {
      const alreadyExists = prevTasks.some((task) => task.groupId === group.id);
      if (alreadyExists) {
        const existingTask = prevTasks.find((task) => task.groupId === group.id);
        setSelectedTask(existingTask.id);
        return prevTasks;
      }

      const newTask = { id: Date.now(), title: group.title, groupId: group.id };
      setSelectedTask(newTask.id);
      return [...prevTasks, newTask];
    });
  };

  const handleRemoveTask = (taskIdOrGroup) => {
    const taskId = typeof taskIdOrGroup === 'number'
      ? taskIdOrGroup
      : tasks.find((task) => task.groupId === taskIdOrGroup?.id)?.id;

    if (taskId === undefined) {
      return;
    }

    setTasks((prevTasks) => {
      const remaining = prevTasks.filter((task) => task.id !== taskId);

      if (selectedTask === taskId) {
        setSelectedTask(remaining.length > 0 ? remaining[0].id : null);
      }

      return remaining;
    });
  };

  const handleOpenGroup = (groupId) => {
    history.push(`/group/${groupId}`);
  };

  return (
    <div className="App">
      {!isGroupRoute && <Navbar />}
      <div className="content">
        <Switch>
          {/* Home page */}
          <Route exact path="/">
            <Home onAddToTaskBar={handleAddToTaskBar} />
          </Route>

          {/* Dynamic Group DM */}
          <Route path="/group/:groupId">
            <GroupDM
              isTaskBarGroup={tasks.some((task) => task.groupId === Number(location.pathname.split('/').pop()))}
              onAddToTaskBar={handleAddToTaskBar}
              onRemoveTask={handleRemoveTask}
            />
          </Route>
        </Switch>
      </div>
      {!isGroupRoute && tasks.length > 0 && (
        <TaskBar
          tasks={tasks}
          selectedTask={selectedTask}
          onSelectTask={setSelectedTask}
          onRemoveTask={handleRemoveTask}
          onOpenGroup={handleOpenGroup}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;