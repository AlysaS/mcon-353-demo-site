import { Todo } from "../../components/todo/todo";

const TodoActions = {
    ADD
}


//returns new state based on what passed in -- pass in curr state and action
const todoReducer = (state, action) => {
    switch(action.type){
        case TodoActions.ADD: {
            return {todos: [...state.todos, action.todo]};
        }
    }
};


const addAction = {type: TodoActions.ADD, todo:{title:"test", isComplete: false}};


