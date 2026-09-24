import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;