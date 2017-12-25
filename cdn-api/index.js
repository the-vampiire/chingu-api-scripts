const { createApolloFetch } = require('apollo-fetch');
const queries = require('./queries');
const mutations = require('./mutations');

const uri = process.env.CDN_API_URI || 'https://chingu-api-dev.herokuapp.com/graphql';;
const chinguAPI = createApolloFetch({ uri });

chinguAPI.use(({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {};
  }
  
  options.headers.authorization = process.env.AUTH_HEADER || '';
  next();
});

module.exports = {
  chinguAPI,
  queries,
  mutations,
};

