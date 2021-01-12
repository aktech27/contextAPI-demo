import React from "react";

const SidebarRight = () => {
  const myStyle = {
    ul: { listStyleType: "none", padding: "0px", margin: "0px" },
    li: { textAlign: "center", padding: "14px 16px", textDecoration: "none" },
  };
  return (
    <div className="sidebarRight">
      <ul style={myStyle.ul}>
        <li style={myStyle.li}>Admin1</li>
        <li style={myStyle.li}>Admin2</li>
        <li style={myStyle.li}>Admin3</li>
        <li style={myStyle.li}>Admin4</li>
      </ul>
    </div>
  );
};

export default SidebarRight;
