import { useContext, useEffect, useState } from "react";
import { TodoItemModel } from "../../../../../@types/Todo";
import { useAuth } from "../../../../../hooks";
import { TodoDataContext } from "../../../../../contexts/TodoDataContext";

const initialFormState: TodoItemModel = {
  title: "",
  description: "",
  isDone: false,
  isImportant: false,
  userId: "",
};

const TodoForm = () => {
  const [form, setForm] = useState<TodoItemModel>(initialFormState);
  const { currentItem, setCurrentItem, createTodoItem, updateTodoItem } =
    useContext(TodoDataContext);
  const { user } = useAuth();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentItem) {
      await updateTodoItem(currentItem.id, form);
      setCurrentItem(null);
    } else {
      await createTodoItem({ ...form, userId: user ? user.uid : "" });
    }
    setForm(initialFormState);
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (currentItem) {
      setForm(currentItem as TodoItemModel);
    }
  }, [currentItem]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Título
          </label>
          <input
            name="title"
            type="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            name="description"
            type="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
