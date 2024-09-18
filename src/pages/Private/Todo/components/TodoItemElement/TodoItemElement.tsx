import { TodoItem } from "../../../../../@types";

interface TodoItemProp {
  value: TodoItem;
  onDelete: () => void;
  onUpdate: () => void;
}

const TodoItemElement = (item: TodoItemProp) => {
  return (
    <div key={item.value.id}>
      <div>{item.value.title}</div>
      <div>Age: {item.value.description}</div>
      <button onClick={() => item.onDelete()}>delete</button>
      <button onClick={() => item.onUpdate()}>edit</button>
    </div>
  );
};

export default TodoItemElement;
