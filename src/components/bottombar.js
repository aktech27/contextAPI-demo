import React, { useContext } from "react";
import { userTypeContext } from "../context/userType";
const Bottombar = () => {
  const myStyle = {
    ul: { listStyleType: "none", padding: "0px", margin: "0px" },
    li: { float: "right", textAlign: "center", padding: "14px 16px", textDecoration: "none" },
  };
  const [type] = useContext(userTypeContext);
  const returnLI = () => {
    if (type === "Admin") {
      return [
        <li style={myStyle.li} key="1">
          Admin1
        </li>,
        <li style={myStyle.li} key="2">
          Admin2
        </li>,
      ];
    } else if (type === "User") {
      return [
        <li style={myStyle.li} key="1">
          User1
        </li>,
        <li style={myStyle.li} key="2">
          User2
        </li>,
      ];
    }
  };
  return (
    <div className="bottombar">
      <ul style={myStyle.ul}>
        <li style={myStyle.li}>Foot1</li>
        <li style={myStyle.li}>Foot2</li>
        <li style={myStyle.li}>Foot3</li>
        {returnLI()}
      </ul>
    </div>
  );
};

export default Bottombar;
