export const TODO_COLLECTION = '/tasks'

export interface TodoItemModel {
    userId: string,
    title: string,
    description: string
    isDone: boolean,
    isImportant: boolean
}

export interface TodoItem extends TodoItemModel {
    id: string
}

export interface TodoDataProviderProps {
    children: JSX.Element | JSX.Element[]
}

export interface TodoContextValue {
    todoItemList: TodoItem[]
    currentItem: TodoItem,
    setCurrentItem: (value: TodoItem | null) => void,
    createTodoItem: (todo: TodoItemModel) => Promise<void>,
    updateTodoItem: (id: string, todo: TodoItemModel) => Promise<void>,
    deleteTodoItem: (id: string) => Promise<void>,
    isLoading: boolean,
    error: boolean
}