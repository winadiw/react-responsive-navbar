import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./Toolbar.css"

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo">
          <a href="/">The Logo</a>
        </div>
        <div className="spacer" >
        </div>
        <div className="toolbar__navigation-items">
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
