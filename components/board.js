import React, { createContext, useState } from 'react'
import styles from './board.module.css'
import Tag from './tag'
import Job from './job'
import _ from 'lodash'
import { IconContext } from 'react-icons'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Board ({ jobs, tags }) {
  const [tagFilter, setTagFilter] = useState([])
  const [jobsFilter, setJobsFilter] = useState(jobs)

  const toggleTagFilter = (e, tag) => {
    let newTagFilterState = tagFilter
    if (tagFilter.indexOf(tag) >= 0) {
      newTagFilterState = tagFilter.filter(e => e !== tag)
    } else {
      newTagFilterState = [...tagFilter, tag]
    }

    setTagFilter(newTagFilterState)

    if (newTagFilterState.length > 0) {
      setJobsFilter(
        jobs.filter(job => {
          console.log(job.tags)
          return (
            job.tags.filter(t => newTagFilterState.includes(t.name)).length > 0
          )
        })
      )
    } else {
      setJobsFilter(jobs)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box_limiter}>
        <input
          placeholder='e.g. remote, ustwo, virtual reality, los angeles'
          className={styles.search}
          type='text'
          name=''
          id=''
        />

        <div className={styles.tags}>
          {tags.map(tag => (
            <Tag
              key={tag.name}
              name={tag.name}
              selected={tagFilter.indexOf(tag.name) >= 0}
              toggleTagFilter={e => toggleTagFilter(e, tag.name)}
            />
          ))}
        </div>

        <ul className={styles.board}>
          {jobsFilter.map(job => (
            <Job
              key={job.company + job.role + job.createdAt}
              company={job.company}
              companyAvatar={job.companyAvatar}
              role={job.role}
              id={job.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
