import React ,{useState} from 'react';

export const Todo = () => {
    
    //store all items of list in an Array
   const [input, setInput] = useState(""); //empty input

   //
    const [todos,setTodos] = useState( []);
    
    const onInput = (event) => {console.log(event.target.value);
    setInput(event.target.value)} ;
    
    const addTodo = () => {
        //todos.push(input); //dont want to just push, want to create new array with new item
        setTodos([...todos, input]); //add everyting from old array to new and then also add the value in the input
        console.log(todos);
    }
    return (
        
        <div> 
            <h1>Todos</h1> 
           
           <input  onInput= {onInput}  />
           <button onClick={addTodo}>ADD</button>

           {
            //want to print every string in array as a <p> 
            todos.map(todo => (
            <p>
                <input type="checkbox"/>
                {todo}
            </p>))
           }
            
        </div>

    )
}
