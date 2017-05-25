import ErrorModule from '../weex_modules/ErrorModule';

ErrorModule.init();
const modal = weex.requireModule('modal');
const error = weex.requireModule('error');

/**
-1  普通异常，详见 status_msg 字段描述
-1000 用户登录凭证不合法，请先登录或重新登录
-1001 请勿重复登录、注册（通常发生在带着有效 VUSER 访问 /auth/login 接口时返回）
-1008 请前往『绑定邮箱』页面
-1009 请前往『绑定手机』页面
-1020 第三方账号登陆后，请前往绑定官方账号（详见文档）
-9990 APPID 不合法
-9991 APPID 对应的应用信息不存在，请联系管理员
-9992 APPVER 不合法
-9999 应用传输数据解密失败，请联系管理员
-999  未知的其他异常
-404  指定目标不存在或已删除
-2001 您还未绑定银行卡，请先去绑定银行卡
 */

class ErrorHandler {

  /* eslint-disable class-methods-use-this */
  /* eslint-disable no-param-reassign */
  handle(exception, handler) {
    if (exception && exception.handled === false) {
      exception.handled = true;
      switch (exception.code) {
        case -1000:
        case -1008:
        case -1009:
          error.requestError({
            code: exception.code,
            message: exception.message,
          }, (resp) => {
            if (resp.status_no !== 0) {
              if (handler === undefined) {
                ErrorHandler.showError(exception.code, exception.message);
              } else {
                handler(exception);
              }
            }
          });
          break;
        default:
          if (handler === undefined) {
            ErrorHandler.showError(exception.code, exception.message);
          } else {
            handler(exception);
          }
          break;
      }
      return true;
    }
    return false;
  }

  static showError(errorCode, errorMessage) {
    modal.toast({
      message: errorCode === -1 ? errorMessage : `${errorCode}: ${errorMessage}`,
      duration: 1.5,
    });
  }
}

export default new ErrorHandler();
