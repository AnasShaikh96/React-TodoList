import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <div>
      <TaskContextProvider >
        <Navbar />
        <Home />
        <TaskList />
        <TaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
