export async function getTagsData () {
  const targetUrl = `${process.env.apiUrl}/tags`
  const response = await fetch(targetUrl)
  return response.json()
}
