import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the JSON server on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://safe-debonair-heart.glitch.me/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      // POST request to add user
      const response = await fetch(
        "https://safe-debonair-heart.glitch.me/users",
        {
          // http://localhost:3000/users
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save user");
      }

      const newUser = await response.json();

      // Update the local state with the new user
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <Form addUser={addUser} />
      <DisplayData users={users} />
    </div>
  );
};

export default App;
