import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import SEO from '../../components/seo'
import Navbar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import EmailForm from '../../components/emailform'
import Divisor from '../../components/divisor'
import ReactMarkdown from 'react-markdown'
import { getJobData, getJobsData } from '../../lib/jobs'

const JobPage = ({ jobData }) => {
  const job = jobData.success

  return (
    <div className={styles.container}>
      <SEO />
      <Navbar title='GAMES JOBS BRASIL' />
      <main className={styles.main}>
        <div className={styles.jobTitle}>
          <img src={job.companyAvatar} alt='' srcset='' />
          <h1>{job.role}</h1>
          <h2>{job.company}</h2>
          <a href={job.applicationUrl}>Se candidatar para Vaga</a>
        </div>
        <div className={styles.jobInfo}>
          <h6>POSTADO EM {new Date(job.createdAt).toLocaleDateString()}</h6>
          {job.tags.map(tag => {
            return <span>{tag.name}</span>
          })}
        </div>

        <div className={styles.jobDescription}>
          <ReactMarkdown>{job.description}</ReactMarkdown>
        </div>

        <Divisor />
        <div className={styles.spacing}></div>
        <div className={styles.mail}>
          <EmailForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const jobData = await getJobData(params.id)

  return {
    props: { jobData }
  }
}

export async function getStaticPaths () {
  const jobsData = await getJobsData()
  const paths = []

  jobsData.success.jobs.map(job =>
    paths.push({ params: { id: job.id.toString() } })
  )

  return {
    paths,
    fallback: true
  }
}

export default JobPage
