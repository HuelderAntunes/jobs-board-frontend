import styles from './tag.module.css'

export default function Board ({ name, selected, toggleTagFilter }) {
  return (
    <span
      onClick={toggleTagFilter}
      className={selected ? styles.tag_selected : styles.tag}
    >
      {name}
    </span>
  )
}
