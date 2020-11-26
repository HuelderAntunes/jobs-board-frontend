import { useState } from 'react'
import styles from './emailform.module.css'
import { addNewSubscriber } from '../lib/subscribers'

export default function EmailForm () {
  const [email, setEmail] = useState('')
  const [sended, setSended] = useState(false)
  const [canSend, setCanSend] = useState(false)

  const handleEmailInput = e => {
    setEmail(e.target.value)
    if (e.target.value.includes('@') && e.target.value.includes('.')) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  }

  const handleSubscriber = e => {
    addNewSubscriber({ email })
    setSended(true)
    setEmail('')
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Games são incríveis, assim como as pessoas que os criam.
      </h3>
      <h5 className={styles.subtitle}>
        Participe de projetos, crie histórias e compartilhe com mundo
        experiências inovadoras e criativas.
      </h5>
      <div className={styles.input_wrapper}>
        <input
          onChange={handleEmailInput}
          value={email}
          className={styles.mail_input}
          type='text'
          placeholder='Digite seu endereço de e-mail'
        />
        <button
          className={
            canSend && !sended
              ? styles.black_button
              : styles.deactivate_black_button
          }
          onClick={handleSubscriber}
        >
          {sended ? 'Fique de olho no seu e-mail!' : 'Quero todas as vagas!'}
        </button>
      </div>
      <span className={styles.alert}>
        *Inscreva-se para receber um resumo semanal de novas oportunidades na
        área de games.
      </span>
    </div>
  )
}
