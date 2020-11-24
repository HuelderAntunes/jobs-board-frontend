import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
import Hero from '../components/hero.js'
import Board from '../components/board'
import Divisor from '../components/divisor'
import EmailForm from '../components/emailform'
import Footer from '../components/footer'
import SEO from '../components/seo'
import { getJobsData } from '../lib/jobs'
import { getTagsData } from '../lib/tags'

export default function Home ({ jobsData, tagsData }) {
  const jobs = jobsData.success.jobs
  const tags = tagsData.success

  return (
    <div className={styles.container}>
      <SEO />
      <Navbar title='GAMES JOBS BRASIL' />
      <main className={styles.main}>
        <Hero
          title='A central para encontrar os melhores empregos na área de games.'
          subtitle='ENCONTRE VAGAS. POSTE VAGAS. CRIE JOGOS.'
          image='/hero1.svg'
          button1='Postar uma vaga por R$49'
          button2='Me avise sobre todas as vagas!'
        />
        <Divisor />
        <Board className={styles.board} jobs={jobs} tags={tags} />
        <div className={styles.spacing}></div>
        <div className={styles.mail}>
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
    props: { jobsData, tagsData }
  }
}
