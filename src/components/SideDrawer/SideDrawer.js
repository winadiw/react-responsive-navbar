import React from "react";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer';

  if(props.show) {
    drawerClasses = 'side-drawer side-drawer__open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
