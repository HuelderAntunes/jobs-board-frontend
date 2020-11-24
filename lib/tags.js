export async function getTagsData () {
  const response = await fetch('http://127.0.0.1:5000/tags')
  return response.json()
}
