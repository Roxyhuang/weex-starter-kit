import UserModule from '../weex_modules/UserModule';
import Exception from '../utils/Exception';

UserModule.init();
const user = weex.requireModule('user');

export default class AppAuthToken {

  static setToken(token) {
    return new Promise((resolve, reject) => {
      user.setUserToken(token, (resp) => {
        if (resp.status_no === 0) {
          resolve();
        } else {
          reject(new Exception(resp.status_no, resp.status_msg, resp.data));
        }
      });
    });
  }

  static getToken() {
    return new Promise((resolve) => {
      user.getUserToken((resp) => {
        if (resp.status_no === 0) {
          resolve(resp.data.vuser);
        } else {
          resolve(null);
        }
      });
    });
  }

  static removeToken() {
    return new Promise((resolve, reject) => {
      user.removeUserToken(token, (resp) => {
        if (resp.status_no === 0) {
          resolve();
        } else {
          reject(new Exception(resp.status_no, resp.status_msg, resp.data));
        }
      });
    });
  }
}
