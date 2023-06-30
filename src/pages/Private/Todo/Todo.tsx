import TodoDataProvider from "../../../contexts/TodoDataContext";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoItemList } from "./components/TodoItemList";

const Todo = () => {
  return (
    <TodoDataProvider>
      <TodoForm />
      <TodoItemList />
    </TodoDataProvider>
  );
};

export default Todo;
