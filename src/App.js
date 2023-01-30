import React, { useState } from "react"; // import specific element of react library
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  return (
    <div className='App'>
      <header>
        <h1>Todo List ✅</h1>
      </header>
      <Form
        todos={todos}
        setTodo={setTodo}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
