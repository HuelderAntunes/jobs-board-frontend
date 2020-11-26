export async function getJobsData () {
  const targetUrl = `${process.env.apiUrl}/jobs`
  const response = await fetch(targetUrl)
  return response.json()
}

export async function getJobData (id) {
  const targetUrl = `${process.env.apiUrl}/jobs/${id}`
  const response = await fetch(targetUrl)
  return response.json()
}
