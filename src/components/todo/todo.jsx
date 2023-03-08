import React, { useState, useContext} from "react";
import {
  Checkbox,
  ListItemText,
  TextField,
  List,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer"; //bec used enum

export const Todo = () => {
  //store all items of list in an Array
  const [input, setInput] = useState(""); //empty input
  //const [oldTodos, setTodos] = useState([]);
  const { todoState, todoDispatch } = useContext(TodoContext);  //pull out todoState and .. from the todoContext

  //add todos as objects instead of strings so that
  // const [todos,setTodos] = useState( [{title: "Homework!", isComplete: false},{title: "Shopping", isComplete: true}]);

  const onInput = (event) => {
    //console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    //todos.push(input); //dont want to just push, want to create new array with new item
    /*setTodos([...oldTodos, {title: input, isComplete: false}]); //add everyting from old array to new and then also add the value in the input
        console.log(oldTodos);*/

    //call aciton
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    //
    //const newTodos = [...oldTodos];
    //const updatedTodo = newTodos.find((x) => x.title === todo.title);

    //make some changes before set state -- allowed to make changes bec didnt yet send to react
    /*updatedTodo.isComplete = !todo.isComplete;

    setTodos(newTodos);
    console.log(todo);*/

    todoDispatch({
        type: TodoActions.TOGGLE,
        todo,
      });
  };


  const deleteTodo = (todo) => {
      /*const newTodos = oldTodos.filter((x) => !(x.title === todo.title));
    setTodos(newTodos);*/
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    })
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 65 }}>Todos</h1>

      <TextField
        variant="outlined"
        size="small"
        onInput={onInput}
        value={input}
      />
      <Button variant="contained" onClick={addTodo}>
        ADD
      </Button>

      <List sx={{ width: "30%", textAlign: "center", margin: "auto" }}>
        {
          //want to print every string in array as a list element
          //pull out todos from todao state object
          todoState.todos.map((todo, index) => (
            <ListItem
              sx={{ border: 0.75 }}
              secondaryAction={
                <IconButton edge="end">
                  <Checkbox
                    color="success"
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={todo.isComplete}
                    onChange={() => {
                      toggleChecked(todo);
                    }}
                  />
                  <Checkbox
                    icon={<DeleteForeverOutlinedIcon />}
                    checkedIcon={<DeleteForeverOutlinedIcon />}
                    onChange={() => {
                      deleteTodo(todo);
                    }}
                  />
                </IconButton>
              }
            >
              <ListItemText key={index}>
                {todo.title}

                {/*//control check (checked) but also giev use way to change it by using onInput 
                <input type="checkbox" checked={todo.isComplete}  onChange={() => {toggleChecked(todo)}}/>   
                <Checkbox color="success" icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} checked={todo.isComplete} onChange= {() => {toggleChecked(todo)}}/>
                <Checkbox icon={<DeleteForeverOutlinedIcon/>} checkedIcon={<DeleteRoundedIcon/>}  onChange= {() => {deleteTodo(todo)}}/>  */}
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};
