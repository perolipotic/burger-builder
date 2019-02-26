import React from 'react';
import logo from '../../assets/images/burger-logo.png'
import style from './Logo.css'

const Logo = (props) => {
  return (
    <div className={style.Logo} style={{ height: props.height }}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo