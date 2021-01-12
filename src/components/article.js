import React, { useContext } from "react";
import { userTypeContext } from "../context/userType";

const Article = () => {
  const [, setType] = useContext(userTypeContext);
  return (
    <div>
      <label>Choose type: </label>
      <select
        value="DEFAULT"
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="DEFAULT" disabled hidden>
          Select a type
        </option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
    </div>
  );
};

export default Article;
