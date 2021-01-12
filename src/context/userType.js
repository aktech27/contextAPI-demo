import React, { createContext, useState } from "react";

export const userTypeContext = createContext();

export const UserProvider = (props) => {
  const [type, setType] = useState("None");
  return (
    <userTypeContext.Provider value={[type, setType]}>{props.children}</userTypeContext.Provider>
  );
};
