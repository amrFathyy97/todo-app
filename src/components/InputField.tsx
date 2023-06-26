import React from "react";

import { useRef } from "react";

type TodoProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        className="input"
        value={todo}
        onChange={(value) => {
          setTodo(value.target.value);
        }}
      />
      <input className="input-submit" type="submit" value="Add" readOnly />
    </form>
  );
};

export default InputField;
