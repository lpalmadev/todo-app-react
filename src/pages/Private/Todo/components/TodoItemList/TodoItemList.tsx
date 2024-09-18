import { useContext } from "react";
import { TodoDataContext } from "../../../../../contexts/TodoDataContext";
import { TodoItemElement } from "../TodoItemElement";

const TodoItemList = () => {
  const { todoItemList, deleteTodoItem, setCurrentItem } =
    useContext(TodoDataContext);

  return (
    <div className="d">
      {todoItemList.map((item) => (
        <TodoItemElement
          value={item}
          onDelete={() => deleteTodoItem(item.id)}
          onUpdate={() => setCurrentItem(item)}
        />
      ))}
    </div>
  );
};

export default TodoItemList;