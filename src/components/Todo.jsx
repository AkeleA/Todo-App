import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

const Todo = ({ title, checkTodo, id, isCompleted, delTodo }) => {
  const markComplete = () => checkTodo(id);
  const deleteTodo = () => delTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "#D2B48C" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2" style={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check style={{ color: "blue" }} />
              </IconButton>
              {title}
              <IconButton style={{ float: "right" }} onClick={deleteTodo}>
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
