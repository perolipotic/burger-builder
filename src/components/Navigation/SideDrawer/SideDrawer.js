import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDraw.css'
import Backdrop from '../../UI/BackDrop/BackDrop'
const SideDrawer = (props) => {
  let attachedClasses = [style.SideDrawer, style.Close]
  if (props.open) {
    attachedClasses = [style.SideDrawer, style.Open]
  }

  return (
    <>
      <Backdrop
        show={props.open}
        clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>

      </div>
    </>
  );
}

export default SideDrawer;