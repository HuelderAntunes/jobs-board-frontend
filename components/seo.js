import Head from 'next/head'

export default function SEO ({title, description, keywords, url}) {
  return (
    <Head>
      <title>{title}</title>

      <meta http-equiv=”content-language” content=”pt-br” />

      <meta http-equiv=”content-type” content=”text/html; charset=UTF-8″ />

      <meta name=”viewport” content=”width=device-width, initial-scale=1.0″ />

      <meta name='title' content='Meta Tags — Preview, Edit and Generate' />

      <meta
        name='description'
        content={description}
      />

      <meta name="keywords" content={keywords} />

      <meta property=”og:locale” content=”pt_BR” />
      <meta property="og:type" content="website"/>
      <meta property=”og:title” content={title}>
      <meta property=”og:description” content={description} />
      <meta property=”og:url” content={url} />
      <meta property=”og:site_name” content=”Games Jobs Brasil” />
      <meta property=”og:image” content=”www.gamesjobs.com.br/hero1.svg” />



      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
        rel='stylesheet'
      />
    </Head>
  )
}
