import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SEO from '../../components/seo'
import Navbar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import EmailForm from '../../components/emailform'
import Divisor from '../../components/divisor'
import ReactMarkdown from 'react-markdown'
import { getJobData, getJobsData } from '../../lib/jobs'
import { toGoogleJobBoardJson } from '../../lib/googleboard'
import Image from 'next/image'

const JobPage = ({ job }) => {
  if (!job) return <></>

  const keywords = [
    'brasil',
    'vagas',
    'jobs',
    'games',
    'jogos',
    'empregos',
    'unity',
    'unreal',
    'godot',
    'code',
    'arte',
    '3d'
  ]

  job.tags.map(e => keywords.push(e.name))

  return (
    <div className={styles.container}>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: toGoogleJobBoardJson(job) }}
        ></script>
      </Head>
      <SEO
        title={`Vaga de ${job.role} na ${job.company} - GJB`}
        description={`A ${job.company} está com uma vaga de emprego para ${job.role}. A Games Jobs Brasil é um board de vagas de emprego na área de jogos. Encontre mais vagas para ${job.role}.`}
        keywords={`${keywords.join(',')}`}
      />
      <Navbar title='GAMES JOBS BRASIL' />
      <main className={styles.main}>
        <div className={styles.jobTitle}>
          <div className={styles.jobImage}>
            <Image
              width='80'
              height='80'
              src={job.companyAvatar}
              alt={`Vaga de ${job.role} na ${job.company}`}
            />
          </div>
          <h1>{job.role}</h1>
          <h2>{job.company}</h2>
          <a href={job.applicationUrl}>Me Candidatar</a>
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
  let jobData = await getJobData(params.slug)

  // if (!jobData['success']) {
  //   jobData = {'success': { tags: [] }
  // }

  return {
    props: { job: jobData ? jobData.success : null },
    revalidate: 60
  }
}

export async function getStaticPaths () {
  const jobsData = await getJobsData()
  const paths = []

  jobsData.success.jobs.map(job =>
    paths.push({ params: { slug: job.slug.toString() } })
  )

  return {
    paths,
    fallback: true
  }
}

export default JobPage
