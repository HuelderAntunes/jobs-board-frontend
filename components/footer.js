import styles from './footer.module.css'
import { IconContext } from 'react-icons'
import { FaDiscord, FaTwitterSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
export default function Footer () {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.message}>
          <h2>GAMES JOBS BRASIL</h2>
          <p>
            Somos sortudos de possuir vagas incríveis e parcerias com os maiores
            estúdios brasileiros.
          </p>
          <p>
            Nunca estivemos tão contentes com crescimento do mercado brasileiro
            de games e nosso board é uma forma de deixar o acesso centralizado
            as melhores vagas na industria brasileira.
          </p>
          <p>Todos deveriam se divertir jogando e criando games! </p>
          <p>
            Nossa esperança é que possamos ajudar os estudios a se conectarem
            com os melhores talentos no Brasil, sem a necessidade recorrer a
            terceirização internacional.
          </p>
        </div>
        <div className={styles.linktree}>
          <div>
            <span>NAVEGAÇÃO</span>
            <ul>
              <li>
                <a href='#'>Postar uma Vaga</a>
              </li>
              <li>
                <a href='#'>Termos de Serviço</a>
              </li>
              <li>
                <a href='#'>Política de Privacidade</a>
              </li>
              <li>
                <a href='#'>RSS</a>
              </li>
            </ul>
          </div>
          <div>
            <IconContext.Provider
              value={{ size: '20px', style: { verticalAlign: 'middle' } }}
            >
              <span>CONTATE-NOS</span>
              <ul className={styles.iconlist}>
                <li>
                  <a href='#'>
                    <GrMail />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          Made by <span>@huelderantunes</span> e <span>@leeoanim</span>.
        </div>
        <div>© {new Date().getFullYear()} Fluxel Solutions LTDA</div>
      </div>
    </footer>
  )
}
