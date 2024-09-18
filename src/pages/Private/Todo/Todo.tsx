import TodoDataProvider from "../../../contexts/TodoDataContext";
import { TodoForm, TodoItemList } from "./components";

const Todo = () => {
  return (
    <TodoDataProvider>
      <TodoForm />
      <TodoItemList />
    </TodoDataProvider>
  );
};

export default Todo;
