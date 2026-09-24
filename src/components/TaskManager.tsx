import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");

  const { theme } = useTheme();

  const addTask = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    dispatch({
      type: "add",
      payload: trimmedTask,
    });

    setTask("");
  };

  const removeTask = (id: number) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <div className={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />

        <button
          onClick={addTask}
          disabled={!task.trim()}
        >
          Add Task
        </button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((currentTask) => (
          <li key={currentTask.id} className={styles.taskItem}>
            <span>{currentTask.text}</span>

            <button
              onClick={() => removeTask(currentTask.id)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className={styles.emptyMessage}>
          No tasks yet. Add your first task!
        </p>
      )}
    </div>
  );
};

export default TaskManager;