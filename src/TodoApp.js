import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoApp.css";
import SignUp from "./components/SignUp"; 
import "./components/SignUp.css"; 

const TodoApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState(""); 

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleReview = (type) => {
    setFilter(type);
  };

  const handleJournalEntry = () => {
    setJournalEntries([...journalEntries, journalEntry]);
    setJournalEntry("");
  };

  const handleSignUp = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  if (!isLoggedIn) {
    return <SignUp onSignUp={handleSignUp} />;
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "incomplete") {
      return todo.completed === false;
    }
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleReview("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => handleReview("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
        <button onClick={() => handleReview("incomplete")} className={filter === "incomplete" ? "active" : ""}>Incomplete</button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""}
            onClick={() => handleCompleteTodo(todo.id)}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="journal-entry-container">
        <h2>Journal Entry</h2>
        <textarea
          rows="4"
          cols="47"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Write your journal entry here..."
        />
        <button onClick={handleJournalEntry} className="save-journal-button">Save Journal</button>
      </div>
      <div className="journal-entries-container" style={{ paddingTop: "1.5rem" }}>
        <h2>Journal Entries</h2>
        <ul>
          {journalEntries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
