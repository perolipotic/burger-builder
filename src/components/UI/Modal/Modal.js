import React, { Component } from 'react'
import style from './Modal.css';
import Backdrop from '../BackDrop/BackDrop';


class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentDidUpdate() {
    console.log('[Modal with update]')
  }
  render() {
    const { modalClosed, show, children } = this.props
    return (
      <>
        <Backdrop clicked={modalClosed} show={show} />
        <div className={style.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </>
    )
  }

}



export default Modal;