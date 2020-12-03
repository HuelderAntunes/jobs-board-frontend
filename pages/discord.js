import redirect from 'nextjs-redirect'
import SEO from '../components/seo'

export default function Discord () {
  const Redirect = redirect('https://discord.gg/jvrkvFBGEM')
  return (
    <Redirect>
      <div>Redirecionando para o Discord...</div>
    </Redirect>
  )
}
