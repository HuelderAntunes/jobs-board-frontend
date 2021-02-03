import { getAllJobsData } from '../lib/jobs'

export default function Sitemap ({ jobsData }) {
  const jobs = jobsData.success.jobs
  return (
    <>
      <h1>Sitemap</h1>
      <ul>
        {jobs.map(job => {
          return (
            <li key={job.slug}>
              <a href={`/job/${job.slug}`}>{`${job.company} - ${job.role}`}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export async function getStaticProps () {
  const jobsData = await getAllJobsData()

  return {
    props: {
      jobsData
    },
    revalidate: 300
  }
}
