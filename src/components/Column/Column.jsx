import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task } from "../Task/Task";

import "./Column.css";

export const Column = ({ tasks,deletTask }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} deletTask={()=>{
            console.log('delete');
            deletTask(task.id)
          }}/>
        ))}
      </SortableContext>
    </div>
  );
};
