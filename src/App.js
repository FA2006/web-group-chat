import Navbar from './Navbar';
import Home from './home';
import TaskBar from './task-bar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
      <TaskBar />
    </div>
  );
}

export default App;
