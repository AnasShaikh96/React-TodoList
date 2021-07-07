import React, { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "brooming" },
    { id: 2, task: "dishes" },
    { id: 3, task: "cooking" },
  ]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, { id: uuid(), task: newTask }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    setTasks(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
