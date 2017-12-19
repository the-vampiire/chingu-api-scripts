const { createApolloFetch } = require('apollo-fetch');
const queries = require('./queries');
const mutations = require('./mutations');

const uri = process.env.CDN_API_URI || 'https://chingu-api-dev.herokuapp.com/graphql';
const chinguAPI = createApolloFetch({ uri });

chinguAPI.use(({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {};
  } 
  
  options.headers.authorization = process.env.AUTH_HEADER || 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdGF0dXMiOiJwZW5kaW5nX2FwcHJvdmFsIiwiaWQiOjEsImlhdCI6MTUxMzE1NTM4MX0.boPl6jub4Y7rvBi8w--AUV1kGkesU8sV1C1geOcFiNQ';
  next();
});

module.exports = {
  chinguAPI,
  queries,
  mutations,
};

