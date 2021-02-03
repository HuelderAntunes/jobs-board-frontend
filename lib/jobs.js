export async function getJobsData (page) {
  const targetUrl = `${process.env.API_URL}/jobs?p=${page}`
  const response = await fetch(targetUrl)
  return response.json()
}

export async function getAllJobsData () {
  const targetUrl = `${process.env.API_URL}/jobs`
  const response = await fetch(targetUrl)
  return response.json()
}

export async function getJobData (id) {
  const targetUrl = `${process.env.API_URL}/jobs/${id}`
  const response = await fetch(targetUrl)
  return response.json()
}
