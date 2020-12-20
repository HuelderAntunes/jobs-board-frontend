import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
import Hero from '../components/hero.js'
import Board from '../components/board'
import Divisor from '../components/divisor'
import EmailForm from '../components/emailform'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Announcement from '../components/annoucement'
import { useRef } from 'react'
import { getJobsData } from '../lib/jobs'
import { getTagsData } from '../lib/tags'

export default function Home ({ jobsData, tagsData }) {
  const jobs = jobsData.success.jobs
  const tags = tagsData.success
  const emailFormRef = useRef()
  const boardRef = useRef()

  return (
    <div className={styles.container}>
      <SEO
        title='Games Jobs Brasil - Encontre Vagas de Emprego em Jogos'
        description='Games Jobs Brasil um quadro de empregos dedicado a conectar artistas talentosos, designers, programadores, escritores e muito mais com vagas de emprego na área de jogos.'
        keywords='empregos,vagas,jogos,brasil,jobs,games,unity,unreal,godot,code,arte,3d'
      />
      <Announcement>
        <a target='_blank' href={`https://discord.gg/jvrkvFBGEM`}>
          Se junte a nossa <span>comunidade no Discord</span>, e fique por
          dentro de todas as oportunidades!
        </a>
      </Announcement>
      <Navbar title='GAMES JOBS BRASIL' boardRef={boardRef} />
      <main className={styles.main}>
        <Hero
          title='A central para encontrar os melhores empregos na área de games.'
          subtitle='ENCONTRE VAGAS. POSTE VAGAS. CRIE JOGOS.'
          image='/hero1.svg'
          button1='Postar uma vaga'
          button2='Me avise sobre todas as vagas!'
          button2Ref={emailFormRef}
        />
        <Divisor />
        <div className={styles.width} ref={boardRef}>
          <Board className={styles.board} jobs={jobs} tags={tags} />
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

export async function getStaticProps () {
  const jobsData = await getJobsData()
  const tagsData = await getTagsData()

  return {
    props: { jobsData, tagsData },
    revalidate: 10
  }
}
