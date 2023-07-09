interface Plans {
  id: string;
  name: string;
  length: {
      id: string;
      workTime: string;
      restTime: string;
  }[];
}[]


interface TodoContextValue {
  todos: Todo[];
  createTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Todo) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  time: Date;
}
