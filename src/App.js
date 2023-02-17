import "./App.css";

import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import {Header} from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "@mui/material";

function App() {
  //if wanted to return just one page then return it using the code below!
  //return (<Home/>);
  //return (<Todo/>);

  return (
    <HashRouter>
     
      <Header />   {/* import the header component at top of the page */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
