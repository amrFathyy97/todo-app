import { Todo } from "../model";

import "../App.css";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodosProps> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="twice">
      <div className="todos active">
        <h1 className="active-todos-title">Active Tasks</h1>
        {todos.map(
          (todo, index) =>
            !todo.isDone && (
              <SingleTodo
                index={index}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                key={todo.id}
              />
            )
        )}
      </div>
      <div className="completed-task todos">
        <h1 className="active-todos-title">Completed Tasks</h1>
        {todos.map(
          (todo, index) =>
            todo.isDone && (
              <SingleTodo
                index={index}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                key={todo.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TodoList;
