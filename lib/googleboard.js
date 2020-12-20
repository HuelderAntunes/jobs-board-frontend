export function toGoogleJobBoardJson (job) {
  let data = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.role,
    description: `A Games Jobs Brasil lista as melhores vagas de emprego na área de games no Brasil. Se deseja saber mais sobre a vaga de ${job.role} na ${job.company}, clique no botão "Acesse em Games Jobs Brasil" acima.<br/><br/>
    ${job.description}
    `,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Google',
      value: '1234567'
    },
    datePosted: job.createdAt,
    validThrough: job.expirationDate,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: job.companyWebsite,
      logo: 'https://gamesjobs.com.br/avatar.jpg'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        addressCountry: 'BR'
      }
    }
  }

  return JSON.stringify(data)
}
