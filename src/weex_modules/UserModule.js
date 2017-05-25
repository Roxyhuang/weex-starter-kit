const storage = weex.requireModule('storage');

export default class UserModule {
  static init() {
    if (weex.config.env.platform === 'Web') {
      const TOKEN_KEY = 'userToken';
      weex.registerModule('user', {
        setUserToken(userToken, callback) {
          storage.setItem(TOKEN_KEY, userToken, (e) => {
            if (e.result === 'success') {
              callback({
                status_no: 0,
                data: null,
              });
            } else {
              callback({
                status_no: -1,
                data: e.data,
              });
            }
          });
        },
        getUserToken(callback) {
          storage.getItem(TOKEN_KEY, (e) => {
            if (e.data === 'undefined') {
              callback({
                status_no: -1,
                data: {
                  vuser: null,
                },
              });
            } else {
              callback({
                status_no: 0,
                data: {
                  vuser: e.data,
                },
              });
            }
          });
        },
        removeUserToken(callback) {
          storage.removeItem(TOKEN_KEY, (e) => {
            if (e.result === 'success') {
              callback({
                status_no: 0,
                data: null,
              });
            } else {
              callback({
                status_no: -1,
                data: null,
              });
            }
          });
        },
      });
    }
  }
}
