import React ,{useState} from 'react';

export const Todo = () => {
    
    //store all items of list in an Array
   const [input, setInput] = useState(""); //empty input

   //add todos as objects instead of strings so that 
    const [todos,setTodos] = useState( [{title: "first", isComplete: false},{title: "second", isComplete: true}]);
    
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

    return (
        
        <div> 
            <h1>Todos</h1> 
           
           <input  onInput= {onInput} value= {input}  />
           <button onClick={addTodo}>ADD</button>

           {
            //want to print every string in array as a <p> 
            todos.map(todo => (
            <p key={todo.title}>
                {/*//control check (checked) but also giev use way to change it by using onInput*/} 
                <input type="checkbox" checked={todo.isComplete}  onChange={() => {toggleChecked(todo)}}/>

                {todo.title}
            </p>))
           }
            
        </div>

    )
}
