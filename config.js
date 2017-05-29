
module.exports = {
  app: {
    id: '3',
    version: '1.0.0',
  },
  SESSION_TOKEN_KEY: 'sessionToken',
  server: {
    prod: {
      bundleUrl: '', // production javascript's bundle config
      apiUrl: '', // production api config
    },
    qa: {
      bundleUrl: '',  // qa javascript's bundle config
      apiUrl: '', // qa api config
    },
    dev: {
      bundleUrl: `http://${process.env.CURRENT_IP}:8080`, // dev javascript's bundle config
      apiUrl: `http://${process.env.CURRENT_IP}:3000`, // dev api config
    },
    local: {
      bundleUrl: `http://${process.env.CURRENT_IP}:8080`, // local javascript's bundle config
      apiUrl: `http://${process.env.CURRENT_IP}:3000`, // local api config
    },
  },
};
