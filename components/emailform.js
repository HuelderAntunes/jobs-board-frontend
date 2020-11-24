import styles from './emailform.module.css'

export default function EmailForm () {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Games são incríveis, assim como as pessoas que os criam.
      </h3>
      <h5 className={styles.subtitle}>
        Participe de projetos, crie histórias e compartilhe com mundo
        experiências inovadoras e criativas. .
      </h5>
      <div className={styles.input_wrapper}>
        <input
          className={styles.mail_input}
          type='text'
          placeholder='Digite seu endereço de e-mail'
        />
        <a className={styles.black_button} href='#'>
          Quero todas as vagas!
        </a>
      </div>
      <span className={styles.alert}>
        *Inscreva-se para receber um resumo semanal de novas oportunidades na
        área de games.
      </span>
    </div>
  )
}
