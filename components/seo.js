import Head from 'next/head'

export default function SEO ({ title, description, keywords }) {
  return (
    <Head>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-W4T7B1N0XJ'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W4T7B1N0XJ');`
        }}
      ></script>
      <script data-ad-client="ca-pub-0485021733329227" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <title>{title}</title>

      <meta httpEquiv='content-language' content='pt-br' />

      <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta name='title' content='Meta Tags — Preview, Edit and Generate' />

      <meta name='description' content={description} />

      <meta name='keywords' content={keywords} />

      <meta property='og:locale' content='pt_BR' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='Games Jobs Brasil' />
      <meta property='og:image' content='www.gamesjobs.com.br/hero1.svg' />

      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@500;900&display=swap'
        rel='stylesheet'
      />
    </Head>
  )
}
