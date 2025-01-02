import { useRef, useState } from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { Route, Routes } from "react-router-dom";

function App() {
  

  

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/signed" element={<Login/>}/>
      <Route path="/logged" element={<Logout/>}/>
    </Routes>
    
    </>
  );
}

export default App;
