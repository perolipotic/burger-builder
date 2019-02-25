import React from 'react'
import style from './Modal.css';
import Backdrop from '../BackDrop/BackDrop';


const Modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} show={props.show} />
    <div className={style.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </>
)



export default Modal;