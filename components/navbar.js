import styles from './navbar.module.css'
import { useState } from 'react'

export default function Navbar (props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <a href='/'>{props.title}</a>
        <span className={styles.beta_tag}>beta</span>
      </div>
      <div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <a href='#'>Explorar Vagas</a>
          </li>
          <li className={styles.menu_button}>
            <a href='#'>Postar Vaga</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
