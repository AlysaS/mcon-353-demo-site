import React ,{useState} from 'react';
import {Checkbox, ListItemText, TextField, List, ListItem, IconButton,Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


export const Todo = () => {
    
    //store all items of list in an Array
   const [input, setInput] = useState(""); //empty input

   //add todos as objects instead of strings so that 
    const [todos,setTodos] = useState( [{title: "Homework!", isComplete: false},{title: "Shopping", isComplete: true}]);
    
    const onInput = (event) => {console.log(event.target.value);
    setInput(event.target.value)} ;
    
    const addTodo = () => {
        //todos.push(input); //dont want to just push, want to create new array with new item
        setTodos([...todos, {title: input, isComplete: false}]); //add everyting from old array to new and then also add the value in the input
        console.log(todos);
        setInput("");
    }

    const toggleChecked = (todo) => {
        //
        const newTodos= [...todos];
        const updatedTodo = newTodos.find((x) => x.title === todo.title);

        //make some changes before set state
        updatedTodo.isComplete= !todo.isComplete;

        setTodos(newTodos);
        console.log(todo);
    }

    const deleteTodo = (todo) => {
        const newTodos = todos.filter((x) => !(x.title === todo.title));
        setTodos(newTodos);
    }

    return (
        <div style={{textAlign:"center"}}> 
            
            <h1 style={{fontSize: 65}}>Todos</h1> 
           
            <TextField   variant="outlined" size="small" onInput= {onInput} value= {input} />
            <Button variant="contained" onClick={addTodo}>ADD</Button>
        
           <List sx={{ width: '30%', textAlign:"center",  margin: "auto"}}>
           {//want to print every string in array as a list element 
            todos.map(todo => (
            <ListItem sx={{border:.75}}
            secondaryAction={
                <IconButton edge="end">
                    <Checkbox color="success" icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} checked={todo.isComplete} onChange= {() => {toggleChecked(todo)}}/>
                    <Checkbox icon={<DeleteForeverOutlinedIcon/>} checkedIcon={<DeleteForeverOutlinedIcon/>}  onChange= {() => {deleteTodo(todo)}}/>
                </IconButton>
            }>
            <ListItemText key={todo.title} >
                {todo.title}

                {/*//control check (checked) but also giev use way to change it by using onInput 
                <input type="checkbox" checked={todo.isComplete}  onChange={() => {toggleChecked(todo)}}/>   
                <Checkbox color="success" icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} checked={todo.isComplete} onChange= {() => {toggleChecked(todo)}}/>
                <Checkbox icon={<DeleteForeverOutlinedIcon/>} checkedIcon={<DeleteRoundedIcon/>}  onChange= {() => {deleteTodo(todo)}}/>  */}
                
            </ListItemText>
            </ListItem>
            ))}
           
          </List>
           
        </div>
        
    )
}
