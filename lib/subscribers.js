export async function addNewSubscriber ({ email }) {
  const targetUrl = `${process.env.apiUrl}/subscribers`

  const response = await fetch(targetUrl, {
    method: 'post',
    body: JSON.stringify({ email }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).catch(e => {
    console.log(e)
  })

  return response.json()
}
