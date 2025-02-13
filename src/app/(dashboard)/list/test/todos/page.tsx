"use client";
import Todos from "@/components/Todos";
import Todo from "@/lib/model/todo";
import { useRef, useState } from "react";
import { text } from "stream/consumers";
import Grid from "@mui/material/Grid2";
import { Box, Button, Input, TextField } from "@mui/material";

const initoalTodos = [
  { id: "1", text: "Learn React" },
  { id: "2", text: "Learn Typescript" },
];

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandle = (todoText: string) => {
    const newTodo = { id: todoText, text: todoText };
    // setTodos((prev) => [...prev, { id: todoText, text: todoText }]);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandle = (todoText: string) => {
    const newTodo = { id: todoText, text: todoText };
    // setTodos((prev) => [...prev, { id: todoText, text: todoText }]);
    setTodos((prevTodos) => prevTodos.filter((item) => item.text !== todoText));
  };

  return (
    <Grid
      container
      direction={"row"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        justifyContent="center"
        sx={{
          width: "50%",
          bgcolor: "lightgray",
          borderRadius: 1,
          padding: 2,
        }}
      >
        <Grid container flexDirection={"column"} spacing={5}>
          <NewTodo onAddTodo={addTodoHandle} />
          <Todos items={todos} onRemoveTodo={removeTodoHandle} />
        </Grid>
      </Box>
    </Grid>
  );
};

const NewTodo = ({ onAddTodo }: { onAddTodo: (text: string) => void }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container flexDirection={"column"} spacing={3}>
        <TextField
          variant="filled"
          placeholder="Todo Text"
          name="text"
          inputRef={todoTextInputRef}
        />
        {/* <input type="text" id="text" ref={todoTextInputRef}/> */}
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
        {/* <button>submit</button> */}
      </Grid>
    </form>
  );
};

export default Page;
