export async function getJobsData () {
  const targetUrl = `${process.env.API_URL}/jobs`
  const response = await fetch(targetUrl)
  return response.json()
}

export async function getJobData (id) {
  const targetUrl = `${process.env.API_URL}/jobs/${id}`
  const response = await fetch(targetUrl)
  return response.json()
}
