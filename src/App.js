import "./App.css";
import { useReducer } from "react";
//import React, { useState } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
//import { AppBar } from "@mui/material";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";


function App() {
  //if wanted to return just one page then return it using the code below!
  //return (<Home/>);
  //return (<Todo/>);

  //get todoState and when finished another thing pops out - dispatcher - logic
  //use todoReducer and pass it this state
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [//can give it default value
      //{ title: "Homework!", isComplete: false },
      //{ title: "Shopping", isComplete: true },
    ],
  }); 

  return (
    <HashRouter>
      <Header /> {/* import the header component at top of the page */}
      {/*put componnet at hogher state so that not erased when switch from home and todo page*/}
      
        <TodoContext.Provider value={{ todoState, todoDispatch }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </TodoContext.Provider>
  
    </HashRouter>
  );
}

export default App;
