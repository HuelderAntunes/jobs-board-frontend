import redirect from 'nextjs-redirect'
import SEO from '../components/seo'

export default function Discord () {
  const Redirect = redirect('https://discord.gg/jvrkvFBGEM')
  return (
    <Redirect>
      <div>
        <SEO
          title='Grupo no Discord - Games Jobs Brasil'
          description='Games Jobs Brasil um quadro de empregos dedicado a conectar artistas talentosos, designers, programadores, escritores e muito mais com vagas de emprego na área de jogos.'
          keywords='discord, empregos,vagas,jogos,brasil,jobs,games,unity,unreal,godot,code,arte,3d'
        />
        Redirecionando para o Discord...
      </div>
    </Redirect>
  )
}
