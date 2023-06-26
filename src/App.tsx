import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  useEffect(() => {
    if (localStorage.todos) {
      setTodos(JSON.parse(localStorage.todos));
    }
  }, []);

  return (
    <div className="container">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
