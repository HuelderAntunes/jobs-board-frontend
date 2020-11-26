import styles from './hero.module.css'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

export default function Hero ({
  button1,
  button2,
  title,
  subtitle,
  image,
  button2Ref
}) {
  function handleToMailClick (e) {
    button2Ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.text_head}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h1 className={styles.title}>{title}</h1>
        <div>
          <a className={styles.btn} href='#'>
            {button1}
          </a>
          <a className={styles.link_text_mark} onClick={handleToMailClick}>
            {button2}
            <BsArrowRight color='#a21afc' size='20px' />
          </a>
        </div>
      </div>
      <div className={styles.featured}>
        <div className={styles.featured_image}>
          <Image
            src={image}
            width='500'
            height='500'
            alt='Games Jobs Brasil - Vagas Empregos'
          />
        </div>
      </div>
    </div>
  )
}
