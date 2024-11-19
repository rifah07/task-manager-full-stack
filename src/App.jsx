import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/TaskContext";
function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
