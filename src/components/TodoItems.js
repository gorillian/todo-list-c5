import { useState } from "react";

export default function TodoItems(props) {
  const { done, id, title } = props.todo;
  const [completed, setCompleted] = useState(done);

  return (
    <div className={"current-tasks-wrapper"}>
      <input
        type="checkbox"
        defaultChecked={done}
        onClick={() => setCompleted((c) => !c)}
      />
      <div className={`${completed ? "completed" : ""}`}>{title}</div>
      <button onClick={() => props.handleDeleteClick(id)}>X</button>
    </div>
  );
}
