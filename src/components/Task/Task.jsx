import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Task.css";

export const Task = ({ id, title, deletTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div style={{position:'relative'}}>
      <div style={{  position:'absolute', right:10,top:10,zIndex:10}}>

        <button onClick={() => {
          console.log("delete");
          deletTask()
        }}>Delete</button>
      </div>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="task"
      >
        <input type="checkbox" className="checkbox" />
        {title}
      </div>
    </div>
  );
};
