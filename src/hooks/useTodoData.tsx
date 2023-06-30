import { useEffect, useState } from "react";
import { TODO_COLLECTION, TodoItem, TodoItemModel } from "../@types";
import { db } from "../configurations";
import {
  addDoc,
  collection,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from ".";

const useTodoData = () => {
  const [data, setData] = useState<TodoItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.uid !== null) {
      const unsubscribe = onSnapshot(
        query(
          collection(db, TODO_COLLECTION),
          where("userId", "==", user?.uid)
        ),
        (querySnapshot) => {
          const tasks = querySnapshot.docs.map((doc) => {
            const item = doc.data() as TodoItem;
            item.id = doc.id;
            return item;
          });
          setData(tasks);
        }
      );
      return () => unsubscribe();
    }
  }, [user]);

  const createTodoItem = async (item: TodoItemModel): Promise<any> => {
    return await addDoc(collection(db, TODO_COLLECTION), item);
  };

  const updateTodoItem = async (id: string, item: TodoItemModel) => {
    const docRef = doc(db, TODO_COLLECTION, id);
    return await updateDoc(docRef, { ...item });
  };

  const deleteTodoItem = async (id: string) => {
    const docRef = doc(db, TODO_COLLECTION, id);
    return await deleteDoc(docRef);
  };

  return { data, createTodoItem, updateTodoItem, deleteTodoItem };
};

export default useTodoData;
