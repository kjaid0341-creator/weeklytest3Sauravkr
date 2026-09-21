

import React from "react";
import BookCard from "./components/count";
import tasks from"./data/tasks.jsx";
import { useState } from "react";
import "./App.css";
function App(){
  const [count,setCount] =React.useState(count);
  function changeStatus(id) {
    let task = tasks.map(function(tasks) {
      if(tasks.id===id){
      tasks.available = !tasks.available;
      }
      return tasks;
    });
    setCount(newtasks);
  }
  
  let pending =0 ;

  let completed = 0;
  return (
    
    //  {useState}
  )
}
export default App;