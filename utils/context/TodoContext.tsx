import { ReactNode, createContext, useContext, useState, useId } from 'react';


const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const useTodoContext = (): TodoContextValue => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoContextProvider');
    }
    return context;
};

export const TodoProvider = ({ children }: {children: ReactNode}): ReactNode => {
const todoId = useId()
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now(),
      text: 'Work on Chemcider',
      completed: false,
      time: new Date()
    }
  ]);

  const createTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
      time: new Date()
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const updateTodo = (id: number, updatedTodo: Todo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const contextValue: TodoContextValue = {
    todos,
    createTodo,
    deleteTodo,
    updateTodo
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
