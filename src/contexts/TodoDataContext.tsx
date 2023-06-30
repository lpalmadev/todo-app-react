import { createContext, useState } from "react";
import { TodoContextValue, TodoDataProviderProps, TodoItem } from "../@types";
import { useTodoData } from "../hooks";

export const TodoDataContext = createContext<TodoContextValue>(
  {} as TodoContextValue
);

const TodoDataProvider = ({ children }: TodoDataProviderProps) => {
  const [currentItem, setCurrentItem] = useState<TodoItem | null>(null);
  const { data, createTodoItem, updateTodoItem, deleteTodoItem } =
    useTodoData();

  const value = {
    todoItemList: data,
    currentItem: currentItem,
    setCurrentItem: setCurrentItem,
    createTodoItem: createTodoItem,
    updateTodoItem: updateTodoItem,
    deleteTodoItem: deleteTodoItem,
  } as TodoContextValue;

  return (
    <TodoDataContext.Provider value={value}>
      {children}
    </TodoDataContext.Provider>
  );
};

export default TodoDataProvider;
