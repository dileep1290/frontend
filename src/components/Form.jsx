import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      await addUser(user); // Call the parent function to add user
      setEmail(""); // Reset form fields
      setPassword("");
    } catch (error) {
      console.error(error.message);
      alert("An error occurred while adding the user.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
