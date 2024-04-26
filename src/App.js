import React, { useState } from "react";
import TodoApp from "./TodoApp";
import SignUp from "./components/SignUp"; 
import "./components/SignUp.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleSignUp = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  if (!isLoggedIn) {
    return <SignUp onSignUp={handleSignUp} />;
  }

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <TodoApp />
    </div>
  );
}

export default App;
