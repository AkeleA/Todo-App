import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";

const TodoForm = ({ newTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="I need to do this"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            type="submit"
          >
            + Add Item
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
