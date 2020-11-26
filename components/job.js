import styles from './job.module.css'
import Link from 'next/link'
export default function Job ({ slug, company, companyAvatar, role }) {
  return (
    <li className={styles.container}>
      <Link href={`/job/${slug}`}>
        <div className={styles.card}>
          <div className={styles.description}>
            <img className={styles.avatar} src={companyAvatar} />

            <p className={styles.text}>
              <span className={styles.text_bold}>{company}</span> está
              contratando um
              <span className={styles.text_bold_mark}> {` ${role}`}</span>
            </p>
          </div>

          <button className={styles.red_button}>Saiba Mais</button>
        </div>
      </Link>
    </li>
  )
}
