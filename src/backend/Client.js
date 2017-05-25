import config from '../../config';
import Exception from '../utils/Exception';
import AppAuthToken from '../utils/AppAuthToken';
import productClient from './clients/productClient';


const stream = weex.requireModule('stream');

class Client {

  /* eslint-disable no-console */
  /* eslint-disable no-param-reassign */
  /* eslint-disable class-methods-use-this */
  _fetch(opts) {
    opts = Object.assign(
      {
        method: 'POST',
        url: null,
        headers: {},
        body: null,
      },
      opts,
    );

    return AppAuthToken.getToken().then((userToken) => {
      if (opts.method === 'POST' || opts.method === 'PUT') {
        opts.headers.Accept = 'application/json';
        opts.headers['Content-Type'] = 'application/json';
        opts.headers.APPID = config.app.id;
        opts.headers.APPVER = config.app.version;
        opts.headers.VUSER = userToken;
        if (userToken === null) {
          opts.headers.VUSER = '';
        }
      }
      console.log(process.env.NODE_ENV);
      const API_BASE_URL = config.server[process.env.NODE_ENV].apiUrl;
      return new Promise((resolve, reject) => {
        stream.fetch(
          {
            url: API_BASE_URL + opts.url,
            method: opts.method,
            headers: opts.headers,
            body: opts.body ? JSON.stringify(opts.body) : '',
            type: 'json',
          },
          (response) => {
            // 如果状态码在 200~299 之间
            if (response.ok) {
              const resp = response.data;
              if (resp.status_no && resp.status_no !== 0) {
                reject(new Exception(resp.status_no, resp.status_msg, resp.data));
              } else {
                resolve(resp);
              }
            } else if (response.status === -1) {
              reject(new Exception(-1, '网络请求参数不太对哟~'));
            } else {
              reject(new Exception(response.status, response.statusText));
            }
          },
        );
      });
    });
  }
}

Object.assign(
  Client.prototype,
  productClient,
);

export default new Client();
