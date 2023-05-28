import React, { useRef, useImperativeHandle } from "react";

interface TasksAndSubtasksProps {
  ref: any;
  tasks: {
    task: { id: number; name: string; completed: boolean };
    subtasks: { id: number; name: string; completed: boolean }[];
  }[];
  setTasks: any;
}

const TasksAndSubtasks = (
  { tasks, setTasks }: TasksAndSubtasksProps,
  ref: any
) => {
  const tasksRef = useRef<any>();

  useImperativeHandle(
    ref,
    () => {
      return {
        clickClearBtn: () => {
          const accordionOperationChildren = tasksRef.current?.children;
          let childrenToBeRemoved = [];

          for (let i = 0; i < accordionOperationChildren?.length; i++) {
            // stop looping if active is true or we've reached the end of our children
            if (
              accordionOperationChildren[i].classList.contains("task-completed")
            ) {
              // tasksRef.current.removeChild(accordionOperationChildren[i]);
              childrenToBeRemoved.push(accordionOperationChildren[i]);
            }
          }

          for (let j = 0; j < childrenToBeRemoved.length; j++) {
            tasksRef.current.removeChild(childrenToBeRemoved[j]);
          }
        },
      };
    },
    []
  );

  // YOUR CODE HERE
  return (
    <div ref={ref}>
      <div className="max-w-[1400px]" ref={tasksRef}>
        {tasks &&
          tasks.map((task) => (
            <div
              key={task.task.id}
              className={`${task.task.completed ? "task-completed" : ""}`}
            >
              <div
                className={`mt-[20px] ${
                  task.task.completed ? "line-through" : ""
                }`}
              >
                {task.task.name}
              </div>
              {task.subtasks &&
                task.subtasks.map((subtask) => (
                  <div
                    key={subtask.id}
                    className={`${
                      subtask.completed || task.task.completed
                        ? "line-through"
                        : ""
                    } ml-[20px] mb-[5px]`}
                  >
                    {subtask.name}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.forwardRef(TasksAndSubtasks);
