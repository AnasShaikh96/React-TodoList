import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);
  return tasks.length ? (
    <div className="container text-center">
      <div className="d-flex justify-content-center">
        <ul className="list-group w-50 list-unstyled ">
          {tasks.map((task) => (
            <li
              onClick={(id) => removeTask(task.id)}
              className="list-item bg-dark text-light rounded m-1 p-3 lead"
              key={task.id}
            >
              {task.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <p className="text-center lead">no task found</p>
  );
};

export default TaskList;
