import styles from './job.module.css'
import Link from 'next/link'
export default function Job ({ id, company, companyAvatar, role }) {
  return (
    <li className={styles.container}>
      <Link href={`/job/${id}`}>
        <div className={styles.card} href='#'>
          <div className={styles.description}>
            <img className={styles.avatar} src={companyAvatar} />

            <p className={styles.text}>
              <span className={styles.text_bold}>{company}</span> está
              contratando um
              <span className={styles.text_bold_mark}> {` ${role}`}</span>
            </p>
          </div>

          <a className={styles.red_button} href='#'>
            Saiba Mais
          </a>
        </div>
      </Link>
    </li>
  )
}
