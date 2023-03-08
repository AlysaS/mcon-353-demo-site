import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
}); //default is empty array
