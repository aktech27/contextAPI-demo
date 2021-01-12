import React, { useContext } from "react";
import { userTypeContext } from "../context/userType";
import SidebarRight from "./sidebarRight";

const Sidebar = () => {
  const myStyle = {
    ul: { listStyleType: "none", padding: "0px", margin: "0px" },
    li: { textAlign: "center", padding: "14px 16px", textDecoration: "none" },
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
    <React.Fragment>
      {type === "Admin" ? <SidebarRight /> : <React.Fragment />}
      <div className="sidebar">
        <ul style={myStyle.ul}>
          <li style={myStyle.li}>Side1</li>
          <li style={myStyle.li}>Side2</li>
          {returnLI()}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
