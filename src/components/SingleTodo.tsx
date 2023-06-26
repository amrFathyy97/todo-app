import { useEffect } from "react";
import { Todo } from "../model";

import { FaTrashAlt } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";

interface TodosProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
}

const SingleTodo: React.FC<TodosProps> = ({ todos, setTodos, todo, index }) => {
  const handleIsDone = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  };

  const handleEditTask = (id: number, isDone: boolean) => {
    let z: any;
    if (!isDone) {
      z = prompt("Add New Task");
    }
    if (z === null || z === "") {
      z = todo.todo;
    }
    setTodos(
      todos.map((todo) =>
        !todo.isDone && todo.id === id ? { ...todo, todo: z } : todo
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list">
      {todo.isDone ? (
        <s className="todo-title">{todo.todo}</s>
      ) : (
        <h3 className="todo-title">{todo.todo}</h3>
      )}

      <div className="action">
        {!todo.isDone && (
          <MdDownloadDone
            onClick={() => {
              handleIsDone(todo.id);
            }}
          />
        )}
        {!todo.isDone && (
          <MdEditDocument
            onClick={() => {
              handleEditTask(todo.id, todo.isDone);
            }}
          />
        )}
        <FaTrashAlt
          onClick={() => {
            handleDeleteTask(todo.id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleTodo;
