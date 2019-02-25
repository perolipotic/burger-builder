import React from 'react'
import style from './BackDrop.css'


const Backdrop = (props) => (props.show ? <div
  onClick={props.clicked}
  className={style.Backdrop}></div> : null);

export default Backdrop