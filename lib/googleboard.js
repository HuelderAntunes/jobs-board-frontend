export function toGoogleJobBoardJson (job) {
  let data = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.role,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Google',
      value: '1234567'
    },
    datePosted: job.createdAt,
    validThrough: job.expirationDate,
    employmentType: 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: job.companyWebsite,
      logo: job.companyAvatar
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
