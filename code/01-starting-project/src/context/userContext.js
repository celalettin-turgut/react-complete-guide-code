import { React, createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({ name: "Celalettin" });
  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
