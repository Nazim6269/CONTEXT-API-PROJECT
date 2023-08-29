//external import
import React from "react";
//internal import
import useUserContext from "../hooks/useUserContext";
import style from "./user.module.css";

//codes start from here
const UserOne = ({ user }) => {
  const { id, name } = user;

  const { users, setUsers } = useUserContext();

  const handleDelete = (id) => {
    const filter = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(filter);
  };

  return (
    <div className={style.user}>
      <h2>{id}</h2>
      <p>{name}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserOne;
