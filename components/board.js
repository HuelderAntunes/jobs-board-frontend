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
  const [searchFilter, setSearchFilter] = useState('')

  const applyFilters = (e, { newTagFilterState, newSearchFilterState }) => {
    if (newTagFilterState.length > 0 || newSearchFilterState.length > 0) {
      setJobsFilter(
        jobs.filter(job => {
          let searchResult = true
          if (newSearchFilterState.length > 0) {
            searchResult = Object.values(job)
              .join('')
              .toLocaleLowerCase()
              .includes(newSearchFilterState.toLocaleLowerCase())
          }

          let tagsFilter = true
          if (newTagFilterState.length > 0) {
            tagsFilter =
              job.tags.filter(t => newTagFilterState.includes(t.name)).length >
              0
          }

          return tagsFilter && searchResult
        })
      )
    } else {
      setJobsFilter(jobs)
    }
  }

  const handleSearchFilter = e => {
    setSearchFilter(e.target.value)
    applyFilters(e, {
      newTagFilterState: tagFilter,
      newSearchFilterState: e.target.value
    })
  }

  const toggleTagFilter = (e, tag) => {
    let newTagFilterState = tagFilter
    if (tagFilter.indexOf(tag) >= 0) {
      newTagFilterState = tagFilter.filter(e => e !== tag)
    } else {
      newTagFilterState = [...tagFilter, tag]
    }

    setTagFilter(newTagFilterState)
    applyFilters(e, {
      newTagFilterState: newTagFilterState,
      newSearchFilterState: searchFilter
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.box_limiter}>
        <input
          value={searchFilter}
          onChange={handleSearchFilter}
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
          {jobsFilter.length > 0 ? (
            jobsFilter.map(job => (
              <Job
                key={job.slug}
                company={job.company}
                companyAvatar={job.companyAvatar}
                role={job.role}
                slug={job.slug}
              />
            ))
          ) : (
            <p>Não foi encontrada nenhuma vaga com seus requisitos.</p>
          )}
        </ul>
      </div>
    </div>
  )
}
