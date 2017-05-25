
module.exports = {
  app: {
    id: '3',
    version: '1.0.0',
  },
  SESSION_TOKEN_KEY: 'sessionToken',
  server: {
    prod: {
      bundleUrl: '',
      apiUrl: '',
    },
    qa: {
      bundleUrl: '',
      apiUrl: '',
    },
    dev: {
      bundleUrl: '',
      apiUrl: '',
    },
    local: {
      bundleUrl: `http://${process.env.CURRENT_IP}:8080`, // webpack动态获取
      apiUrl: `http://${process.env.CURRENT_IP}:3000`,
    },
  },
};
