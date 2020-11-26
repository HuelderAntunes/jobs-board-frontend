export async function getTagsData () {
  const targetUrl = `${process.env.API_URL}/tags`
  const response = await fetch(targetUrl)
  return response.json()
}
