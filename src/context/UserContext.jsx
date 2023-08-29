import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nazim",
    },
    {
      id: 2,
      name: "Uddin",
    },
    {
      id: 3,
      name: "Patwary",
    },
    {
      id: 4,
      name: "Shadin",
    },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
