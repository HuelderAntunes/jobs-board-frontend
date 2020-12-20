import styles from './navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'

export default function Navbar (props) {
  function handleToBoardClick (e) {
    if (!props.boardRef) {
      return Router.push('/')
    }
    props.boardRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <Link href={`/`}>{props.title}</Link>
        {/* <span className={styles.beta_tag}>beta</span> */}
      </div>
      <div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <span onClick={handleToBoardClick}>Explorar Vagas</span>
          </li>
          <li className={styles.menu_button}>
            <a href='https://forms.gle/XpX584Rp6izNTuZj9'>Postar Vaga</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
