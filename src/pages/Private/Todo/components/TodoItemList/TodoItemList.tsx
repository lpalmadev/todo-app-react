import { useContext } from "react";
import { TodoDataContext } from "../../../../../contexts/TodoDataContext";

const TodoItemList = () => {
  const { todoItemList, deleteTodoItem, setCurrentItem } =
    useContext(TodoDataContext);

  return (
    <>
      {todoItemList.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>Age: {item.description}</div>
          <button onClick={() => deleteTodoItem(item.id)}>delete</button>
          <button onClick={() => setCurrentItem(item)}>edit</button>
        </div>
      ))}
    </>
  );
};

export default TodoItemList;
