"use client";
import Todo from "@/lib/model/todo";
import { Button } from "@mui/material";

const TodoItem = ({ text }: { text: string }) => {
  return <li>{text}</li>;
};

const Todos = ({ items }: { items: Todo[] }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
