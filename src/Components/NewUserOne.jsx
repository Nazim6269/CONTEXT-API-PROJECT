import React, { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const NewUserOne = () => {
  const [username, setUsername] = useState("");
  const { setUsers } = useUserContext();

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name: username,
    };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };

  return (
    <div>
      <h2> Save Your Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUserOne;
