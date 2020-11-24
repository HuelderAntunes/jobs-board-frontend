import styles from './hero.module.css'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

export default function Hero (props) {
  return (
    <div className={styles.container}>
      <div className={styles.text_head}>
        <h2 className={styles.subtitle}>{props.subtitle}</h2>
        <h1 className={styles.title}>{props.title}</h1>
        <div>
          <a className={styles.btn} href='#'>
            {props.button1}
          </a>
          <a className={styles.link_text_mark} href='#'>
            {props.button2}
            <BsArrowRight color='#a21afc' size='20px' />
          </a>
        </div>
      </div>
      <div className={styles.featured}>
        <Image
          className={styles.featured_image}
          src={props.image}
          alt='Games Jobs Brasil - Vagas Empregos'
        />
      </div>
    </div>
  )
}
