import React, { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      onSignUp(username);
    } else {
      alert("Please enter username and password.");
    }
  };

  const inputStyle = {
    margin: "0.5rem 0",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const signUpContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    fontFamily: "Comic Sans MS", 
    textAlign: "center", 
  };

  return (
    <div style={signUpContainerStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={{ ...inputStyle, backgroundColor: "blue", color: "white" }}>Sign In</button>
      </form>
    </div>
  );
};

export default SignUp;
