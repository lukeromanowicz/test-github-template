module.exports = {
  integrations: {
    ct: {
      location: '@vue-storefront/commercetools-api/server',
      extensions: existing => existing.concat('@vsf-enterprise/commercetools/extensions'),
      configuration: {
        api: {
          uri: process.env.CT_API_URL,
          authHost: process.env.CT_AUTH_URL,
          projectKey: process.env.CT_PROJECT_KEY,
          clientId: process.env.CT_CLIENT_ID,
          clientSecret: process.env.CT_CLIENT_SECRET,
          scopes: [
            `manage_project:${process.env.CT_PROJECT_KEY}`
          ]
        },
        currency: 'USD',
        country: 'US'
      },
      customQueries: {
        "LastModifiedProductsQuery": ({ query, variables, metadata }) => {
          variables.where = `lastModifiedAt <= "${metadata.date}"`;
          variables.limit = metadata.limit;
          variables.sort = `lastModifiedAt ${metadata.order}`;
          return { query, variables };
        }
      }
    },
    ctf: {
      location: '@vsf-enterprise/ct-faceting/server',
      configuration: {
        api: {
          authHost: 'https://auth.sphere.io',
          projectKey: process.env.CT_PROJECT_KEY,
          clientId: process.env.CT_CLIENT_ID,
          clientSecret: process.env.CT_CLIENT_SECRET,
          scopes: [
            `manage_project:${process.env.CT_PROJECT_KEY}`
          ]
        },
        faceting: {
          host: 'https://api.commercetools.com'
        },
      }
    },
    'sb': {
      location: '@vue-storefront/storyblok/server',
      configuration: {
        ...JSON.parse('{}')
      }
    },
  }
};
