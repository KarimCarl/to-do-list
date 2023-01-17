import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Component, startTransition } from 'react';
import Home from './views/Home';

function App() {
  return(
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/analytics"} element={<ToDoAnalytics />} />
        <Route path={"/"} element={<To-do-item />} />
    </Routes>
  );
}

export default App; 