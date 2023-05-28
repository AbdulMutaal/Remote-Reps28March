import { useState, useRef } from "react";
import TasksAndSubtasks from "./TaskAndSubTask";

const TASKS = [
  {
    task: { id: 1, name: "Clean bedroom", completed: false },
    subtasks: [
      { id: 2, name: "Do laundry", completed: false },
      { id: 3, name: "Organize desk", completed: false },
      { id: 4, name: "Wipe floors", completed: false },
    ],
  },
  {
    task: { id: 5, name: "Study", completed: true },
    subtasks: [
      { id: 6, name: "Review chemistry", completed: false },
      { id: 7, name: "Do a React coding challenge", completed: false },
    ],
  },
  {
    task: { id: 8, name: "Build website", completed: true },
    subtasks: [
      { id: 9, name: "Choose tech stack", completed: false },
      { id: 10, name: "Design pages", completed: false },
      { id: 11, name: "Develop", completed: false },
      { id: 12, name: "Publish", completed: false },
    ],
  },
];

function Tasks() {
  const taskRef = useRef<any>();

  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="flex flex-col justify-center items-center py-[200px]">
      <button
        onClick={() => taskRef?.current?.clickClearBtn()}
        className="border px-[10px] rounded-[10px] font-normal cursor-pointer"
      >
        Clear completed tasks
      </button>
      <TasksAndSubtasks ref={taskRef} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Tasks;
