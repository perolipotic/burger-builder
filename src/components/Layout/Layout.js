import React from 'react'
import styles from './Layout.css'
const Layout = (props) => {
  return (
    <>
      <div>
        toolbar sidedraweer backdrop
      </div>
      <main className={styles.Content}>
        {props.children}
      </main>
    </>
  )
}
export default Layout