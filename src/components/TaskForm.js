import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const { addNewTask } = useContext(TaskContext);

  return (
    <form
    className="container d-flex justify-content-center mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask(newTask);
        setNewTask('')
      }}
    >
      <input
        type="text"
        value={newTask}
        className="w-50"
        onChange={(e) => setNewTask(e.target.value)}
        required
        placeholder="add new task"
      />
      <input type="submit" value="submit" className="btn btn-dark" />
    </form>
  );
};

export default TaskForm;
