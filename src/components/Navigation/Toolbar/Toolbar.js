import React from 'react'
import style from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <header className={style.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClick} />
      <div className={style.Logo}>
        <Logo />
      </div>
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar