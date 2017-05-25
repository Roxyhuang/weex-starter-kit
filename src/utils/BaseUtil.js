import config from '../../config';
import Exception from './Exception';
import errorHandler from './ErrorHandler';
import AppAuthToken from './AppAuthToken';

const navigator = weex.requireModule('navigator');
const storage = weex.requireModule('storage');
const webview = weex.requireModule('webview');

class BaseUtil {

  /* eslint-disable no-console */
  constructor(platform) {
    this.initialize(platform);
    console.log(process.env.NODE_ENV);
    this.bundleUrl = config.server[process.env.NODE_ENV].bundleUrl;
  }

  initialize(platform) {
    this.platform = platform;
  }

  openUrl(url, params = null) {
    const json = params ? JSON.stringify(params) : null;
    if (this.platform === 'Web') {
      storage.setItem(`urlParams:${url}`, json, () => {
        location.href = `${url}.html`;
      });
    } else {
      storage.setItem(`urlParams:${url}`, json, () => {
        navigator.push({
          url: `${this.bundleUrl}/dist/${url}.weex.js`,
          animated: 'true',
        });
      });
    }
  }

  /* eslint-disable class-methods-use-this */
  getUrlParams(url) {
    return new Promise((resolve) => {
      storage.getItem(`urlParams:${url}`, (e) => {
        resolve(e.data === 'undefined' ? null : JSON.parse(e.data));
      });
    });
  }

  back(canGoBack, webRef) {
    if (this.platform === 'Web') {
      history.go(-1);
    } else if (canGoBack) {
      webview.goBack(webRef);
    } else {
      navigator.pop({ animated: 'true' }, () => {
      });
    }
  }

  checkLogin() {
    return AppAuthToken.getToken().then((token) => {
      if (!token) {
        errorHandler.handle(new Exception(-1000, '请先登录'));
      }
    });
  }

  msgJump(url) {
    if (!url) {
      return false;
    }

    let bundleUrl = '';
    const params = {};
    const markIndex = url.indexOf('?');

    if (markIndex !== -1) {
      bundleUrl = url.substr(0, markIndex);
      url.substr(markIndex + 1).split('&').forEach((item) => {
        const items = item.split('=');
        params[items[0]] = items[1];
      });
    } else {
      bundleUrl = url;
    }
    this.openUrl(bundleUrl, params);
    return true;
  }
}

export default new BaseUtil();
