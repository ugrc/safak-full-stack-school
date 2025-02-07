"use client";
import Todo from "@/lib/model/todo";
import { Button } from "@mui/material";
import classes from "@/components/TodoItem.module.css";

const TodoItem = ({
  text,
  onRemoveTodo,
}: {
  text: string;
  onRemoveTodo: () => void;
}) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

const Todos = ({
  items,
  onRemoveTodo,
}: {
  items: Todo[];
  onRemoveTodo: (todoText: string) => void;
}) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={onRemoveTodo.bind(null, item.text)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
