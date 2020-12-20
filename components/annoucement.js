import styles from './announcement.module.css'

export default function Announcement ({ children }) {
  return <div className={styles.container}>{children}</div>
}
