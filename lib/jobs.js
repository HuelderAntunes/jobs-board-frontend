export async function getJobsData () {
  const response = await fetch('http://127.0.0.1:5000/jobs')
  return response.json()
}

export async function getJobData (id) {
  const response = await fetch(`http://127.0.0.1:5000/jobs/${id}`)
  return response.json()
}
