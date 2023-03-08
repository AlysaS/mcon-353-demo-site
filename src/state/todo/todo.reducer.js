//import { Todo } from "../../components/todo/todo";
import { cloneDeep } from "lodash";
import { Todo } from "../../components/todo/todo";

export const TodoActions = { //creating a fake enum to use in the reducer
  ADD: "ADD", 
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

//returns new state based on what passed in -- pass in curr state and action
export const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] }; //whole old array and also add one more item
    }
    case TodoActions.TOGGLE: {
        let newTodos = cloneDeep(state.todos);
      //const newTodos = [...state.todos]; //take state that had before and put into new array
      const updatedTodo = newTodos.find((x) => x.title === action.todo.title);

      //make some changes before set state -- allowed to make changes bec didnt yet send to react
      updatedTodo.isComplete = !updatedTodo.isComplete;

      return {
        todos: newTodos,
      };
    }
    case TodoActions.DELETE:{
      const newTodos = state.todos.filter((x) => !(x.title === action.todo.title));
      return {
        todos: newTodos,
      }
    }
  }
};

//just example actions - not used
/*
const addAction = {
  type: TodoActions.ADD,
  todo: { title: "test", isComplete: false },
};
const toggleAction = {
  type: "TOGGLE",
  todo: { title: "test", isComplete: false },
};
*/
