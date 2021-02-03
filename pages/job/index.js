import styles from '../../styles/Job.module.css'
import Navbar from '../../components/navbar.js'
import Hero from '../../components/hero.js'
import Board from '../../components/board'
import Divisor from '../../components/divisor'
import EmailForm from '../../components/emailform'
import Footer from '../../components/footer'
import SEO from '../../components/seo'
import Announcement from '../../components/annoucement'
import { useRef } from 'react'
import { getJobsData } from '../../lib/jobs'
import { getTagsData } from '../../lib/tags'
import useSWR, { SWRConfig } from 'swr'
import React, { useState } from 'react'

const fetcher = url => fetch(url).then(r => r.json())

export default function Job () {
  const [page, setPage] = useState(0)

  const [jobs, setJobs] = useState([])
  const jobsCtx = React.createContext(jobs)
  const { data: jobsData, error: jobsError, mutate: jobsMutate } = useSWR(
    `${process.env.API_URL}/jobs?p=${page}`,
    fetcher,
    {
      onSuccess: (data, key, config) => {
        setJobs(data?.success?.jobs)
      }
    }
  )

  const { data: tagsData, error: tagsError, mutate: tagsMutate } = useSWR(
    `${process.env.API_URL}/tags`,
    fetcher
  )

  const [tags, setTags] = useState(tagsData?.success || [])

  const pageCount = Math.ceil(+jobsData?.success?.jobsCount / 30 || 1)
  const emailFormRef = useRef()
  const boardRef = useRef()

  function handlePage (e) {
    setPage(+e.target.textContent - 1)
    setTimeout(() => console.log(jobsData), 5000)
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.container}>
      <SEO
        title='Games Jobs Brasil - Encontre Vagas de Emprego em Jogos'
        description='Games Jobs Brasil um quadro de empregos dedicado a conectar artistas talentosos, designers, programadores, escritores e muito mais com vagas de emprego na área de jogos.'
        keywords='empregos,vagas,jogos,brasil,jobs,games,unity,unreal,godot,code,arte,3d'
      />
      <Announcement>
        <a target='_blank' href={`https://discord.gg/jvrkvFBGEM`}>
          Se junte a nossa <span>comunidade no Discord</span> e fique por dentro
          de todas as oportunidades!
        </a>
      </Announcement>
      <Navbar title='GAMES JOBS BRASIL' boardRef={boardRef} />

      <main className={styles.main}>
        <div className={styles.dspace}></div>
        <div className={styles.width} ref={boardRef}>
          <jobsCtx.Provider>
            <Board className={styles.board} jobs={jobs} tags={tags} />
          </jobsCtx.Provider>
          <div className={styles.see_more}>
            <ul className={styles.page_list}>
              {[
                Array.from(Array(pageCount), (e, i) => {
                  return (
                    <li
                      key={i}
                      className={i === page ? styles.page_active : ''}
                      onClick={handlePage}
                    >
                      {i + 1}
                    </li>
                  )
                })
              ]}
            </ul>
          </div>
        </div>
        <div className={styles.spacing}></div>
        <div ref={emailFormRef} className={styles.mail}>
          <EmailForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
