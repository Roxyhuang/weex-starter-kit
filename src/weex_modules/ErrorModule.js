import baseUtil from '../utils/BaseUtil';

export default class ErrorModule {
  static init() {
    if (weex.config.env.platform === 'Web') {
      weex.registerModule('error', {
        /* eslint-disable no-unused-vars */
        requestError(params, callback) {
          switch (params.code) {
            case -1000:
              baseUtil.openUrl('login');
              break;
            case -1008:
              baseUtil.openUrl('bind-email');
              break;
            case -1009:
              baseUtil.openUrl('bind-mobile');
              break;
            default:
              break;
          }
        },
      });
    }
  }
}
