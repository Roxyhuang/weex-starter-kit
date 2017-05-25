console.log('START WEEX VUE RENDER: 0.10.3, Build 2017-03-14 14:59.');


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n",undefined);

__$styleInject(".weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-a {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n  text-decoration: none;\n}\n\nbody > .weex-div {\n  min-height: 100%;\n}\n\n.weex-div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n}\n\n.weex-input, .weex-textarea {\n  position: relative;\n  font-size: 0.426667rem;\n}\n.weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n\n.weex-image, .weex-img {\n  display: block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.amfe-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\nbody > .weex-list,\nbody > .weex-scroller {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper {\n  display: block;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper {\n  overflow-y: scroll !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner {\n  -webkit-overflow-scrolling: touch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.weex-scroller-inner::-webkit-scrollbar {\n    width: 0;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n          \n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.iossticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.iossticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n\n.weex-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  position: relative;\n  width: 1.0rem;\n  height: 1.0rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1.0rem, 0, 0);\n          transform: translate3d(1.0rem, 0, 0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n\n.weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: visible;\n}\n\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",undefined);

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$1            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process            = global$4.process;
var $Promise           = global$4[PROMISE];
var process            = global$4.process;
var isNode             = classof$1(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var Event$1 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event, meta);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var Geolocation = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$1);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var PageInfo = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var Storage = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$1 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$3 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$1;
var objectAssign = index$3;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body || null);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var Stream = {
  init: function (Weex) {
    utils = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$4);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var Clipboard = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$5);
  }
};

/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Mix specified properties into target object.
 */
function extendKeys (to, from, keys) {
  if (!from) { return to }
  (keys || []).forEach(function (key) {
    to[key] = from[key];
  });
  return to
}

/**
 * Extract specified properties from src to target object.
 */
function extractKeys (to, from, keys) {
  if (!from) { return to }
  (keys || []).forEach(function (key) {
    to[key] = from[key];
    delete from[key];
  });
  return to
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress (func, wait) {
  var timerId;
  function later () {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle (func, wait, callLastTime, tag) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25);  // plus half wait time.
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  }
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent (context, type, props) {
  var event = new Event(type, { bubbles: false });
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent (context, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  // TODO: event.target is readonly
  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent (dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        context.value = context.$el.value;
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

function getParentScroller$$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller$$1(vnode.$parent)
}

function hasIntersection$$1 (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

/**
 * [isElementVisible description]
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible$$1 (el, container) {
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = (container === document.body)
    ? bodyRect : container
    ? container.getBoundingClientRect() : bodyRect;
  return hasIntersection$$1(
    el.getBoundingClientRect(),
    ctRect)
}

function isComponentVisible$$1 (component) {
  if (component.$el) {
    var scroller = getParentScroller$$1(component);
    if (scroller && scroller.$el) {
      return hasIntersection$$1(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      )
    }
    else {
      return isElementVisible$$1(component.$el)
    }
  }
  return false
}

// TODO: improve the efficiency
function watchAppear$$1 (context) {
  if (!context) { return null }

  context.$nextTick(function () {
    if (context.$options && context.$options._parentListeners) {
      var on = context.$options._parentListeners;
      if (on.appear || on.disappear) {
        var scroller = getParentScroller$$1(context);
        var isWindow = false;
        var container = window;
        if (scroller && scroller.$el) {
          container = scroller.$el;
        }
        else {
          isWindow = true;
        }
        var lastScrollTop = container.scrollTop || window.pageYOffset;

        context._visible = isElementVisible$$1(context.$el, isWindow ? document.body : container);
        if (context._visible && on.appear) {
          if (on.appear.fn) {
            on.appear = on.appear.fn;
          }
          on.appear(createEvent(context.$el, 'appear', { direction: 'down' }));
        }
        var handler = throttle(function (event) {
          var visible = isElementVisible$$1(context.$el, isWindow ? document.body : container);
          var listener = null;
          var type = null;
          if (visible !== context._visible) {
            context._visible = visible;
            if (visible) {
              listener = on.appear;
              type = 'appear';
            }
            else {
              listener = on.disappear;
              type = 'disappear';
            }
            if (listener.fn) {
              listener = listener.fn;
            }
            var scrollTop = container.scrollTop || window.pageYOffset;
            listener(createEvent(context.$el, type, {
              direction: scrollTop > lastScrollTop ? 'down' : 'up'
            }));
            lastScrollTop = scrollTop;
          }
        }, 10);

        container.addEventListener('scroll', handler, false);
      }
    }
  });
}

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

var ARRAY_STRING = '[object Array]';
function isArray (arr) {
  return toString$2.call(arr) === ARRAY_STRING
}

/**
 * @fileOverview: perf data recorder.
 */

// performance tracker for weex.
var perf = window._weex_perf = {
  earliestBeforeCreates: [],
  latestMounts: [],
  earliestBeforeUpdates: [],
  latestUpdates: [],
  latestRenderFinishes: [],
  // createTime: earliest beforeCreate -> latest mounted.
  createTime: [],
  // updateTime: earliest beforeUpdate -> latest updated.
  updateTime: [],
  // renderTime: earliest beforeCreate/beforeUpdate -> latest img loaded.
  renderTime: []
};

var IMG_REC_INDENT = 500;  // record loading events after 500ms towards last recording.

var earliestBeforeUpdateTime = 0;
var earliestBeforeCreateTime = 0;

if (!performance.now) {
  performance.now = function () { return new Date().getTime() };
}

/**
 * get first screen time.
 */
var debouncedTagImg = debounce(function () {
  var now = performance.now();
  perf.latestRenderFinishes.push(now);
  var start = Math.max(earliestBeforeCreateTime, earliestBeforeUpdateTime);
  perf.renderTime.push({
    start: start,
    end: now,
    duration: now - start
  });

  var len = perf.renderTime.length;
  perf[("screenTime" + len)] = now;
  {
    console.log(("screenTime[" + len + "]: " + now + " ms."));
  }
}, IMG_REC_INDENT);

function tagImg () {
  debouncedTagImg();
}

/**
 * recording the earliest 'beforeCreate' time.
 */
var depressedTagBeforeCreate = depress(function () {
  var now = performance.now();
  earliestBeforeCreateTime = now;
  perf.earliestBeforeCreates.push(now);
}, 25);

function tagBeforeCreate () {
  depressedTagBeforeCreate();
}

/**
 * recording the latest 'mounted' time.
 */
var debouncedTagMounted = debounce(function () {
  var now = performance.now();
  perf.latestMounts.push(now);
  perf.createTime.push({
    start: earliestBeforeCreateTime,
    end: now,
    duration: now - earliestBeforeCreateTime
  });

  if (!perf.firstAllMountedTime) {
    perf.firstAllMountedTime = now;
    {
      console.log(("first all mounted time: " + now + " ms."));
    }
  }
}, 25);

function tagMounted () {
  debouncedTagMounted();
}

/**
 * recording the earliest 'beforeUpdate' time.
 */
var depressedTagBeforeUpdate = depress(function () {
  var now = performance.now();
  earliestBeforeUpdateTime = now;
  perf.earliestBeforeUpdates.push(now);
}, 25);

function tagBeforeUpdate () {
  depressedTagBeforeUpdate();
}

/**
 * recording the latest 'updated' time.
 */
var debouncedTagUpdated = debounce(function () {
  var now = performance.now();
  perf.latestUpdates.push(now);
  perf.updateTime.push({
    start: earliestBeforeUpdateTime,
    end: now,
    duration: now - earliestBeforeUpdateTime
  });
}, 25);

function tagUpdated () {
  debouncedTagUpdated();
}

var SCREEN_REC_LIMIT = 3;  // just record the first 3 times for screen-render finishing.
var doRecord = true;

function preLoadImg (src, loadCallback, errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc (item, src, placeholderSrc) {
  if (!src) { return }
  function finallCb () {
    item.removeAttribute('img-src');
    if (doRecord) {
      if (window._weex_perf.renderTime.length < SCREEN_REC_LIMIT) {
        tagImg(); // tag lastest img onload time.
      }
      else {
        doRecord = false;
      }
    }
  }
  preLoadImg(src, function () {
    item.style.backgroundImage = "url(" + src + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    dispatchEvent(item, createEvent(item, 'load', { naturalWidth: naturalWidth, naturalHeight: naturalHeight }));
    finallCb();
  }, function () {
    dispatchEvent(item, createEvent(item, 'error'));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + placeholderSrc + ")";
      });
    }
    finallCb();
  });
}

function fireLazyload (el, ignoreVisibility) {
  if (isArray(el)) {
    return el.forEach(function (ct) { return fireLazyload(ct); })
  }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else if (isElementVisible$$1(img, el)) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else {
      // alreay out of view, no need to compare any more.
      // break
    }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 0;
function getThrottleLazyload (wait, el) {
  if ( wait === void 0 ) wait = 16;
  if ( el === void 0 ) el = document.body;

  var id = el.dataset.throttleId;
  if (!id) {
    id = _uid$2++;
    el.setAttribute('data-throttle-id', id);
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] ||
    (cache[id][wait] = throttle(
      fireLazyload.bind(this, el),
      parseFloat(wait),
      // true for callLastTime.
      // to trigger once more time after the last throttled function called with a little more delay.
      true)
    );
  return throttled
}

var valueMap = {
  alignItems: {
    stretch: 'stretch',
    'flex-start': 'start',
    'flex-end': 'end',
    center: 'center'
  },

  flexDirection: {
    row: 'horizontal',
    column: 'vertical'
  },

  justifyContent: {
    'flex-start': 'start',
    'flex-end': 'end',
    center: 'center',
    'space-between': 'justify',
    'space-around': 'justify' // Just same as `space-between`
  }
};

var filters = {
  flex: function flex (value) {
    return {
      '-webkit-box-flex': value,
      '-webkit-flex': value,
      'flex': value
    }
  },

  'align-items': function align_items (value) {
    return {
      '-webkit-box-align': valueMap.alignItems[value],
      '-webkit-align-items': value,
      'align-items': value
    }
  },

  'align-self': function align_self (value) {
    return {
      '-webkit-align-self': value,
      'align-self': value
    }
  },

  'flex-direction': function flex_direction (value) {
    return {
      '-webkit-box-orient': valueMap.flexDirection[value],
      '-webkit-flex-direction': value,
      'flex-direction': value
    }
  },

  'justify-content': function justify_content (value) {
    return {
      '-webkit-box-pack': valueMap.justifyContent[value],
      '-webkit-justify-content': value,
      'justify-content': value
    }
  }
};

function normalize (styles) {
  var res = {};
  for (var key in styles) {
    if (typeof filters[key] !== 'function') {
      res[key] = styles[key];
    }
    else {
      extend(res, filters[key](styles[key]));
    }
  }
  return res
}

/**
 * remove comments from a cssText.
 */
function trimComment (cssText) {
  return cssText.replace(/(?:\/\*)[^*]*\*\//g, '')
}

/**
 * add flex prefixes for compatibility conisderation.
 */
function normalizeStyles (style) {
  return normalize(style)
}

var support = null;

function supportSticky () {
  if (support !== null) {
    return support
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support = elementStyle.position.indexOf('sticky') !== -1;
  return support
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

function appendStyle (css, styleId, replace) {
  var style = document.getElementById(styleId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    styleId && (style.id = styleId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  var cssText = '';
  if (object) {
    for (var key in object) {
      cssText += (hyphenate(key)) + ":" + (object[key]) + ";";
    }
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	camelToKebab: camelToKebab,
	appendStyle: appendStyle,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	extend: extend,
	extendKeys: extendKeys,
	extractKeys: extractKeys,
	bind: bind,
	debounce: debounce,
	depress: depress,
	throttle: throttle,
	createEvent: createEvent,
	createCustomEvent: createCustomEvent,
	dispatchEvent: dispatchEvent,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller$$1,
	hasIntersection: hasIntersection$$1,
	isElementVisible: isElementVisible$$1,
	isComponentVisible: isComponentVisible$$1,
	watchAppear: watchAppear$$1,
	applySrc: applySrc,
	fireLazyload: fireLazyload,
	getThrottleLazyload: getThrottleLazyload,
	trimComment: trimComment,
	normalizeStyles: normalizeStyles,
	supportSticky: supportSticky,
	isPlainObject: isPlainObject,
	isArray: isArray
});

function transitionOnce (vnode, config, callback) {
  var duration = config.duration || 1000; // ms
  var timing = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText += toCSSText(config.styles || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    // TODO: Make sure the transition is only run once
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller$1(vnode.$parent)
}

function now () {
  var now = window.performance && window.performance.now
      ? window.performance.now.bind(window.performance) : Date.now;
  return now()
}

function scrollElement (dSuffix, position) {
  this[("scroll" + dSuffix)] = position;
}

/**
 * self invoked function that, given a context, steps through scrolling
 * @method step
 * @param {Object} context
 */
function step$1 (context) {
  // call method again on next available frame
  context.frame = window.requestAnimationFrame(step$1.bind(window, context));

  var time = now();
  var elapsed = (time - context.startTime) / 468;

  // avoid elapsed times higher than one
  elapsed = elapsed > 1 ? 1 : elapsed;

  // apply easing to elapsed time
  var value = ease(elapsed);

  var currentPosition = context.startPosition + (context.position - context.startPosition) * value;

  context.method.call(context.scrollable, context.dSuffix, currentPosition);

  // return when end points have been reached
  if (currentPosition === context.position) {
    window.cancelAnimationFrame(context.frame);
    return
  }
}

/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease (k) {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}

var dom = {
  /**
   * scrollToElement
   * @param  {String} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    var scroller = getParentScroller$1(vnode);
    var scrollDirection = scroller.scrollDirection || 'vertical';

    if (scroller && scroller.$el && vnode.$el) {
      // if it's a list, then the listVnode.scrollDirection is undefined. just
      // assum it is the default value 'vertical'.
      var dSuffix = ({
        horizontal: 'Left',
        vertical: 'Top'
      })[scrollDirection];
      var offset = vnode.$el[("offset" + dSuffix)];

      if (options) {
        offset += Number(options.offset) || 0;
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      step$1({
        scrollable: scroller.$el,
        startTime: now(),
        frame: null,
        startPosition: scroller.$el[("scroll" + dSuffix)],
        position: offset,
        method: scrollElement,
        dSuffix: dSuffix
      });
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    var info = { result: false };

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = vnode.$el.getBoundingClientRect();
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendStyle(styleText, 'dom-added-rules');
  }
};

var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$1 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/**
 * Webview module
 */

var webview = {
  goBack: function goBack (vnode) {
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

// modules from render/browesr
// custom modules
var modules = {
  animation: animation,
  dom: dom,
  modal: modal,
  navigator: navigator$1,
  webview: webview
};

function requireWeexModule (name) {
  if (modules[name]) {
    return modules[name]
  }
  return null
}

var modules$1 = {
  init: function init (weex) {
    weex.install(Event$1);
    weex.install(Geolocation);
    weex.install(PageInfo);
    weex.install(Storage);
    weex.install(Stream);
    weex.install(Clipboard);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp;}(window,window.lib||(window.lib={}));

/**
 * viewport priority:
 *
 * 1. meta weex-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var viewportWidth = 750;

var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) { viewportWidth = metaWidth; }

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont (doc, width) {
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = width / 10 + 'px';
  }
}

function setViewport (config) {
  if ( config === void 0 ) config = {};

  var doc = window.document;

  if (doc) {
    // set root font for rem.
    setRootFont(doc, viewportWidth);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     */
    var deRect = document.documentElement.getBoundingClientRect();
    var screenWidth = deRect.width;
    var screenHeight = deRect.height;
    var scale = screenWidth / viewportWidth;

    /**
     * if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     */
    var contents = [
      ("width=" + viewportWidth),
      // `initial-scale=${scale}`,
      // `maximum-scale=${scale}`,
      // `minimum-scale=${scale}`,
      "user-scalable=no"
    ];

    var meta = doc.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = doc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.querySelector('head').appendChild(meta);
    }
    meta.setAttribute('content', contents.join(','));

    var dpr = window.devicePixelRatio;

    return {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    }
  }
}

var scaleInfo = setViewport();

var lib$1 = window.lib;
var env = {
  platform: 'Web',
  // weexVersion: '0.10.0', // TODO: get version from package.json (not sure)
  weexVersion: '0.10.3',
  userAgent: navigator.userAgent,
  appName: lib$1.env.aliapp ? lib$1.env.aliapp.appname : navigator.appName,
  appVersion: lib$1.env.aliapp ? lib$1.env.aliapp.version.val : null,
  osName: lib$1.env.browser ? lib$1.env.browser.name : null,
  osVersion: lib$1.env.browser ? lib$1.env.browser.version.val : null,
  deviceModel: lib$1.env.os.name || null
};

/**
 * scaleInfo: scale, deviceWidth, deviceHeight.
 */
extend(env, scaleInfo);

// 750 by default currently
var scale = env.scale;

var units = {
  REM: 12 * scale,
  VW: env.deviceWidth / 100,
  VH: env.deviceHeight / 100,
  VMIN: Math.min(env.deviceWidth, env.deviceHeight) / 100,
  VMAX: Math.max(env.deviceWidth, env.deviceHeight) / 100,
  CM: 96 / 2.54 * scale,
  MM: 96 / 25.4 * scale,
  Q: 96 / 25.4 / 4 * scale,
  IN: 96 * scale,
  PT: 96 / 72 * scale,
  PC: 96 / 6 * scale,
  PX: scale
};

Object.freeze(units);
// Object.freeze(env)

window.CSS_UNIT = units;
window.WXEnvironment = env;

var weexModules = {};

var weex$3 = {
  __vue__: null,
  utils: utils$1,
  units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  requireModule: function requireModule (moduleName) {
    var module = requireWeexModule(moduleName);
    if (module) {
      return module
    }
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  registerComponent: function registerComponent (name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
};

// import 'lazyimg'
// register built-in modules.
weex$3.install(modules$1);

function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  weex$3.__vue__ = vue;
  console.log(("[Vue Render] install Vue " + (vue.version) + "."));
}

window.weex = weex$3;
window.global = window;

// import { validateStyles } from '../validator'

var _switch = {
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      staticClass: this.wrapperClass,
      on: {
        click: function (event) {
          this$1.$emit('click', event);
          this$1.toggle();
        }
      }
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  }
};

// import { validateStyles } from '../validator'

var a = {
  props: {
    href: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('html:a', {
      attrs: {
        'weex-type': 'a',
        href: this.href
      },
      on: this._createEventMap(),
      staticClass: 'weex-a',
      staticStyle: ms
    }, this.$slots.default)
  }
};

// import { validateStyles } from '../validator'

function trimTextNode (children) {
  if (Array.isArray(children)) {
    return children.filter(function (vnode) { return !!vnode.tag; })
  }
  return children
}

var div = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('html:div', {
      attrs: { 'weex-type': 'div' },
      on: this._createEventMap(),
      staticClass: 'weex-div',
      staticStyle: ms
    }, trimTextNode(this.$slots.default))
  }
};

/**
 * get resize (stetch|cover|contain) related styles.
 */
function getResizeStyle (context) {
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  return { 'background-size': bgSize }
}

function preProcessSrc (context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url
}

var image = {
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean]
  },

  updated: function updated () {
    this._fireLazyload();
  },

  mounted: function mounted () {
    this._fireLazyload();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    // let cssText = `background-image:url("${this.src}");`

    // // compatibility: http://caniuse.com/#search=background-size
    // cssText += (this.resize && this.resize !== 'stretch')
    //   ? `background-size: ${this.resize};`
    //   : `background-size: 100% 100%;`
    var ms = this._getComponentStyle(this.$vnode.data);

    return createElement('figure', {
      attrs: {
        'weex-type': 'image',
        'img-src': preProcessSrc(this, this.src, ms),
        'img-placeholder': preProcessSrc(this, this.placeholder, ms)
      },
      on: this._createEventMap(['load', 'error']),
      staticClass: 'weex-image',
      staticStyle: extend(ms, getResizeStyle(this))
    })
  }
};

// import { validateStyles } from '../validator'

var input = {
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number]
  },

  methods: {
    focus: function focus () {
      this.$el && this.$el.focus();
    },
    blur: function blur () {
      this.$el && this.$el.blur();
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('html:input', {
      attrs: {
        'weex-type': 'input',
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength
      },
      domProps: {
        value: this.value
      },
      on: extend(this._createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-input',
      staticStyle: ms
    })
  }
};

// import { validateStyles } from '../../validator'
var header = {
  data: function data () {
    return {
      sticky: false,
      initTop: 0,
      placeholder: null,
      supportSticky: supportSticky()
    }
  },

  mounted: function mounted () {
    this.initTop = this.$el.offsetTop;
    this.placeholder = window.document.createElement('div');
  },

  updated: function updated () {
    if (!this.sticky) {
      this.initTop = this.$el.offsetTop;
    }
  },

  methods: {
    addSticky: function addSticky () {
      this.sticky = true;
      this.placeholder.style.display = 'block';
      this.placeholder.style.width = this.$el.offsetWidth + 'px';
      this.placeholder.style.height = this.$el.offsetHeight + 'px';
      this.$el.parentNode.insertBefore(this.placeholder, this.$el);
    },

    removeSticky: function removeSticky () {
      this.sticky = false;
      try {
        this.$el.parentNode.removeChild(this.placeholder);
      }
      catch (e) {
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('html:header', {
      attrs: { 'weex-type': 'header' },
      on: this._createEventMap(),
      ref: 'header',
      staticClass: 'weex-header',
      class: { sticky: this.sticky, iossticky: this.supportSticky },
      staticStyle: ms
    }, this.$slots.default)
  }
};

var supportedEvents = [
  'click', 'longpress', 'appear', 'disappear' ];

var scrollableTypes = ['scroller', 'list'];

var lazyloadWatched = false;
function watchLazyload () {
  lazyloadWatched = true
  ; [
    'scroll' ].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
}

var base = {
  beforeCreate: function beforeCreate () {
    if (!lazyloadWatched) {
      watchLazyload();
    }
    {
      tagBeforeCreate();
    }
  },

  mounted: function mounted () {
    if (!weex._root) {
      weex._root = this.$root.$el;
      weex._root.classList.add('weex-root');
      Object.freeze(weex);
    }
    watchAppear$$1(this);
    tagMounted();
  },

  beforeUpdate: function beforeUpdate () {
    tagBeforeUpdate();
  },

  updated: function updated () {
    tagUpdated();
  },

  methods: {
    _getTopContext: function _getTopContext () {
      var ctx = this;
      var vnode = ctx.$options._parentVnode;
      while (vnode) {
        ctx = vnode.context;
        vnode = ctx.$options._parentVnode;
      }
      return ctx
    },

    _getScopeId: function _getScopeId () {
      // return closest scopeId.
      var scopeId = this.$options._scopeId;
      var ctx = this;
      while (!scopeId) {
        ctx = ctx.$options.parent;
        if (!ctx) { return null }
        scopeId = ctx.$options._scopeId;
      }
      return scopeId
    },

    _getParentScroller: function _getParentScroller () {
      var parent = this;
      while (parent && scrollableTypes.indexOf(parent.$options._componentTag) <= -1) {
        parent = parent.$options.parent;
      }
      return parent
    },

    _createEventMap: function _createEventMap (extras) {
      var this$1 = this;
      if ( extras === void 0 ) extras = [];

      var eventMap = {};
      supportedEvents.concat(extras).forEach(function (name) {
        eventMap[name] = function (event) { return this$1.$emit(name, event); };
      });
      return eventMap
    },

    _fireLazyload: function _fireLazyload (el) {
      getThrottleLazyload(16)();
    }
  }
};

// import { validateStyles } from '../validator'

// let warned = false

function hyphenateExtend (to, from) {
  if (!from) { return }
  for (var k in from) {
    to[hyphenate(k)] = from[k];
  }
}

function getHeadStyleMap () {
  return Array.from(document.styleSheets || [])
    .reduce(function (pre, styleSheet) {
      // why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
      // because weex's components defined non-standard style attributes, which is
      // auto ignored when access rule.cssText.
      var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/\.(?!\d+)/);
      var len = strArr.length;
      var rules = [];
      for (var i = 0; i < len; i++) {
        var str = strArr[i];
        if (!str || str.match(/^\s*$/)) {
          continue
        }
        var match = str.match(/^([^{\s]+)\s*{\s*([^}]+)}\s*$/);
        if (!match) {
          // not the vue static class styles map. so acquire no rules for this styleSheet.
          // just jump through this styleSheet and go to analyzing next.
          return pre
        }
        rules.push({
          selectorText: ("." + (match[1])),
          cssText: match[2].trim()
        });
      }
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        pre[selector] = trimComment(rule.cssText).split(';')
          .reduce(function (styleObj, statement) {
            statement = statement.trim();
            if (statement && statement.indexOf('/*') <= -1) {
              var resArr = statement.split(':').map(function (part) { return part.trim(); });
              styleObj[hyphenate(resArr[0])] = resArr[1];
            }
            return styleObj
          }, {});
      });
      return pre
    }, {})
}

var style = {
  beforeCreate: function beforeCreate () {
    // get static class style map from document's styleSheets.
    if (!weex.styleMap) {
      weex.styleMap = getHeadStyleMap();
    }
  },

  methods: {
    // get style from class, staticClass, style and staticStyle.
    _getComponentStyle: function _getComponentStyle (data) {
      var style = {};
      var _scopeId = this._getScopeId && this._getScopeId();
      var staticClassNames = (typeof data.staticClass === 'string') ? [data.staticClass] : (data.staticClass || []);
      var classNames = (typeof data.class === 'string') ? [data.class] : (data.class || []);

      /**
       * merge styles. priority: high -> low
       *  1. data.style (bound style).
       *  2. data.staticStyle (inline styles).
       *  3. data.class style (bound class names).
       *  4. data.staticClass style (scoped styles or static classes).
       */
      staticClassNames.forEach(function (n) {
        var cls = '';
        if (_scopeId) {
          cls = "." + n + "[" + _scopeId + "]";
        }
        var ruleMap = weex.styleMap[cls] || {};
        hyphenateExtend(style, ruleMap);
      });
      classNames.forEach(function (n) {
        var cls = '';
        if (_scopeId) {
          cls = "." + n + "[" + _scopeId + "]";
        }
        var ruleMap = weex.styleMap[cls] || {};
        hyphenateExtend(style, ruleMap);
      });
      hyphenateExtend(style, data.staticStyle);
      hyphenateExtend(style, data.style);

      // filter styles.
      return normalizeStyles(style)
    },

    // merge static styles and static class styles into $vnode.data.mergedStyles.
    _mergeStyles: function _mergeStyles () {
      var vnode = this.$options._parentVnode || {};
      var data = vnode.data;
      if (!data) { return }
      this.$options._parentVnode.data.staticStyle = this._getComponentStyle(data);
    },

    _getParentRect: function _getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    },

    _getParentRectAsync: function _getParentRectAsync (cb) {
      this.$nextTick(function () {
        return cb && cb.call(this, this.getParentRectSync())
      });
    }
  }
};

var scrollable = {
  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    handleScroll: function handleScroll (event) {
      getThrottleLazyload(25, this.$el, 'scroll')();
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (reachTop && this._refresh) {
            this._refresh.child.pullingDown(offsetY);
          }
          else if (reachBottom && this._loading) {
            this._loading.child.pullingUp(-offsetY);
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          if (reachTop && this._refresh) {
            this._refresh.child.pullingEnd();
          }
          else if (reachBottom && this._loading) {
            this._loading.child.pullingEnd();
          }
        }
      }
      delete this._touchParams;
    }
  }
};

var LoadingIndicator = {
  name: 'loading-indicator',
  render: function render (createElement) {
    var ms = this._getComponentStyle(this.$vnode.data);
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator',
      staticStyle: ms
    })
  }
};

var refresh = {
  // name: 'refresh',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      lastDy: 0,
      viewHeight: 0,
      height: -1
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
      this.$emit('pullingdown', createEvent(this, 'pullingdown', {
        dy: offsetY - this.lastDy,
        pullingDistance: offsetY,
        viewHeight: this.viewHeight
      }));
      this.lastDy = offsetY;
    },
    pullingDown: function pullingDown (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('refresh');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      staticClass: 'weex-refresh',
      staticStyle: ms
    }, this.getChildren())
  }
};

var loading = {
  // name: 'loading',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: -1,
      viewHeight: 0
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
    },
    pullingUp: function pullingUp (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('loading');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'weex-type': 'loading' },
      staticClass: 'weex-loading',
      staticStyle: ms
    }, this.getChildren())
  }
};

// import header from './header'
// export function createHeader (context, createElement) {
//   return createElement(header)
// }

function createLoading (context, createElement, vnode) {
  var options = vnode.componentOptions;
  var ms = context._getComponentStyle(context.$vnode.data);
  return createElement(loading, extend(vnode.data, {
    on: options.listeners,
    staticStyle: ms
  }), options.children)
}

function createRefresh (context, createElement, vnode) {
  var options = vnode.componentOptions;
  var ms = context._getComponentStyle(context.$vnode.data);
  return createElement(refresh, extend(vnode.data, {
    on: options.listeners,
    staticStyle: ms
  }), options.children)
}

var listMixin = {
  methods: {
    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);

      if (supportSticky()) {
        return
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) { return vm.$refs.header; });

      if (h.length <= 0) {
        return
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        }
        else {
          h[i].removeSticky();
        }
      }
    }
  }
};

// import { validateStyles } from '../../../validator'
var index$5 = {
  mixins: [scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-list', 'weex-list-wrapper'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-list-inner'
        }, this._cells),
        this._loading
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'list';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);

    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: this.wrapperClass,
      staticStyle: ms,
      on: extend(this._createEventMap(), {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

// import { validateStyles } from '../../../validator'

var cell = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      on: this._createEventMap(),
      staticClass: 'weex-cell',
      staticStyle: ms
    }, this.$slots.default)
  }
};

// import { validateStyles } from '../../validator'
var scroller = {
  mixins: [scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-scroller', 'weex-scroller-wrapper'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('weex-scroller-horizontal');
      }
      else {
        classArray.push('weex-scroller-vertical');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner'
        }, this._cells),
        this._loading
      ]
    },
    scrollTo: function scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop;
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'scroller';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    var ms = this._getComponentStyle(this.$vnode.data);

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      staticClass: this.wrapperClass,
      staticStyle: ms,
      on: extend(this._createEventMap(), {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

function getIndicatorItemStyle (spec, isActive) {
  var style = {};
  style['background-color'] = spec[isActive ? 'item-selected-color' : 'item-color'];
  style['width'] = style['height'] = spec['item-size'];
  return style
}

function _render (context, h) {
  var children = [];
  var mergedStyle = context._getComponentStyle(context.$vnode.data);
  context.$vnode.data.cached = {};
  extendKeys(context.$vnode.data.cached, mergedStyle, ['width', 'height']);
  var indicatorSpecStyle = extendKeys(
      {},
      mergedStyle,
      ['item-color', 'item-selected-color', 'item-size']
    );
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['weex-indicator-item'];
    var isActive = false;
    if (i === Number(context.active)) {
      classNames.push('weex-indicator-item-active');
      isActive = true;
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }));
  }
  if (!context.$vnode.context._isMounted) {
    context.$nextTick(function () {
      _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
    });
  }
  return h('nav', {
    attrs: { 'weex-type': 'indicator' },
    staticClass: 'weex-indicator',
    staticStyle: mergedStyle
  }, children)
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect (context, mergedStyle) {
  var ct = context._getParentRect();
  var rect = ['width', 'height'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    pre[key] = msv ? parseFloat(msv) : ct[key];
    return pre
  }, {});
  return rect
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr (context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    // undefined, null, or '0px' -> o
    pre[key] = msv && parseFloat(msv) || 0;
    return pre
  }, {})
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect (el) {
  var width, height;
  if (el.children.length === 1) {
    width = height = window.getComputedStyle(el.children[0]);
  }
  else {
    var itemComputedStyle = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle.marginLeft);
    height = parseFloat(itemComputedStyle.height);
    width = el.children.length * (height + padding) - padding;
  }
  return { width: width, height: height }
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout (context, virtualRect, ltbr) {
  var el = context.$el;
  var rect = _getIndicatorRect(el);
  var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
    pre[key] = rect[key] + 'px';
    return pre
  }, {});
  extend(el.style, rectWithPx);
  var axisMap = [
    { dir: ltbr.left ? 'left' : ltbr.right ? 'right' : 'left', scale: 'width' },
    { dir: ltbr.top ? 'top' : ltbr.bottom ? 'bottom' : 'top', scale: 'height' }
  ];
  Object.keys(axisMap).forEach(function (key) {
    var ref = axisMap[key];
    var dir = ref.dir;
    var scale = ref.scale;
    el.style[dir] = ltbr[dir] + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
  });
}

var indicator = {
  name: 'indicator',
  methods: {
    show: function () {
      this.$el.style.visibility = 'visible';
    }
  },
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  updated: function updated () {
    var mergedStyle = this._getComponentStyle(this.$vnode.data);
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
  },
  render: function render (createElement) {
    return _render(this, createElement)
  }
};

var TRANSITION_TIME = 200;

// trigger scroll event frequency.
// const scrollDam = 16

var slideMixin = {
  methods: {
    // get standard index
    normalizeIndex: function normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    slideTo: function slideTo (index) {
      var this$1 = this;

      var newIndex = this.normalizeIndex(index);
      var inner = this.$refs.inner;
      var step = this._cells.length <= 1 ? 0 : this.currentIndex - index;
      this.innerOffset += Math.sign(step) * this.wrapperWidth;
      if (inner) {
        // const match = (inner.style.transform || inner.style.webkitTransform).match(/(\d+)px/)
        // const currentOffset = parseFloat(match[1])
        // TODO: will-change | set styles together
        inner.style.webkitTransition = "-webkit-transform .2s ease-in-out";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        setTimeout(function () {
          inner.style.webkitTransition = '';
          inner.style.transition = '';
        }, TRANSITION_TIME);
      }
      // TODO: emit scroll event.
      // nextFrame()

      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        // replace $el with { attr, style } is a legacy usage. Is it necessary to
        // do this ? Or just tell devers to use inline functions to access attrs ?
        this.$emit('change', createEvent(this.$el, 'change', {
          index: this.currentIndex
        }));
        setTimeout(function () { this$1.reorder(); }, TRANSITION_TIME);
      }
    },

    reorder: function reorder () {
      var this$1 = this;

      this.$nextTick(function () {
        if (this$1._cells.length <= 1) {
          return
        }

        var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
        var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
        var prevElm = this$1._cells[prevIndex].elm;
        var nextElm = this$1._cells[nextIndex].elm;
        var currentElm = this$1._cells[this$1.currentIndex].elm;

        var removeClone = function (clone) {
          if (clone) {
            setTimeout(function () {
              clone.parentElement.removeChild(clone);
            }, this$1.interval > TRANSITION_TIME ? this$1.interval : TRANSITION_TIME);
          }
        };

        // clone prevCell if there are only tow slides.
        if (this$1._cells.length === 2) {
          this$1._clonePrev = prevElm.cloneNode(true);
          this$1._clonePrev.classList.add('weex-slide-clone-prev');
          prevElm.parentElement.insertBefore(this$1._clonePrev, currentElm);
          removeClone(this$1._clonePrev);
          if (!this$1._prevFired) {
            fireLazyload(this$1._clonePrev, true);
            this$1._prevFired = true;
          }
          prevElm = this$1._clonePrev;
        }

        var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
        prevElm.style.webkitTransform = "translate3d(" + prevOffset + "px, 0, 0)";
        prevElm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
        var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
        nextElm.style.webkitTransform = "translate3d(" + nextOffset + "px, 0, 0)";
        nextElm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
      });
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.stopPropagation();
      var touch = event.changedTouches[0];
      this._touchParams = {
        originalTransform: this.$refs.inner.style.webkitTransform || this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var ref = this._touchParams;
      var startX = ref.startX;
      var startY = ref.startY;
      var touch = event.changedTouches[0];
      var offsetX = touch.pageX - startX;
      var offsetY = touch.pageY - startY;
      tp.offsetX = offsetX;
      tp.offsetY = offsetY;
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
        if (!isV) {
          this.$emit('scrollstart', createEvent(this.$el, 'scrollstart', {}));
        }
      }
      // vertical scroll. just ignore it.
      if (isV) {
        return
      }
      // horizontal scroll. trigger scroll event.
      event.preventDefault();
      var inner = this.$refs.inner;
      if (inner && offsetX) {
        // TODO: add throttle.
        this.$emit('scroll', createEvent(this.$el, 'scroll', {
          offsetXRatio: offsetX / this.wrapperWidth
        }));
        inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        return
      }
      var inner = this.$refs.inner;
      var offsetX = tp.offsetX;
      if (inner) {
        this.$emit('scrollend', createEvent(this.$el, 'scrollend'));
        // TODO: test the velocity if it's less than 0.2.
        var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
        var direction = offsetX > 0 ? 1 : -1;
        var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
        this.slideTo(newIndex);
      }
      delete this._touchParams;
    }
  }
};

// import { validateStyles } from '../../validator'
var index$6 = {
  mixins: [slideMixin],
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: 'weex-slider-cell'
        }, [vnode])
      });
      if (indicatorVnode) {
        indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
        indicatorVnode.data.attrs.count = cells.length;
        indicatorVnode.data.attrs.active = this.currentIndex;
        this._indicator = createElement(indicator, indicatorVnode.data);
      }
      return cells
    }
  },

  created: function created () {
    var this$1 = this;

    this.weexType = 'slider';
    this.currentIndex = 0;
    this.innerOffset = 0;
    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  beforeUpdate: function beforeUpdate () {
    this.updateLayout();
    this.reorder();
  },

  mounted: function mounted () {
    if (this.autoPlay && this.autoPlay !== 'false') {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }

    this.reorder();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.formatChildren(createElement);
    this.frameCount = this._cells.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'weex-type': 'slider' },
        staticClass: 'weex-slider weex-slider-wrapper',
        on: extend(this._createEventMap(['scroll', 'scrollstart', 'scrollend']), {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        })
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner'
        }, this._cells),
        this._indicator
      ]
    )
  }
};

var warning = {
  render: function render () {
    // TODO: add tag nesting validation
    {
      var tag = this.$options._componentTag;
      var parentTag = this.$parent.$options._componentTag;
      console.warn(("[Vue Render] The <" + tag + "> can't be the child of <" + parentTag + ">."));
    }
    return null
  }
};

// import { validateStyles } from '../validator'
/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle (context) {
  if ( context === void 0 ) context = {};

  var propLines = parseInt(context.lines) || 0;
  var propOverflow = context.textOverflow || 'ellipsis';
  var data = context.$options._parentVnode.data;
  var staticStyle = data && data.staticStyle || {};
  var lines = parseInt(staticStyle.lines) || propLines;
  var overflow = staticStyle['text-overflow'] || propOverflow;
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    }
  }
  return staticStyle
}

var text = {
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);

    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      on: this._createEventMap(),
      staticClass: 'weex-text',
      staticStyle: extend(ms, getTextSpecStyle(this))
    }, this.$slots.default || [this.value])
  }
};

// import { validateStyles } from '../validator'

var textarea = {
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows
      },
      on: extend(this._createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-textarea',
      staticStyle: ms
    }, this.value)
  }
};

// import { validateStyles } from '../validator'

var video = {
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },

    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },

    playsinline: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    // TODO: support playStatus
    return createElement('html:video', {
      attrs: {
        'weex-type': 'video',
        autoplay: (this.autoplay !== 'false' && this.autoplay !== false),
        autoPlay: (this.autoplay !== 'false' && this.autoplay !== false),
        controls: this.controls,
        src: this.src
      },
      on: this._createEventMap(['start', 'pause', 'finish', 'fail']),
      staticClass: 'weex-video'
    })
  }
};

// import { validateStyles } from '../validator'

var web = {
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event) {
        this$1.$emit('pagefinish', createEvent(this$1.$el, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      on: this._createEventMap(['error']),
      staticClass: 'weex-web',
      staticStyle: ms
    })
  }
};

// import indicator from './slider/indicator'



var components$1 = Object.freeze({
	switch: _switch,
	a: a,
	div: div,
	container: div,
	image: image,
	img: image,
	input: input,
	header: header,
	list: index$5,
	cell: cell,
	scroller: scroller,
	slider: index$6,
	indicator: warning,
	refresh: warning,
	loading: warning,
	LoadingIndicator: LoadingIndicator,
	text: text,
	textarea: textarea,
	video: video,
	web: web
});

// import semver from 'semver'
// import styleMixin from './mixins/style'

/**
 * init weex.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend weex plugins.
 *         - components.
 *         - modules.
 */
function init$1 (Vue/*, options = {}*/) {
  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return weex$3.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  // register sdk components.
  for (var name in components$1) {
    Vue.component(name, components$1[name]);
  }

  // // get user extended plugins.
  // const { components: comps, modules } = options
  // // register user extended components.
  // for (const name in comps) {
  //   Vue.components(name, comps[name])
  // }
  // // register user extended modules.
  // for (const mod in modules) {
  //   this.registerModule(mod, modules[mod])
  // }

  /* istanbul ignore next */
  // if ("development" === 'development') {
  //   if (semver.lt(Vue.version, '2.1.5')) {
  //     console.warn(`[Vue Render] The version of Vue should be ` +
  //       `greater than 2.1.5, current is ${Vue.version}.`)
  //   }
  //   console.info(`[Vue Render] Registered components: `
  //     + `[${Object.keys(components).join(', ')}].`)
  Vue.mixin(base);
  Vue.mixin(style);
  // }
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

return weex$3;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL3JlbmRlci9nZXN0dXJlLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL2FycmF5RnJvbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9ldmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvZ2VvbG9jYXRpb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL3BhZ2VJbmZvLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0dHB1cmwvYnVpbGQvaHR0cHVybC5jb21tb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZnVuYy5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZXZlbnQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvdHlwZS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvcGVyZi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvbGF6eWxvYWQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2ZsZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL3N0eWxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9hbmltYXRpb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvZG9tLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL3RvYXN0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL21vZGFsLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2FsZXJ0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2NvbmZpcm0uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvcHJvbXB0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL25hdmlnYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy93ZWJ2aWV3LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2VudmQvYnVpbGQvZW52ZC5jb21tb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi92aWV3cG9ydC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3d4LWVudi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zd2l0Y2guanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvYS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9kaXYuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW5wdXQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9oZWFkZXIuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9iYXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9zY3JvbGxhYmxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbG9hZGluZy1pbmRpY2F0b3IuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9yZWZyZXNoLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbG9hZGluZy5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL3NoYXJlZC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xpc3QvbGlzdE1peGluLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbGlzdC9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xpc3QvY2VsbC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL3Njcm9sbGVyLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3NsaWRlci9pbmRpY2F0b3IuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlTWl4aW4uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3dhcm5pbmcuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy92aWRlby5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy93ZWIuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNJbml0aWFsaXplZCA9IGZhbHNlXG5cbi8vIG1ham9yIGV2ZW50cyBzdXBwb3J0ZWQ6XG4vLyAgIHBhbnN0YXJ0XG4vLyAgIHBhbm1vdmVcbi8vICAgcGFuZW5kXG4vLyAgIHN3aXBlXG4vLyAgIGxvbmdwcmVzc1xuLy8gZXh0cmEgZXZlbnRzIHN1cHBvcnRlZDpcbi8vICAgZHVhbHRvdWNoc3RhcnRcbi8vICAgZHVhbHRvdWNoXG4vLyAgIGR1YWx0b3VjaGVuZFxuLy8gICB0YXBcbi8vICAgZG91YmxldGFwXG4vLyAgIHByZXNzZW5kXG5cbnZhciBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBkb2NFbCA9IGRvYy5kb2N1bWVudEVsZW1lbnRcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxudmFyIGdlc3R1cmVzID0ge31cbnZhciBsYXN0VGFwID0gbnVsbFxuXG4vKipcbiAqIGZpbmQgdGhlIGNsb3Nlc3QgY29tbW9uIGFuY2VzdG9yXG4gKiBpZiB0aGVyZSdzIG5vIG9uZSwgcmV0dXJuIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbDEgZmlyc3QgZWxlbWVudFxuICogQHBhcmFtICB7RWxlbWVudH0gZWwyIHNlY29uZCBlbGVtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fSAgICAgY29tbW9uIGFuY2VzdG9yXG4gKi9cbmZ1bmN0aW9uIGdldENvbW1vbkFuY2VzdG9yKGVsMSwgZWwyKSB7XG4gIHZhciBlbCA9IGVsMVxuICB3aGlsZSAoZWwpIHtcbiAgICBpZiAoZWwuY29udGFpbnMoZWwyKSB8fCBlbCA9PSBlbDIpIHtcbiAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIGZpcmUgYSBIVE1MRXZlbnRcbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IHdoaWNoIGVsZW1lbnQgdG8gZmlyZSBhIGV2ZW50IG9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlICAgIHR5cGUgb2YgZXZlbnRcbiAqIEBwYXJhbSAge29iamVjdH0gIGV4dHJhICAgZXh0cmEgZGF0YSBmb3IgdGhlIGV2ZW50IG9iamVjdFxuICovXG5mdW5jdGlvbiBmaXJlRXZlbnQoZWxlbWVudCwgdHlwZSwgZXh0cmEpIHtcbiAgdmFyIGV2ZW50ID0gZG9jLmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHRydWUsIHRydWUpXG5cbiAgaWYgKHR5cGVvZiBleHRyYSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBwIGluIGV4dHJhKSB7XG4gICAgICBldmVudFtwXSA9IGV4dHJhW3BdXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG4vKipcbiAqIGNhbGMgdGhlIHRyYW5zZm9ybVxuICogYXNzdW1lIDQgcG9pbnRzIEFCQ0Qgb24gdGhlIGNvb3JkaW5hdGUgc3lzdGVtXG4gKiA+IHJvdGF0Ze+8mmFuZ2xlIHJvdGF0aW5nIGZyb20gQUIgdG8gQ0RcbiAqID4gc2NhbGXvvJpzY2FsZSByYXRpbyBmcm9tIEFCIHRvIENEXG4gKiA+IHRyYW5zbGF0Ze+8mnRyYW5zbGF0ZSBzaGlmdCBmcm9tIEEgdG8gQ1xuICpcbiAqIEBwYXJhbSAge251bWJlcn0geDEgYWJzY2lzc2Egb2YgQVxuICogQHBhcmFtICB7bnVtYmVyfSB5MSBvcmRpbmF0ZSBvZiBBXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgyIGFic2Npc3NhIG9mIEJcbiAqIEBwYXJhbSAge251bWJlcn0geTIgb3JkaW5hdGUgb2YgQlxuICogQHBhcmFtICB7bnVtYmVyfSB4MyBhYnNjaXNzYSBvZiBDXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkzIG9yZGluYXRlIG9mIENcbiAqIEBwYXJhbSAge251bWJlcn0geDQgYWJzY2lzc2Egb2YgRFxuICogQHBhcmFtICB7bnVtYmVyfSB5NCBvcmRpbmF0ZSBvZiBEXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgIHRyYW5zZm9ybSBvYmplY3QgbGlrZVxuICogICB7cm90YXRlLCBzY2FsZSwgdHJhbnNsYXRlWzJdLCBtYXRyaXhbM11bM119XG4gKi9cbmZ1bmN0aW9uIGNhbGMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0KSB7XG4gIHZhciByb3RhdGUgPSBNYXRoLmF0YW4yKHk0IC0geTMsIHg0IC0geDMpIC0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKVxuICB2YXIgc2NhbGUgPSBNYXRoLnNxcnQoKE1hdGgucG93KHk0IC0geTMsIDIpXG4gICAgKyBNYXRoLnBvdyh4NCAtIHgzLCAyKSkgLyAoTWF0aC5wb3coeTIgLSB5MSwgMilcbiAgICArIE1hdGgucG93KHgyIC0geDEsIDIpKSlcbiAgdmFyIHRyYW5zbGF0ZSA9IFtcbiAgICB4M1xuICAgIC0gc2NhbGUgKiB4MSAqIE1hdGguY29zKHJvdGF0ZSlcbiAgICArIHNjYWxlICogeTEgKiBNYXRoLnNpbihyb3RhdGUpLFxuICAgIHkzXG4gICAgLSBzY2FsZSAqIHkxICogTWF0aC5jb3Mocm90YXRlKVxuICAgIC0gc2NhbGUgKiB4MSAqIE1hdGguc2luKHJvdGF0ZSldXG5cbiAgcmV0dXJuIHtcbiAgICByb3RhdGU6IHJvdGF0ZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgbWF0cml4OiBbXG4gICAgICBbc2NhbGUgKiBNYXRoLmNvcyhyb3RhdGUpLCAtc2NhbGUgKiBNYXRoLnNpbihyb3RhdGUpLCB0cmFuc2xhdGVbMF1dLFxuICAgICAgW3NjYWxlICogTWF0aC5zaW4ocm90YXRlKSwgc2NhbGUgKiBNYXRoLmNvcyhyb3RhdGUpLCB0cmFuc2xhdGVbMV1dLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9XG59XG5cbi8qKlxuICogdGFrZSBvdmVyIHRoZSB0b3VjaHN0YXJ0IGV2ZW50cy4gQWRkIG5ldyB0b3VjaGVzIHRvIHRoZSBnZXN0dXJlcy5cbiAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHJlY29yZHMsIHRoZW4gYmluZCB0b3VjaG1vdmUsIHRvY2hlbmRcbiAqIGFuZCB0b3VjaGNhbmNlbCBldmVudHMuXG4gKiBuZXcgdG91Y2hlcyBpbml0aWFsaXplZCB3aXRoIHN0YXRlICd0YXBwaW5nJywgYW5kIHdpdGhpbiA1MDAgbWlsbGlzZWNvbmRzXG4gKiBpZiB0aGUgc3RhdGUgaXMgc3RpbGwgdGFwcGluZywgdGhlbiB0cmlnZ2VyIGdlc3R1cmUgJ3ByZXNzJy5cbiAqIElmIHRoZXJlIGFyZSB0d28gdG91Y2hlIHBvaW50cywgdGhlbiB0aGUgJ2R1YWx0b3VjaHN0YXJ0JyBpcyB0cmlnZ2VyZC4gVGhlXG4gKiBub2RlIG9mIHRoZSB0b3VjaCBnZXN0dXJlIGlzIHRoZWlyIGNsb2VzdCBjb21tb24gYW5jZXN0b3IuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2hzdGFydEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hlbmRIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoY2FuY2VsSGFuZGxlciwgZmFsc2UpXG4gIH1cblxuICAvLyByZWNvcmQgZXZlcnkgdG91Y2hcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIHRvdWNoUmVjb3JkID0ge31cblxuICAgIGZvciAodmFyIHAgaW4gdG91Y2gpIHtcbiAgICAgIHRvdWNoUmVjb3JkW3BdID0gdG91Y2hbcF1cbiAgICB9XG5cbiAgICB2YXIgZ2VzdHVyZSA9IHtcbiAgICAgIHN0YXJ0VG91Y2g6IHRvdWNoUmVjb3JkLFxuICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgc3RhdHVzOiAndGFwcGluZycsXG4gICAgICBlbGVtZW50OiBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRhcmdldCxcbiAgICAgIHByZXNzaW5nSGFuZGxlcjogc2V0VGltZW91dChmdW5jdGlvbiAoZWxlbWVudCwgdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJykge1xuICAgICAgICAgICAgZ2VzdHVyZS5zdGF0dXMgPSAncHJlc3NpbmcnXG5cbiAgICAgICAgICAgIGZpcmVFdmVudChlbGVtZW50LCAnbG9uZ3ByZXNzJywge1xuICAgICAgICAgICAgICAvLyBhZGQgdG91Y2ggZGF0YSBmb3Igd2VleFxuICAgICAgICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgICAgIGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9KGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0LCBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXSksIDUwMClcbiAgICB9XG4gICAgZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl0gPSBnZXN0dXJlXG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cblxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaHN0YXJ0Jywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIHRha2Ugb3ZlciB0b3VjaG1vdmUgZXZlbnRzLCBhbmQgaGFuZGxlIHBhbiBhbmQgZHVhbCByZWxhdGVkIGdlc3R1cmVzLlxuICpcbiAqIDEuIHRyYXZlcnNlIGV2ZXJ5IHRvdWNoIHBvaW5077yaXG4gKiA+IGlmICd0YXBwaW5nJyBhbmQgdGhlIHNoaWZ0IGlzIG92ZXIgMTAgcGl4bGVzLCB0aGVuIGl0J3MgYSAncGFubmluZycuXG4gKiAyLiBpZiB0aGVyZSBhcmUgdHdvIHRvdWNoIHBvaW50cywgdGhlbiBjYWxjIHRoZSB0cmFuZm9ybSBhbmQgdHJpZ2dlclxuICogICAnZHVhbHRvdWNoJy5cbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaG1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl1cblxuICAgIGlmICghZ2VzdHVyZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLmxhc3RUb3VjaCkge1xuICAgICAgZ2VzdHVyZS5sYXN0VG91Y2ggPSBnZXN0dXJlLnN0YXJ0VG91Y2hcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmxhc3RUaW1lKSB7XG4gICAgICBnZXN0dXJlLmxhc3RUaW1lID0gZ2VzdHVyZS5zdGFydFRpbWVcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLnZlbG9jaXR5WCkge1xuICAgICAgZ2VzdHVyZS52ZWxvY2l0eVggPSAwXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS52ZWxvY2l0eVkpIHtcbiAgICAgIGdlc3R1cmUudmVsb2NpdHlZID0gMFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUuZHVyYXRpb24pIHtcbiAgICAgIGdlc3R1cmUuZHVyYXRpb24gPSAwXG4gICAgfVxuXG4gICAgdmFyIHRpbWUgPSAgRGF0ZS5ub3coKSAtIGdlc3R1cmUubGFzdFRpbWVcbiAgICB2YXIgdnggPSAodG91Y2guY2xpZW50WCAtIGdlc3R1cmUubGFzdFRvdWNoLmNsaWVudFgpIC8gdGltZVxuICAgIHZhciB2eSA9ICh0b3VjaC5jbGllbnRZIC0gZ2VzdHVyZS5sYXN0VG91Y2guY2xpZW50WSkgLyB0aW1lXG5cbiAgICB2YXIgUkVDT1JEX0RVUkFUSU9OID0gNzBcbiAgICBpZiAodGltZSA+IFJFQ09SRF9EVVJBVElPTikge1xuICAgICAgdGltZSA9IFJFQ09SRF9EVVJBVElPTlxuICAgIH1cbiAgICBpZiAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUgPiBSRUNPUkRfRFVSQVRJT04pIHtcbiAgICAgIGdlc3R1cmUuZHVyYXRpb24gPSBSRUNPUkRfRFVSQVRJT04gLSB0aW1lXG4gICAgfVxuXG4gICAgZ2VzdHVyZS52ZWxvY2l0eVggPSAoZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLmR1cmF0aW9uICsgdnggKiB0aW1lKVxuICAgICAgLyAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUpXG4gICAgZ2VzdHVyZS52ZWxvY2l0eVkgPSAoZ2VzdHVyZS52ZWxvY2l0eVkgKiBnZXN0dXJlLmR1cmF0aW9uICsgdnkgKiB0aW1lKVxuICAgICAgLyAoZ2VzdHVyZS5kdXJhdGlvbiArIHRpbWUpXG4gICAgZ2VzdHVyZS5kdXJhdGlvbiArPSB0aW1lXG5cbiAgICBnZXN0dXJlLmxhc3RUb3VjaCA9IHt9XG5cbiAgICBmb3IgKHZhciBwIGluIHRvdWNoKSB7XG4gICAgICBnZXN0dXJlLmxhc3RUb3VjaFtwXSA9IHRvdWNoW3BdXG4gICAgfVxuICAgIGdlc3R1cmUubGFzdFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICB2YXIgZGlzcGxhY2VtZW50WCA9IHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WFxuICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGRpc3BsYWNlbWVudFgsIDIpXG4gICAgICArIE1hdGgucG93KGRpc3BsYWNlbWVudFksIDIpKVxuICAgIHZhciBpc1ZlcnRpY2FsID0gIShNYXRoLmFicyhkaXNwbGFjZW1lbnRYKSA+IE1hdGguYWJzKGRpc3BsYWNlbWVudFkpKVxuICAgIHZhciBkaXJlY3Rpb24gPSBpc1ZlcnRpY2FsXG4gICAgICA/IGRpc3BsYWNlbWVudFkgPj0gMCA/ICdkb3duJyA6ICd1cCdcbiAgICAgIDogZGlzcGxhY2VtZW50WCA+PSAwID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuXG4gICAgLy8gbWFnaWMgbnVtYmVyIDEwOiBtb3ZpbmcgMTBweCBtZWFucyBwYW4sIG5vdCB0YXBcbiAgICBpZiAoKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycgfHwgZ2VzdHVyZS5zdGF0dXMgPT09ICdwcmVzc2luZycpXG4gICAgICAgICYmIGRpc3RhbmNlID4gMTApIHtcbiAgICAgIGdlc3R1cmUuc3RhdHVzID0gJ3Bhbm5pbmcnXG4gICAgICBnZXN0dXJlLmlzVmVydGljYWwgPSBpc1ZlcnRpY2FsXG4gICAgICBnZXN0dXJlLmRpcmVjdGlvbiA9IGRpcmVjdGlvblxuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFuc3RhcnQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwYW5uaW5nJykge1xuICAgICAgZ2VzdHVyZS5wYW5UaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFubW92ZScsIHtcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBbXVxuICAgIHZhciBjdXJyZW50ID0gW11cbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIHZhciB0cmFuc2Zvcm1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQudG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXVxuICAgICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaC5pZGVudGlmaWVyXVxuICAgICAgcG9zaXRpb24ucHVzaChbZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFgsIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXSlcbiAgICAgIGN1cnJlbnQucHVzaChbdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WV0pXG4gICAgfVxuXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRyYW5zZm9ybSA9IGNhbGMoXG4gICAgICBwb3NpdGlvblswXVswXSxcbiAgICAgIHBvc2l0aW9uWzBdWzFdLFxuICAgICAgcG9zaXRpb25bMV1bMF0sXG4gICAgICBwb3NpdGlvblsxXVsxXSxcbiAgICAgIGN1cnJlbnRbMF1bMF0sXG4gICAgICBjdXJyZW50WzBdWzFdLFxuICAgICAgY3VycmVudFsxXVswXSxcbiAgICAgIGN1cnJlbnRbMV1bMV1cbiAgICApXG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2gnLCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBoYW5kbGUgdG91Y2hlbmQgZXZlbnRcbiAqXG4gKiAxLiBpZiB0aGVyZSBhcmUgdG93IHRvdWNoIHBvaW50cywgdGhlbiB0cmlnZ2VyICdkdWFsdG91Y2hlbmQn5aaCXG4gKlxuICogMi4gdHJhdmVyc2UgZXZlcnkgdG91Y2ggcGlvbnTvvJpcbiAqID4gaWYgdGFwcGluZywgdGhlbiB0cmlnZ2VyICd0YXAnLlxuICogSWYgdGhlcmUgaXMgYSB0YXAgMzAwIG1pbGxpc2Vjb25kcyBiZWZvcmUsIHRoZW4gaXQncyBhICdkb3VibGV0YXAnLlxuICogPiBpZiBwYWRkaW5nLCB0aGVuIGRlY2lkZSB0byB0cmlnZ2VyICdwYW5lbmQnIG9yICdzd2lwZSdcbiAqID4gaWYgcHJlc3NpbmcsIHRoZW4gdHJpZ2dlciAncHJlc3NlbmQnLlxuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnMuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2hlbmRIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaGVuZCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgaWQgPSB0b3VjaC5pZGVudGlmaWVyXG4gICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1tpZF1cblxuICAgIGlmICghZ2VzdHVyZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgIGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnKSB7XG4gICAgICBnZXN0dXJlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICd0YXAnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG5cbiAgICAgIGlmIChsYXN0VGFwICYmIGdlc3R1cmUudGltZXN0YW1wIC0gbGFzdFRhcC50aW1lc3RhbXAgPCAzMDApIHtcbiAgICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ2RvdWJsZXRhcCcsIHtcbiAgICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgbGFzdFRhcCA9IGdlc3R1cmVcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwYW5uaW5nJykge1xuICAgICAgdmFyIG5vdyA9IERhdGUubm93KClcbiAgICAgIHZhciBkdXJhdGlvbiA9IG5vdyAtIGdlc3R1cmUuc3RhcnRUaW1lXG4gICAgICB2YXIgZGlzcGxhY2VtZW50WCA9IHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WFxuICAgICAgdmFyIGRpc3BsYWNlbWVudFkgPSB0b3VjaC5jbGllbnRZIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFlcblxuICAgICAgdmFyIHZlbG9jaXR5ID0gTWF0aC5zcXJ0KGdlc3R1cmUudmVsb2NpdHlZICogZ2VzdHVyZS52ZWxvY2l0eVlcbiAgICAgICAgKyBnZXN0dXJlLnZlbG9jaXR5WCAqIGdlc3R1cmUudmVsb2NpdHlYKVxuICAgICAgdmFyIGlzU3dpcGUgPSB2ZWxvY2l0eSA+IDAuNSAmJiAobm93IC0gZ2VzdHVyZS5sYXN0VGltZSkgPCAxMDBcbiAgICAgIHZhciBleHRyYSA9IHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBpc1N3aXBlOiBpc1N3aXBlLFxuICAgICAgICB2ZWxvY2l0eVg6IGdlc3R1cmUudmVsb2NpdHlYLFxuICAgICAgICB2ZWxvY2l0eVk6IGdlc3R1cmUudmVsb2NpdHlZLFxuICAgICAgICBkaXNwbGFjZW1lbnRYOiBkaXNwbGFjZW1lbnRYLFxuICAgICAgICBkaXNwbGFjZW1lbnRZOiBkaXNwbGFjZW1lbnRZLFxuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnQsXG4gICAgICAgIGlzVmVydGljYWw6IGdlc3R1cmUuaXNWZXJ0aWNhbCxcbiAgICAgICAgZGlyZWN0aW9uOiBnZXN0dXJlLmRpcmVjdGlvblxuICAgICAgfVxuXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFuZW5kJywgZXh0cmEpXG4gICAgICBpZiAoaXNTd2lwZSkge1xuICAgICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAnc3dpcGUnLCBleHRyYSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwcmVzc2luZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwcmVzc2VuZCcsIHtcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWxldGUgZ2VzdHVyZXNbaWRdXG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hlbmRIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoY2FuY2VsSGFuZGxlciwgZmFsc2UpXG4gIH1cbn1cblxuLyoqXG4gKiBoYW5kbGUgdG91Y2hjYW5jZWxcbiAqXG4gKiAxLiBpZiB0aGVyZSBhcmUgdHdvIHRvdWNoIHBvaW50cywgdGhlbiB0cmlnZ2VyICdkdWFsdG91Y2hlbmQnXG4gKlxuICogMi4gdHJhdmVyc2UgZXZlcnR5IHRvdWNoIHBvaW50OlxuICogPiBpZiBwYW5ubmlnLCB0aGVuIHRyaWdnZXIgJ3BhbmVuZCdcbiAqID4gaWYgcHJlc3NpbmcsIHRoZW4gdHJpZ2dlciAncHJlc3NlbmQnXG4gKlxuICogMy4gcmVtb3ZlIGxpc3RlbmVyc1xuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoY2FuY2VsSGFuZGxlcihldmVudCkge1xuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hlbmQnLCB7XG4gICAgICB0b3VjaGVzOiBzbGljZS5jYWxsKGV2ZW50LnRvdWNoZXMpLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIGlkID0gdG91Y2guaWRlbnRpZmllclxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbaWRdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpXG4gICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwYW5uaW5nJykge1xuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbmVuZCcsIHtcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICdwcmVzc2luZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwcmVzc2VuZCcsIHtcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG4gICAgZGVsZXRlIGdlc3R1cmVzW2lkXVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG59XG5cbmlmICghaXNJbml0aWFsaXplZCkge1xuICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydEhhbmRsZXIsIGZhbHNlKVxuICBpc0luaXRpYWxpemVkID0gdHJ1ZVxufVxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBQcm9kdWN0aW9uIHN0ZXBzIG9mIEVDTUEtMjYyLCBFZGl0aW9uIDYsIDIyLjEuMi4xXG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hcnJheS5mcm9tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH07XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG4gICAgfTtcbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XG4gICAgfTtcblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpcztcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZDtcbiAgICAgIHZhciBUO1xuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gNS4gZWxzZVxuICAgICAgICAvLyA1LiBhIElmIElzQ2FsbGFibGUobWFwZm4pIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDEwLiBMZXQgbGVuVmFsdWUgYmUgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAvLyAxMy4gSWYgSXNDb25zdHJ1Y3RvcihDKSBpcyB0cnVlLCB0aGVuXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBDIHdpdGggYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBsZW4uXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xuXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cbiAgICAgIHZhciBrID0gMDtcbiAgICAgIC8vIDE3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW7igKYgKGFsc28gc3RlcHMgYSAtIGgpXG4gICAgICB2YXIga1ZhbHVlO1xuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAga1ZhbHVlID0gaXRlbXNba107XG4gICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFba10gPSBrVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgayArPSAxO1xuICAgICAgfVxuICAgICAgLy8gMTguIExldCBwdXRTdGF0dXMgYmUgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICBBLmxlbmd0aCA9IGxlbjtcbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cbiAgICAgIHJldHVybiBBO1xuICAgIH07XG4gIH0oKSk7XG59XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vNTU5MzU1NFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9IChmdW5jdGlvbihPYmplY3QsIG1hZ2ljKSB7XG4gICAgdmFyIHNldDtcbiAgICBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgc2V0LmNhbGwoTywgcHJvdG8pO1xuICAgICAgcmV0dXJuIE87XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIGFscmVhZHkgaW4gRmlyZWZveCBhbmQgU2FmYXJpXG4gICAgICBzZXQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsIG1hZ2ljKS5zZXQ7XG4gICAgICBzZXQuY2FsbCh7fSwgbnVsbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBJRSA8IDExIGNhbm5vdCBiZSBzaGltbWVkXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgIT09IHt9W21hZ2ljXSB8fFxuICAgICAgICAvLyBuZWl0aGVyIGNhbiBhbnkgYnJvd3NlciB0aGF0IGFjdHVhbGx5XG4gICAgICAgIC8vIGltcGxlbWVudGVkIF9fcHJvdG9fXyBjb3JyZWN0bHlcbiAgICAgICAgLy8gKGFsbCBidXQgb2xkIFY4IHdpbGwgcmV0dXJuIGhlcmUpXG4gICAgICAgIHtfX3Byb3RvX186IG51bGx9Ll9fcHJvdG9fXyA9PT0gdm9pZCAwXG4gICAgICAgIC8vIHRoaXMgY2FzZSBtZWFucyBudWxsIG9iamVjdHMgY2Fubm90IGJlIHBhc3NlZFxuICAgICAgICAvLyB0aHJvdWdoIHNldFByb3RvdHlwZU9mIGluIGEgcmVsaWFibGUgd2F5XG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIGhlcmUgYSAqKlNoYW0qKiBpcyBuZWVkZWQgaW5zdGVhZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG5vZGVqcyAwLjggYW5kIDAuMTAgYXJlIChidWdneSBhbmQuLikgZmluZSBoZXJlXG4gICAgICAvLyBwcm9iYWJseSBDaHJvbWUgb3Igc29tZSBvbGQgTW9iaWxlIHN0b2NrIGJyb3dzZXJcbiAgICAgIHNldCA9IGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgIHRoaXNbbWFnaWNdID0gcHJvdG87XG4gICAgICB9O1xuICAgICAgLy8gcGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgKipub3QqKiB3b3JrXG4gICAgICAvLyBpbiB0aG9zZSBicm93c2VycyB0aGF0IGRvIG5vdCBpbmhlcml0XG4gICAgICAvLyBfX3Byb3RvX18gYnkgbWlzdGFrZSBmcm9tIE9iamVjdC5wcm90b3R5cGVcbiAgICAgIC8vIGluIHRoZXNlIGNhc2VzIHdlIHNob3VsZCBwcm9iYWJseSB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gb3IgYXQgbGVhc3QgYmUgaW5mb3JtZWQgYWJvdXQgdGhlIGlzc3VlXG4gICAgICBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9IHNldFByb3RvdHlwZU9mKFxuICAgICAgICBzZXRQcm90b3R5cGVPZih7fSwgbnVsbCksXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGVcbiAgICAgICkgaW5zdGFuY2VvZiBPYmplY3Q7XG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdHJ1ZSBtZWFucyBpdCB3b3JrcyBhcyBtZWFudFxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IGZhbHNlIG1lYW5zIGl0J3Mgbm90IDEwMCUgcmVsaWFibGVcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB1bmRlZmluZWRcbiAgICAgIC8vIG9yXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PSAgbnVsbCBtZWFucyBpdCdzIG5vdCBhIHBvbHlmaWxsXG4gICAgICAvLyB3aGljaCBtZWFucyBpdCB3b3JrcyBhcyBleHBlY3RlZFxuICAgICAgLy8gd2UgY2FuIGV2ZW4gZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fO1xuICAgIH1cbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2Y7XG4gIH0oT2JqZWN0LCAnX19wcm90b19fJykpO1xufVxuIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGV2ZW50ID0ge1xuICAvKipcbiAgICogb3BlblVybFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgb3BlblVSTDogZnVuY3Rpb24gKHVybCkge1xuICAgIGxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgfVxuXG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGV2ZW50OiBbe1xuICAgIG5hbWU6ICdvcGVuVVJMJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdldmVudCcsIGV2ZW50LCBtZXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3Qgc3VwcG9ydEdlb2xvY2F0aW9uID0gJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3JcbmNvbnN0IGVycm9yTXNnID0gYFtoNS1yZW5kZXJdOiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5gXG5cbmNvbnN0IGdlb2xvY2F0aW9uID0ge1xuICAvLyBvcHRpb25zOlxuICAvLyAgIC0gZW5hYmxlSGlnaEFjY3VyYWN5IG9wdGlvbmFsLCB2YWx1ZSBpcyB0cnVlIG9yIGZhbHNlLCBmYWxzZSBieSBkZWZhdWx0LlxuICAvLyAgIC0gdGltZW91dCBbbm9uZS1uYXRpdmVdIG9wdGlvbmFsLCB2YWx1ZSBpcyBhIG51bWJlciAobWlsbGlzZWNvbmRzKSwgZGVmYXVsdCB2YXVsZSBpcyBGSU5GSU5JVFkuXG4gIC8vICAgLSBtYXhpbXVtQWdlIFtub25lLW5hdGl2ZV0gb3B0aW9uYWwsIHZhbHVlIGlzIGEgbnVtYmVyIChtaWxsaXNlY29uZHMpLCBkZWZhdWx0IHZhbHVlIGlzIDAuXG4gIGdldEN1cnJlbnRQb3NpdGlvbiAoc3VjY2Vzc0NiSWQsIGVycm9yQ2JJZCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN1Y2Nlc3NDYiA9IHBvcyA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soc3VjY2Vzc0NiSWQsIHBvcylcbiAgICBjb25zdCBlcnJvckNiID0gZXJyID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhlcnJvckNiSWQsIGVycilcbiAgICBpZiAoc3VwcG9ydEdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYiwgZXJyb3JDYiwgb3B0aW9ucylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3JNc2cpXG4gICAgICBlcnJvckNiKG5ldyBFcnJvcihlcnJvck1zZykpXG4gICAgfVxuICB9LFxuXG4gIC8vIG9wdGlvbnM6IHRoZSBzYW1lIHdpdGggYGdldEN1cnJlbnRQb3NpdGlvbmAuXG4gIHdhdGNoUG9zaXRpb24gKHN1Y2Nlc3NDYklkLCBlcnJvckNiSWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdWNjZXNzQ2IgPSBwb3MgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHN1Y2Nlc3NDYklkLCBwb3MsIHRydWUpXG4gICAgY29uc3QgZXJyb3JDYiA9IGVyciA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soZXJyb3JDYklkLCBlcnIpXG4gICAgaWYgKHN1cHBvcnRHZW9sb2NhdGlvbikge1xuICAgICAgY29uc3QgaWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihwb3MgPT4ge1xuICAgICAgICBwb3Mud2F0Y2hJZCA9IGlkXG4gICAgICAgIHN1Y2Nlc3NDYihwb3MpXG4gICAgICB9LCBlcnJvckNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvck1zZylcbiAgICAgIGVycm9yQ2IobmV3IEVycm9yKGVycm9yTXNnKSlcbiAgICB9XG4gIH0sXG5cbiAgY2xlYXJXYXRjaCAod2F0Y2hJZCkge1xuICAgIGlmIChzdXBwb3J0R2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yTXNnKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBnZW9sb2NhdGlvbjogW3tcbiAgICBuYW1lOiAnZ2V0Q3VycmVudFBvc2l0aW9uJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJywgJ2Z1bmN0aW9uJywgJ29iamVjdCddXG4gIH0sIHtcbiAgICBuYW1lOiAnd2F0Y2hQb3NpdGlvbicsXG4gICAgYXJnczogWydmdW5jdGlvbicsICdmdW5jdGlvbicsICdvYmplY3QnXVxuICB9LCB7XG4gICAgbmFtZTogJ2NsZWFyV2F0Y2gnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0IChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnZ2VvbG9jYXRpb24nLCBnZW9sb2NhdGlvbiwgbWV0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhZ2VJbmZvID0ge1xuXG4gIHNldFRpdGxlOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICB0aXRsZSA9IHRpdGxlIHx8ICdXZWV4IEhUTUw1J1xuICAgIHRyeSB7XG4gICAgICB0aXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICB9XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHBhZ2VJbmZvOiBbe1xuICAgIG5hbWU6ICdzZXRUaXRsZScsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgncGFnZUluZm8nLCBwYWdlSW5mbywgbWV0YSlcbiAgfVxufVxuIiwiLyogZ2xvYmFsIGxvY2FsU3RvcmFnZSAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN1cHBvcnRMb2NhbFN0b3JhZ2UgPSB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJ1xuY29uc3QgU1VDQ0VTUyA9ICdzdWNjZXNzJ1xuY29uc3QgRkFJTEVEID0gJ2ZhaWxlZCdcbmNvbnN0IElOVkFMSURfUEFSQU0gPSAnaW52YWxpZF9wYXJhbSdcbmNvbnN0IFVOREVGSU5FRCA9ICd1bmRlZmluZWQnXG5cbmNvbnN0IHN0b3JhZ2UgPSB7XG5cbiAgLyoqXG4gICAqIFdoZW4gcGFzc2VkIGEga2V5IG5hbWUgYW5kIHZhbHVlLCB3aWxsIGFkZCB0aGF0IGtleSB0byB0aGUgc3RvcmFnZSxcbiAgICogb3IgdXBkYXRlIHRoYXQga2V5J3MgdmFsdWUgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIHNldEl0ZW06IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiAnZmFpbGVkJyxcbiAgICAgICAgZGF0YTogSU5WQUxJRF9QQVJBTVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSlcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICAgIGRhdGE6IFVOREVGSU5FRFxuICAgICAgfSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGFjY2VwdCBhbnkgZXhjZXB0aW9uIHRocm93biBkdXJpbmcgYSBzdG9yYWdlIGF0dGVtcHQgYXMgYSBxdW90YSBlcnJvclxuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogRkFJTEVELFxuICAgICAgICBkYXRhOiBVTkRFRklORURcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHBhc3NlZCBhIGtleSBuYW1lLCB3aWxsIHJldHVybiB0aGF0IGtleSdzIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIGdldEl0ZW06IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBpZiAoIWtleSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogRkFJTEVELFxuICAgICAgICBkYXRhOiBJTlZBTElEX1BBUkFNXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogdmFsID8gU1VDQ0VTUyA6IEZBSUxFRCxcbiAgICAgIGRhdGE6IHZhbCB8fCBVTkRFRklORURcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKldoZW4gcGFzc2VkIGEga2V5IG5hbWUsIHdpbGwgcmVtb3ZlIHRoYXQga2V5IGZyb20gdGhlIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tJZFxuICAgKi9cbiAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gKGtleSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGlmICgha2V5KSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBGQUlMRUQsXG4gICAgICAgIGRhdGE6IElOVkFMSURfUEFSQU1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgZGF0YTogVU5ERUZJTkVEXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGRhdGEgaXRlbXMgc3RvcmVkIGluIHRoZSBTdG9yYWdlIG9iamVjdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tJZFxuICAgKi9cbiAgbGVuZ3RoOiBmdW5jdGlvbiAoY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGNvbnN0IGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGxlblxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwga2V5cyBzdG9yZWQgaW4gU3RvcmFnZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIGdldEFsbEtleXM6IGZ1bmN0aW9uIChjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgY29uc3QgX2FyciA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9hcnIucHVzaChsb2NhbFN0b3JhZ2Uua2V5KGkpKVxuICAgIH1cbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgIGRhdGE6IF9hcnJcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHN0b3JhZ2U6IFt7XG4gICAgbmFtZTogJ3NldEl0ZW0nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnZ2V0SXRlbScsXG4gICAgYXJnczogWydzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3JlbW92ZUl0ZW0nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdsZW5ndGgnLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2dldEFsbEtleXMnLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnc3RvcmFnZScsIHN0b3JhZ2UsIG1ldGEpXG4gIH1cbn1cbiIsIih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgJiYgKHdpbmRvdyA9IHtjdHJsOiB7fSwgbGliOiB7fX0pOyF3aW5kb3cuY3RybCAmJiAod2luZG93LmN0cmwgPSB7fSk7IXdpbmRvdy5saWIgJiYgKHdpbmRvdy5saWIgPSB7fSk7IWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt2YXIgYj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhcmFtc1wiLHtzZXQ6ZnVuY3Rpb24oYSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2Zvcih2YXIgYyBpbiBiKWRlbGV0ZSBiW2NdO2Zvcih2YXIgYyBpbiBhKWJbY109YVtjXX19LGdldDpmdW5jdGlvbigpe3JldHVybiBifSxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzZWFyY2hcIix7c2V0OmZ1bmN0aW9uKGEpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXswPT09YS5pbmRleE9mKFwiP1wiKSYmKGE9YS5zdWJzdHIoMSkpO3ZhciBjPWEuc3BsaXQoXCImXCIpO2Zvcih2YXIgZCBpbiBiKWRlbGV0ZSBiW2RdO2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKXt2YXIgZj1jW2VdLnNwbGl0KFwiPVwiKTtpZih2b2lkIDAhPT1mWzFdJiYoZlsxXT1mWzFdLnRvU3RyaW5nKCkpLGZbMF0pdHJ5e2JbZGVjb2RlVVJJQ29tcG9uZW50KGZbMF0pXT1kZWNvZGVVUklDb21wb25lbnQoZlsxXSl9Y2F0Y2goZyl7YltmWzBdXT1mWzFdfX19fSxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1bXTtmb3IodmFyIGMgaW4gYilpZih2b2lkIDAhPT1iW2NdKWlmKFwiXCIhPT1iW2NdKXRyeXthLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGMpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiW2NdKSl9Y2F0Y2goZCl7YS5wdXNoKGMrXCI9XCIrYltjXSl9ZWxzZSB0cnl7YS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChjKSl9Y2F0Y2goZCl7YS5wdXNoKGMpfXJldHVybiBhLmxlbmd0aD9cIj9cIithLmpvaW4oXCImXCIpOlwiXCJ9LGVudW1lcmFibGU6ITB9KTt2YXIgYztPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImhhc2hcIix7c2V0OmZ1bmN0aW9uKGEpe1wic3RyaW5nXCI9PXR5cGVvZiBhJiYoYSYmYS5pbmRleE9mKFwiI1wiKTwwJiYoYT1cIiNcIithKSxjPWF8fFwiXCIpfSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY30sZW51bWVyYWJsZTohMH0pLHRoaXMuc2V0PWZ1bmN0aW9uKGEpe2E9YXx8XCJcIjt2YXIgYjtpZighKGI9YS5tYXRjaChuZXcgUmVnRXhwKFwiXihbYS16MC05LV0rOik/Wy9dezJ9KD86KFteQC86P10rKSg/OjooW15ALzpdKykpP0ApPyhbXjovPyNdKykoPzpbOl0oWzAtOV0rKSk/KFsvXVtePyM7XSopPyg/Ols/XShbXiNdKikpPyhbI11bXj9dKik/JFwiLFwiaVwiKSkpKXRocm93IG5ldyBFcnJvcihcIldyb25nIHVyaSBzY2hlbWUuXCIpO3RoaXMucHJvdG9jb2w9YlsxXXx8KFwib2JqZWN0XCI9PXR5cGVvZiBsb2NhdGlvbj9sb2NhdGlvbi5wcm90b2NvbDpcIlwiKSx0aGlzLnVzZXJuYW1lPWJbMl18fFwiXCIsdGhpcy5wYXNzd29yZD1iWzNdfHxcIlwiLHRoaXMuaG9zdG5hbWU9dGhpcy5ob3N0PWJbNF0sdGhpcy5wb3J0PWJbNV18fFwiXCIsdGhpcy5wYXRobmFtZT1iWzZdfHxcIi9cIix0aGlzLnNlYXJjaD1iWzddfHxcIlwiLHRoaXMuaGFzaD1iWzhdfHxcIlwiLHRoaXMub3JpZ2luPXRoaXMucHJvdG9jb2wrXCIvL1wiK3RoaXMuaG9zdG5hbWV9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnByb3RvY29sK1wiLy9cIjtyZXR1cm4gdGhpcy51c2VybmFtZSYmKGErPXRoaXMudXNlcm5hbWUsdGhpcy5wYXNzd29yZCYmKGErPVwiOlwiK3RoaXMucGFzc3dvcmQpLGErPVwiQFwiKSxhKz10aGlzLmhvc3QsdGhpcy5wb3J0JiZcIjgwXCIhPT10aGlzLnBvcnQmJihhKz1cIjpcIit0aGlzLnBvcnQpLHRoaXMucGF0aG5hbWUmJihhKz10aGlzLnBhdGhuYW1lKSx0aGlzLnNlYXJjaCYmKGErPXRoaXMuc2VhcmNoKSx0aGlzLmhhc2gmJihhKz10aGlzLmhhc2gpLGF9LGEmJnRoaXMuc2V0KGEudG9TdHJpbmcoKSl9Yi5odHRwdXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgYyhhKX19KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpOzttb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5saWJbJ2h0dHB1cmwnXTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0cykge1xuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0J10nXG5cdFx0XHRcdF0uam9pbignJykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGVuY29kZShpbmRleCwgb3B0cyksXG5cdFx0XHRcdFx0J109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0cykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1tdPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0cykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cykge1xuXHR2YXIgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0cy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQgfHwgYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0cykge1xuXHRpZiAob3B0cy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0cy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cdFx0fSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBpbnB1dFtrZXldO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBzdHIuc3BsaXQoJz8nKVsxXSB8fCAnJztcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG5cdG9wdHMgPSBvYmplY3RBc3NpZ24oe2FycmF5Rm9ybWF0OiAnbm9uZSd9LCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9pc3N1ZXMvNDdcblx0dmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuXHRpZiAoIXN0cikge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuXHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0Ly8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcblx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IHVuZGVmaW5lZDtcblxuXHRcdC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG5cdFx0Zm9ybWF0dGVyKGRlY29kZVVSSUNvbXBvbmVudChrZXkpLCB2YWwsIHJldCk7XG5cdH0pO1xuXG5cdHJldHVybiBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG5cdFx0dmFyIHZhbCA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcblx0XHRcdFx0aWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGZvcm1hdHRlcihrZXksIHZhbDIsIHJlc3VsdC5sZW5ndGgpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cykgKyAnPScgKyBlbmNvZGUodmFsLCBvcHRzKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuIiwiLyogZ2xvYmFsIGxpYiwgWE1MSHR0cFJlcXVlc3QgKi9cbi8qIGRlcHM6IGh0dHB1cmwgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmxldCB1dGlsc1xuXG5pbXBvcnQgJ2h0dHB1cmwnXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJ1xuXG5sZXQganNvbnBDbnQgPSAwXG5jb25zdCBFUlJPUl9TVEFURSA9IC0xXG5cbmZ1bmN0aW9uIF9qc29ucCAoY29uZmlnLCBjYWxsYmFjaywgcHJvZ3Jlc3NDYWxsYmFjaykge1xuICBjb25zdCBjYk5hbWUgPSAnanNvbnBfJyArICgrK2pzb25wQ250KVxuICBsZXQgdXJsXG5cbiAgaWYgKCFjb25maWcudXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gY29uZmlnLnVybCBzaG91bGQgYmUgc2V0IGluIF9qc29ucCBmb3IgXFwnZmV0Y2hcXCcgQVBJLicpXG4gIH1cblxuICBnbG9iYWxbY2JOYW1lXSA9IChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgc3RhdHVzVGV4dDogJ09LJyxcbiAgICAgICAgZGF0YTogcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgICBkZWxldGUgZ2xvYmFsW2NiXVxuICAgIH1cbiAgfSkoY2JOYW1lKVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHRyeSB7XG4gICAgdXJsID0gbGliLmh0dHB1cmwoY29uZmlnLnVybClcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gaW52YWxpZCBjb25maWcudXJsIGluIF9qc29ucCBmb3IgXFwnZmV0Y2hcXCcgQVBJOiAnXG4gICAgICArIGNvbmZpZy51cmwpXG4gIH1cbiAgdXJsLnBhcmFtcy5jYWxsYmFjayA9IGNiTmFtZVxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gIHNjcmlwdC5zcmMgPSB1cmwudG9TdHJpbmcoKVxuICAvLyBzY3JpcHQub25lcnJvciBpcyBub3Qgd29ya2luZyBvbiBJRSBvciBzYWZhcmkuXG4gIC8vIGJ1dCB0aGV5IGFyZSBub3QgY29uc2lkZXJlZCBoZXJlLlxuICBzY3JpcHQub25lcnJvciA9IChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gdW5leHBlY3RlZCBlcnJvciBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSScsIGVycilcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgc3RhdHVzOiBFUlJPUl9TVEFURSxcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBzdGF0dXNUZXh0OiAnJyxcbiAgICAgICAgZGF0YTogJydcbiAgICAgIH0pXG4gICAgICBkZWxldGUgZ2xvYmFsW2NiXVxuICAgIH1cbiAgfSkoY2JOYW1lKVxuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIG51bGwpXG59XG5cbmZ1bmN0aW9uIF94aHIgKGNvbmZpZywgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IGNvbmZpZy50eXBlXG4gIHhoci5vcGVuKGNvbmZpZy5tZXRob2QsIGNvbmZpZy51cmwsIHRydWUpXG5cbiAgLy8gY29ycyBjb29raWUgc3VwcG9ydFxuICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscyA9PT0gdHJ1ZSkge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge31cbiAgZm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKVxuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICBvazogeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCxcbiAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgaGVhZGVyczogeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXG4nKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChvYmosIGhlYWRlclN0cikge1xuICAgICAgICAgIGNvbnN0IGhlYWRlckFyciA9IGhlYWRlclN0ci5tYXRjaCgvKC4rKTogKC4rKS8pXG4gICAgICAgICAgaWYgKGhlYWRlckFycikge1xuICAgICAgICAgICAgb2JqW2hlYWRlckFyclsxXV0gPSBoZWFkZXJBcnJbMl1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBwcm9ncmVzc0NhbGxiYWNrKHtcbiAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgbGVuZ3RoOiBlLmxvYWRlZCxcbiAgICAgICAgdG90YWw6IGUudG90YWwsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAob2JqLCBoZWFkZXJTdHIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckFyciA9IGhlYWRlclN0ci5tYXRjaCgvKC4rKTogKC4rKS8pXG4gICAgICAgICAgICBpZiAoaGVhZGVyQXJyKSB7XG4gICAgICAgICAgICAgIG9ialtoZWFkZXJBcnJbMV1dID0gaGVhZGVyQXJyWzJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgICAgfSwge30pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gX3hociBmb3IgXFwnZmV0Y2hcXCcgQVBJJywgZXJyKVxuICAgIGNhbGxiYWNrKHtcbiAgICAgIHN0YXR1czogRVJST1JfU1RBVEUsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBzdGF0dXNUZXh0OiAnJyxcbiAgICAgIGRhdGE6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHhoci5zZW5kKGNvbmZpZy5ib2R5IHx8IG51bGwpXG59XG5cbmNvbnN0IHN0cmVhbSA9IHtcblxuICAvKipcbiAgICogc2VuZEh0dHBcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogTm90ZTogVGhpcyBBUEkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzdHJlYW0uZmV0Y2ggaW5zdGVhZC5cbiAgICogc2VuZCBhIGh0dHAgcmVxdWVzdCB0aHJvdWdoIFhIUi5cbiAgICogQHBhcmFtICB7b2JqfSBwYXJhbXNcbiAgICogIC0gbWV0aG9kOiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURScgfCAnSEVBRCcgfCAnUEFUQ0gnLFxuICAgKiAgLSB1cmw6IHVybCByZXF1ZXN0ZWRcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjYWxsYmFja0lkXG4gICAqL1xuICBzZW5kSHR0cDogZnVuY3Rpb24gKHBhcmFtLCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcmFtID0gSlNPTi5wYXJzZShwYXJhbSlcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtICE9PSAnb2JqZWN0JyB8fCAhcGFyYW0udXJsKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1toNS1yZW5kZXJdIGludmFsaWQgY29uZmlnIG9yIGludmFsaWQgY29uZmlnLnVybCBmb3Igc2VuZEh0dHAgQVBJJylcbiAgICB9XG5cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGNvbnN0IG1ldGhvZCA9IHBhcmFtLm1ldGhvZCB8fCAnR0VUJ1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgeGhyLm9wZW4obWV0aG9kLCBwYXJhbS51cmwsIHRydWUpXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwgdGhpcy5yZXNwb25zZVRleHQpXG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gdW5leHBlY3RlZCBlcnJvciBpbiBzZW5kSHR0cCBBUEknLCBlcnJvcilcbiAgICAgIC8vIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soXG4gICAgICAvLyAgIGNhbGxiYWNrSWQsXG4gICAgICAvLyAgIG5ldyBFcnJvcigndW5leHBlY3RlZCBlcnJvciBpbiBzZW5kSHR0cCBBUEknKVxuICAgICAgLy8gKVxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIGZldGNoXG4gICAqIHVzZSBzdHJlYW0uZmV0Y2ggdG8gcmVxdWVzdCBmb3IgYSBqc29uIGZpbGUsIGEgcGxhaW4gdGV4dCBmaWxlIG9yXG4gICAqIGEgYXJyYXlidWZmZXIgZm9yIGEgZmlsZSBzdHJlYW0uIChZb3UgY2FuIHVzZSBCbG9iIGFuZCBGaWxlUmVhZGVyXG4gICAqIEFQSSBpbXBsZW1lbnRlZCBieSBtb3N0IG1vZGVybiBicm93c2VycyB0byByZWFkIGEgYXJyYXlidWZmZXIuKVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgY29uZmlnIG9wdGlvbnNcbiAgICogICAtIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BBVENIJ1xuICAgKiAgIC0gaGVhZGVycyB7b2JqfVxuICAgKiAgIC0gdXJsIHtzdHJpbmd9XG4gICAqICAgLSBtb2RlIHtzdHJpbmd9ICdjb3JzJyB8ICduby1jb3JzJyB8ICdzYW1lLW9yaWdpbicgfCAnbmF2aWdhdGUnXG4gICAqICAgLSB3aXRoQ3JlZGVudGlhbHMge2Jvb2xlYW59XG4gICAqICAgLSBib2R5XG4gICAqICAgLSB0eXBlIHtzdHJpbmd9ICdqc29uJyB8ICdqc29ucCcgfCAndGV4dCdcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjYWxsYmFja0lkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gcHJvZ3Jlc3NDYWxsYmFja0lkXG4gICAqL1xuICBmZXRjaDogZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrSWQsIHByb2dyZXNzQ2FsbGJhY2tJZCkge1xuICAgIGNvbnN0IERFRkFVTFRfTUVUSE9EID0gJ0dFVCdcbiAgICBjb25zdCBERUZBVUxUX01PREUgPSAnY29ycydcbiAgICBjb25zdCBERUZBVUxUX1RZUEUgPSAndGV4dCdcblxuICAgIGNvbnN0IG1ldGhvZE9wdGlvbnMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnLCAnSEVBRCcsICdQQVRDSCddXG4gICAgY29uc3QgbW9kZU9wdGlvbnMgPSBbJ2NvcnMnLCAnbm8tY29ycycsICdzYW1lLW9yaWdpbicsICduYXZpZ2F0ZSddXG4gICAgY29uc3QgdHlwZU9wdGlvbnMgPSBbJ3RleHQnLCAnanNvbicsICdqc29ucCcsICdhcnJheWJ1ZmZlciddXG5cbiAgICAvLyBjb25zdCBmYWxsYmFjayA9IGZhbHNlICAvLyBmYWxsYmFjayBmcm9tICdmZXRjaCcgQVBJIHRvIFhIUi5cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuXG4gICAgY29uc3QgY29uZmlnID0gdXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zKVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy5tZXRob2RcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5tZXRob2QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubWV0aG9kID0gREVGQVVMVF9NRVRIT0RcbiAgICAgIGNvbnNvbGUud2FybignW2g1LXJlbmRlcl0gb3B0aW9ucy5tZXRob2QgZm9yIFxcJ2ZldGNoXFwnIEFQSSBoYXMgYmVlbiBzZXQgdG8gJ1xuICAgICAgICArICdkZWZhdWx0IHZhbHVlIFxcJycgKyBjb25maWcubWV0aG9kICsgJ1xcJycpXG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGhvZE9wdGlvbnMuaW5kZXhPZigoY29uZmlnLm1ldGhvZCArICcnKVxuICAgICAgICAudG9VcHBlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy5tZXRob2QgXFwnJ1xuICAgICAgICArIGNvbmZpZy5tZXRob2RcbiAgICAgICAgKyAnXFwnIGZvciBcXCdmZXRjaFxcJyBBUEkgc2hvdWxkIGJlIG9uZSBvZiAnXG4gICAgICAgICsgbWV0aG9kT3B0aW9ucyArICcuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLnVybFxuICAgIGlmICghY29uZmlnLnVybCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMudXJsIHNob3VsZCBiZSBzZXQgZm9yIFxcJ2ZldGNoXFwnIEFQSS4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIGJvZHkgY29udGVudCBmb3IgbWV0aG9kICdHRVQnLlxuICAgIGlmIChjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09ICdHRVQnKSB7XG4gICAgICBsZXQgYm9keSA9IGNvbmZpZy5ib2R5XG4gICAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChib2R5KSkge1xuICAgICAgICBib2R5ID0gcXMuc3RyaW5naWZ5KGJvZHkpXG4gICAgICB9XG4gICAgICBsZXQgdXJsID0gY29uZmlnLnVybFxuICAgICAgbGV0IGhhc2hJZHggPSB1cmwuaW5kZXhPZignIycpXG4gICAgICBoYXNoSWR4IDw9IC0xICYmIChoYXNoSWR4ID0gdXJsLmxlbmd0aClcbiAgICAgIGxldCBoYXNoID0gdXJsLnN1YnN0cihoYXNoSWR4KVxuICAgICAgaGFzaCAmJiAoaGFzaCA9ICcjJyArIGhhc2gpXG4gICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIGhhc2hJZHgpXG4gICAgICB1cmwgKz0gKGNvbmZpZy51cmwuaW5kZXhPZignPycpIDw9IC0xID8gJz8nIDogJyYnKSArIGJvZHkgKyBoYXNoXG4gICAgICBjb25maWcudXJsID0gdXJsXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy5tb2RlXG4gICAgaWYgKHR5cGVvZiBjb25maWcubW9kZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tb2RlID0gREVGQVVMVF9NT0RFXG4gICAgfVxuICAgIGVsc2UgaWYgKG1vZGVPcHRpb25zLmluZGV4T2YoKGNvbmZpZy5tb2RlICsgJycpLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMubW9kZSBcXCcnXG4gICAgICAgICsgY29uZmlnLm1vZGVcbiAgICAgICAgKyAnXFwnIGZvciBcXCdmZXRjaFxcJyBBUEkgc2hvdWxkIGJlIG9uZSBvZiAnXG4gICAgICAgICsgbW9kZU9wdGlvbnMgKyAnLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy50eXBlXG4gICAgaWYgKHR5cGVvZiBjb25maWcudHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy50eXBlID0gREVGQVVMVF9UWVBFXG4gICAgICBjb25zb2xlLndhcm4oJ1toNS1yZW5kZXJdIG9wdGlvbnMudHlwZSBmb3IgXFwnZmV0Y2hcXCcgQVBJIGhhcyBiZWVuIHNldCB0byAnXG4gICAgICAgICsgJ2RlZmF1bHQgdmFsdWUgXFwnJyArIGNvbmZpZy50eXBlICsgJ1xcJy4nKVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlT3B0aW9ucy5pbmRleE9mKChjb25maWcudHlwZSArICcnKS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLnR5cGUgXFwnJ1xuICAgICAgICAgICsgY29uZmlnLnR5cGVcbiAgICAgICAgICArICdcXCcgZm9yIFxcJ2ZldGNoXFwnIEFQSSBzaG91bGQgYmUgb25lIG9mICdcbiAgICAgICAgICArIHR5cGVPcHRpb25zICsgJy4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMuaGVhZGVyc1xuICAgIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge31cbiAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QoY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy5oZWFkZXJzIHNob3VsZCBiZSBhIHBsYWluIG9iamVjdCcpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy50aW1lb3V0XG4gICAgY29uZmlnLnRpbWVvdXQgPSBwYXJzZUludChjb25maWcudGltZW91dCwgMTApIHx8IDI1MDBcblxuICAgIGNvbnN0IF9jYWxsQXJncyA9IFtjb25maWcsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwgcmVzKVxuICAgIH1dXG4gICAgaWYgKHByb2dyZXNzQ2FsbGJhY2tJZCkge1xuICAgICAgX2NhbGxBcmdzLnB1c2goZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyBTZXQgJ2tlZXBBbGl2ZScgdG8gdHJ1ZSBmb3Igc2VuZGluZyBjb250aW51b3VzIGNhbGxiYWNrc1xuICAgICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKHByb2dyZXNzQ2FsbGJhY2tJZCwgcmVzLCB0cnVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdqc29ucCcpIHtcbiAgICAgIF9qc29ucC5hcHBseSh0aGlzLCBfY2FsbEFyZ3MpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgX3hoci5hcHBseSh0aGlzLCBfY2FsbEFyZ3MpXG4gICAgfVxuICB9XG5cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgc3RyZWFtOiBbe1xuICAgIG5hbWU6ICdzZW5kSHR0cCcsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2ZldGNoJyxcbiAgICBhcmdzOiBbJ29iamVjdCcsICdmdW5jdGlvbicsICdmdW5jdGlvbiddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICB1dGlscyA9IFdlZXgudXRpbHNcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdzdHJlYW0nLCBzdHJlYW0sIG1ldGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcblxuQVVDVElPTjpcbnRhc2tRdWV1ZVxuQ2xpcGJvYXJkLnNldFN0cmluZygpICBOT1cgbm90IHdvcmtzLCBmYWNpbmcgdG8gdXNlci1hY3QgbG9zZSBvZiB0YXNrUXVldWUuXG5cbndvcmtzIGluIENocm9tZSBGaXJlZm94IE9wZXJhLiBidXQgbm90IGluIFNhZmFyaS5cbkBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2V4ZWNDb21tYW5kI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuXG5DbGlwYm9hcmQuZ2V0U3RyaW5nKCkgdW5pbXBsZW1lbnRlZC4gVGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gZG8gcGFzdGUgZnJvbSBjbGlwYm9hcmQgdG8ganMgdmFyaWFibGUuXG5cblNvIGxvb2sgb3V0IHlvdXIgYXBwIGJlaGF2aW9yLCB3aGVuIGRvd25ncmFkZSB0byBodG1sNSByZW5kZXIuXG5BbnkgaWRlYSBpcyB3ZWxjb21lLlxuKiovXG5cbmNvbnN0IFdFRVhfQ0xJUEJPQVJEX0lEID0gJ19fd2VleF9jbGlwYm9hcmRfaWRfXydcblxuY29uc3QgY2xpcGJvYXJkID0ge1xuXG4gIGdldFN0cmluZzogZnVuY3Rpb24gKGNhbGxiYWNrSWQpIHtcbiAgICAvLyBub3Qgc3VwcG9ydGVkIGluIGh0bWw1XG4gICAgY29uc29sZS5sb2coJ2NsaXBib2FyZC5nZXRTdHJpbmcoKSBpcyBub3Qgc3VwcG9ydGVkIG5vdy4nKVxuICB9LFxuXG4gIHNldFN0cmluZzogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAvLyBub3Qgc3VwcG9ydCBzYWZhcmlcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnICYmIHRleHQgIT09ICcnICYmIGRvY3VtZW50LmV4ZWNDb21tYW5kKSB7XG4gICAgICBjb25zdCB0ZW1wSW5wdXQgPSBlbGVtZW50KClcbiAgICAgIHRlbXBJbnB1dC52YWx1ZSA9IHRleHRcblxuICAgICAgdGVtcElucHV0LnNlbGVjdCgpXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gICAgICAvLyB2YXIgb3V0ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhlY0NvbW1hbmQgb3V0IGlzIFwiICsgb3V0KTtcbiAgICAgIHRlbXBJbnB1dC52YWx1ZSA9ICcnXG4gICAgICB0ZW1wSW5wdXQuYmx1cigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ29ubHkgc3VwcG9ydCBzdHJpbmcgaW5wdXQgbm93JylcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBlbGVtZW50ICgpIHtcbiAgbGV0IHRlbXBJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFdFRVhfQ0xJUEJPQVJEX0lEKVxuICBpZiAoIXRlbXBJbnB1dCkge1xuICAgIHRlbXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFdFRVhfQ0xJUEJPQVJEX0lEKVxuICAgIHRlbXBJbnB1dC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDoxcHg7d2lkdGg6MXB4O2JvcmRlcjpub25lOydcbiAgICAvLyB0ZW1wSW5wdXQuc3R5bGUuY3NzVGV4dCA9IFwiaGVpZ2h0OjQwcHg7d2lkdGg6MzAwcHg7Ym9yZGVyOnNvbGlkO1wiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wSW5wdXQpXG4gIH1cbiAgcmV0dXJuIHRlbXBJbnB1dFxufVxuXG5jb25zdCBtZXRhID0ge1xuICBjbGlwYm9hcmQ6IFt7XG4gICAgbmFtZTogJ2dldFN0cmluZycsXG4gICAgYXJnczogWydmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnc2V0U3RyaW5nJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdjbGlwYm9hcmQnLCBjbGlwYm9hcmQsIG1ldGEpXG4gIH1cbn1cbiIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICogdGhlIHJpZ2h0ZXN0IG9iamVjdCdzIHZhbHVlIGhhcyB0aGUgaGlnaGVzdCBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodG8sIC4uLmFyZ3MpIHtcbiAgaWYgKCFhcmdzIHx8IGFyZ3MubGVuZ3RoIDw9IDApIHsgcmV0dXJuIHRvIH1cbiAgYXJncy5mb3JFYWNoKGZyb20gPT4ge1xuICAgIGlmICh0eXBlb2YgZnJvbSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICB0b1trZXldID0gZnJvbVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNaXggc3BlY2lmaWVkIHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kS2V5cyAodG8sIGZyb20sIGtleXMpIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIChrZXlzIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgdG9ba2V5XSA9IGZyb21ba2V5XVxuICB9KVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBFeHRyYWN0IHNwZWNpZmllZCBwcm9wZXJ0aWVzIGZyb20gc3JjIHRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0S2V5cyAodG8sIGZyb20sIGtleXMpIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIChrZXlzIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgdG9ba2V5XSA9IGZyb21ba2V5XVxuICAgIGRlbGV0ZSBmcm9tW2tleV1cbiAgfSlcbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIE9ubHkgY2FsbCB0aGUgZnVuYyB0aGUgbGFzdCB0aW1lIGJlZm9yZSBpdCdzIG5vdCB0aGF0IGZyZXF1ZW50bHkgY2FsbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVySWRcbiAgZnVuY3Rpb24gbGF0ZXIgKCkge1xuICAgIHRpbWVySWQgPSBudWxsXG4gICAgZnVuYy5hcHBseShudWxsKVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gIH1cbn1cblxuLyoqXG4gKiBPbmx5IGNhbGwgdGhlIGZ1bmMgdGhlIGZpcnN0IHRpbWUgYmVmb3JlIGEgc2VyaWVzIGZyZXF1ZW50bHkgZnVuY3Rpb24gY2FsbHMgaGFwcGVuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVzcyAoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZXJJZFxuICBmdW5jdGlvbiBsYXRlciAoKSB7XG4gICAgdGltZXJJZCA9IG51bGxcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGltZXJJZCkge1xuICAgICAgZnVuYy5hcHBseSgpXG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICB9XG59XG5cbi8qKlxuICogT25seSBjYWxsIHRoZSBmdW5jIGV2ZXJ5IHRpbWUgYWZ0ZXIgYSB3YWl0IG1pbGxpc2Vjb25kcyBpZiBpdCdzIHRvbyBmcmVxdWVudGx5IGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlIChmdW5jLCB3YWl0LCBjYWxsTGFzdFRpbWUsIHRhZykge1xuICBsZXQgbGFzdCA9IDBcbiAgbGV0IGxhc3RUaW1lciA9IG51bGxcbiAgY29uc3QgbGFzdFRpbWVEdXJhdGlvbiA9IHdhaXQgKyAod2FpdCA+IDI1ID8gd2FpdCA6IDI1KSAgLy8gcGx1cyBoYWxmIHdhaXQgdGltZS5cbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBpZiAodGltZSAtIGxhc3QgPiB3YWl0KSB7XG4gICAgICBpZiAoY2FsbExhc3RUaW1lKSB7XG4gICAgICAgIGxhc3RUaW1lciAmJiBjbGVhclRpbWVvdXQobGFzdFRpbWVyKVxuICAgICAgICBsYXN0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsYXN0VGltZXIgPSBudWxsXG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgICB9LCBsYXN0VGltZUR1cmF0aW9uKVxuICAgICAgfVxuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdCA9IHRpbWVcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vZnVuYydcblxuLyoqXG4gKiBDcmVhdGUgRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwgeyBidWJibGVzOiBmYWxzZSB9KVxuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgZXh0ZW5kKGV2ZW50LCBwcm9wcylcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY29udGV4dCB8fCBudWxsXG4gIH0pXG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbi8qKlxuICogQ3JlYXRlIEN1c3RvbSBFdmVudC5cbiAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50IChjb250ZXh0LCB0eXBlLCBwcm9wcykge1xuICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jdXN0b21ldmVudFxuICAvLyBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlKVxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgdHJ1ZSwge30pXG4gIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gIC8vIFRPRE86IGV2ZW50LnRhcmdldCBpcyByZWFkb25seVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY29udGV4dCB8fCBudWxsXG4gIH0pXG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbi8qKlxuICogZGlzcGF0Y2ggYSBldmVudCBvbiBhIGRvbSBlbGVtZW50LlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbVxuICogQHBhcmFtICB7RXZlbnR9IGV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50IChkb20sIGV2ZW50KSB7XG4gIGRvbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwRm9ybUV2ZW50cyAoY29udGV4dCkge1xuICBjb25zdCBldmVudE1hcCA9IHt9XG4gIDtbJ2lucHV0JywgJ2NoYW5nZScsICdmb2N1cycsICdibHVyJ10uZm9yRWFjaCh0eXBlID0+IHtcbiAgICBldmVudE1hcFt0eXBlXSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChjb250ZXh0LiRlbCkge1xuICAgICAgICBjb250ZXh0LnZhbHVlID0gY29udGV4dC4kZWwudmFsdWVcbiAgICAgICAgZXZlbnQudmFsdWUgPSBjb250ZXh0LiRlbC52YWx1ZVxuICAgICAgfVxuICAgICAgY29udGV4dC4kZW1pdCh0eXBlLCBldmVudClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBldmVudE1hcFxufVxuIiwiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuL2Z1bmMnXG5pbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50U2Nyb2xsZXIgKHZub2RlKSB7XG4gIGlmICghdm5vZGUpIHJldHVybiBudWxsXG4gIGlmICh2bm9kZS53ZWV4VHlwZSA9PT0gJ3Njcm9sbGVyJyB8fCB2bm9kZS53ZWV4VHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH1cbiAgcmV0dXJuIGdldFBhcmVudFNjcm9sbGVyKHZub2RlLiRwYXJlbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnRlcnNlY3Rpb24gKHJlY3QsIGN0UmVjdCkge1xuICByZXR1cm4gKHJlY3QubGVmdCA8IGN0UmVjdC5yaWdodCAmJiByZWN0LnJpZ2h0ID4gY3RSZWN0LmxlZnQpXG4gICAgJiYgKHJlY3QudG9wIDwgY3RSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+IGN0UmVjdC50b3ApXG59XG5cbi8qKlxuICogW2lzRWxlbWVudFZpc2libGUgZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGVsICAgIGEgZG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGNvbnRhaW5lciAgb3B0aW9uYWwsIHRoZSBjb250YWluZXIgb2YgdGhpcyBlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUgKGVsLCBjb250YWluZXIpIHtcbiAgY29uc3QgYm9keVJlY3QgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoXG4gIH1cbiAgY29uc3QgY3RSZWN0ID0gKGNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSlcbiAgICA/IGJvZHlSZWN0IDogY29udGFpbmVyXG4gICAgPyBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBib2R5UmVjdFxuICByZXR1cm4gaGFzSW50ZXJzZWN0aW9uKFxuICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGN0UmVjdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50VmlzaWJsZSAoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQuJGVsKSB7XG4gICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcihjb21wb25lbnQpXG4gICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkge1xuICAgICAgcmV0dXJuIGhhc0ludGVyc2VjdGlvbihcbiAgICAgICAgY29tcG9uZW50LiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsZXIuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGlzRWxlbWVudFZpc2libGUoY29tcG9uZW50LiRlbClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIFRPRE86IGltcHJvdmUgdGhlIGVmZmljaWVuY3lcbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEFwcGVhciAoY29udGV4dCkge1xuICBpZiAoIWNvbnRleHQpIHJldHVybiBudWxsXG5cbiAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgIGlmIChjb250ZXh0LiRvcHRpb25zICYmIGNvbnRleHQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycykge1xuICAgICAgY29uc3Qgb24gPSBjb250ZXh0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnNcbiAgICAgIGlmIChvbi5hcHBlYXIgfHwgb24uZGlzYXBwZWFyKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIoY29udGV4dClcbiAgICAgICAgbGV0IGlzV2luZG93ID0gZmFsc2VcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHdpbmRvd1xuICAgICAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gc2Nyb2xsZXIuJGVsXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaXNXaW5kb3cgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RTY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldFxuXG4gICAgICAgIGNvbnRleHQuX3Zpc2libGUgPSBpc0VsZW1lbnRWaXNpYmxlKGNvbnRleHQuJGVsLCBpc1dpbmRvdyA/IGRvY3VtZW50LmJvZHkgOiBjb250YWluZXIpXG4gICAgICAgIGlmIChjb250ZXh0Ll92aXNpYmxlICYmIG9uLmFwcGVhcikge1xuICAgICAgICAgIGlmIChvbi5hcHBlYXIuZm4pIHtcbiAgICAgICAgICAgIG9uLmFwcGVhciA9IG9uLmFwcGVhci5mblxuICAgICAgICAgIH1cbiAgICAgICAgICBvbi5hcHBlYXIoY3JlYXRlRXZlbnQoY29udGV4dC4kZWwsICdhcHBlYXInLCB7IGRpcmVjdGlvbjogJ2Rvd24nIH0pKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aHJvdHRsZShldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgdmlzaWJsZSA9IGlzRWxlbWVudFZpc2libGUoY29udGV4dC4kZWwsIGlzV2luZG93ID8gZG9jdW1lbnQuYm9keSA6IGNvbnRhaW5lcilcbiAgICAgICAgICBsZXQgbGlzdGVuZXIgPSBudWxsXG4gICAgICAgICAgbGV0IHR5cGUgPSBudWxsXG4gICAgICAgICAgaWYgKHZpc2libGUgIT09IGNvbnRleHQuX3Zpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnRleHQuX3Zpc2libGUgPSB2aXNpYmxlXG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICBsaXN0ZW5lciA9IG9uLmFwcGVhclxuICAgICAgICAgICAgICB0eXBlID0gJ2FwcGVhcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBsaXN0ZW5lciA9IG9uLmRpc2FwcGVhclxuICAgICAgICAgICAgICB0eXBlID0gJ2Rpc2FwcGVhcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5mbikge1xuICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLmZuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgbGlzdGVuZXIoY3JlYXRlRXZlbnQoY29udGV4dC4kZWwsIHR5cGUsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wID8gJ2Rvd24nIDogJ3VwJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMClcblxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuY29uc3QgQVJSQVlfU1RSSU5HID0gJ1tvYmplY3QgQXJyYXldJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09PSBBUlJBWV9TVFJJTkdcbn1cbiIsIi8qKlxuICogQGZpbGVPdmVydmlldzogcGVyZiBkYXRhIHJlY29yZGVyLlxuICovXG5cbmltcG9ydCB7IGRlYm91bmNlLCBkZXByZXNzIH0gZnJvbSAnLi9mdW5jJ1xuXG4vLyBwZXJmb3JtYW5jZSB0cmFja2VyIGZvciB3ZWV4LlxuY29uc3QgcGVyZiA9IHdpbmRvdy5fd2VleF9wZXJmID0ge1xuICBlYXJsaWVzdEJlZm9yZUNyZWF0ZXM6IFtdLFxuICBsYXRlc3RNb3VudHM6IFtdLFxuICBlYXJsaWVzdEJlZm9yZVVwZGF0ZXM6IFtdLFxuICBsYXRlc3RVcGRhdGVzOiBbXSxcbiAgbGF0ZXN0UmVuZGVyRmluaXNoZXM6IFtdLFxuICAvLyBjcmVhdGVUaW1lOiBlYXJsaWVzdCBiZWZvcmVDcmVhdGUgLT4gbGF0ZXN0IG1vdW50ZWQuXG4gIGNyZWF0ZVRpbWU6IFtdLFxuICAvLyB1cGRhdGVUaW1lOiBlYXJsaWVzdCBiZWZvcmVVcGRhdGUgLT4gbGF0ZXN0IHVwZGF0ZWQuXG4gIHVwZGF0ZVRpbWU6IFtdLFxuICAvLyByZW5kZXJUaW1lOiBlYXJsaWVzdCBiZWZvcmVDcmVhdGUvYmVmb3JlVXBkYXRlIC0+IGxhdGVzdCBpbWcgbG9hZGVkLlxuICByZW5kZXJUaW1lOiBbXVxufVxuXG5jb25zdCBJTUdfUkVDX0lOREVOVCA9IDUwMCAgLy8gcmVjb3JkIGxvYWRpbmcgZXZlbnRzIGFmdGVyIDUwMG1zIHRvd2FyZHMgbGFzdCByZWNvcmRpbmcuXG5cbmxldCBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUgPSAwXG5sZXQgZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lID0gMFxuXG5pZiAoIXBlcmZvcm1hbmNlLm5vdykge1xuICBwZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9XG59XG5cbi8qKlxuICogZ2V0IGZpcnN0IHNjcmVlbiB0aW1lLlxuICovXG5jb25zdCBkZWJvdW5jZWRUYWdJbWcgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIHBlcmYubGF0ZXN0UmVuZGVyRmluaXNoZXMucHVzaChub3cpXG4gIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lLCBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUpXG4gIHBlcmYucmVuZGVyVGltZS5wdXNoKHtcbiAgICBzdGFydCxcbiAgICBlbmQ6IG5vdyxcbiAgICBkdXJhdGlvbjogbm93IC0gc3RhcnRcbiAgfSlcblxuICBjb25zdCBsZW4gPSBwZXJmLnJlbmRlclRpbWUubGVuZ3RoXG4gIHBlcmZbYHNjcmVlblRpbWUke2xlbn1gXSA9IG5vd1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zb2xlLmxvZyhgc2NyZWVuVGltZVske2xlbn1dOiAke25vd30gbXMuYClcbiAgfVxufSwgSU1HX1JFQ19JTkRFTlQpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdJbWcgKCkge1xuICBkZWJvdW5jZWRUYWdJbWcoKVxufVxuXG4vKipcbiAqIHJlY29yZGluZyB0aGUgZWFybGllc3QgJ2JlZm9yZUNyZWF0ZScgdGltZS5cbiAqL1xuY29uc3QgZGVwcmVzc2VkVGFnQmVmb3JlQ3JlYXRlID0gZGVwcmVzcyhmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGVhcmxpZXN0QmVmb3JlQ3JlYXRlVGltZSA9IG5vd1xuICBwZXJmLmVhcmxpZXN0QmVmb3JlQ3JlYXRlcy5wdXNoKG5vdylcbn0sIDI1KVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnQmVmb3JlQ3JlYXRlICgpIHtcbiAgZGVwcmVzc2VkVGFnQmVmb3JlQ3JlYXRlKClcbn1cblxuLyoqXG4gKiByZWNvcmRpbmcgdGhlIGxhdGVzdCAnbW91bnRlZCcgdGltZS5cbiAqL1xuY29uc3QgZGVib3VuY2VkVGFnTW91bnRlZCA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgcGVyZi5sYXRlc3RNb3VudHMucHVzaChub3cpXG4gIHBlcmYuY3JlYXRlVGltZS5wdXNoKHtcbiAgICBzdGFydDogZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lLFxuICAgIGVuZDogbm93LFxuICAgIGR1cmF0aW9uOiBub3cgLSBlYXJsaWVzdEJlZm9yZUNyZWF0ZVRpbWVcbiAgfSlcblxuICBpZiAoIXBlcmYuZmlyc3RBbGxNb3VudGVkVGltZSkge1xuICAgIHBlcmYuZmlyc3RBbGxNb3VudGVkVGltZSA9IG5vd1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc29sZS5sb2coYGZpcnN0IGFsbCBtb3VudGVkIHRpbWU6ICR7bm93fSBtcy5gKVxuICAgIH1cbiAgfVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdNb3VudGVkICgpIHtcbiAgZGVib3VuY2VkVGFnTW91bnRlZCgpXG59XG5cbi8qKlxuICogcmVjb3JkaW5nIHRoZSBlYXJsaWVzdCAnYmVmb3JlVXBkYXRlJyB0aW1lLlxuICovXG5jb25zdCBkZXByZXNzZWRUYWdCZWZvcmVVcGRhdGUgPSBkZXByZXNzKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgZWFybGllc3RCZWZvcmVVcGRhdGVUaW1lID0gbm93XG4gIHBlcmYuZWFybGllc3RCZWZvcmVVcGRhdGVzLnB1c2gobm93KVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdCZWZvcmVVcGRhdGUgKCkge1xuICBkZXByZXNzZWRUYWdCZWZvcmVVcGRhdGUoKVxufVxuXG4vKipcbiAqIHJlY29yZGluZyB0aGUgbGF0ZXN0ICd1cGRhdGVkJyB0aW1lLlxuICovXG5jb25zdCBkZWJvdW5jZWRUYWdVcGRhdGVkID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKVxuICBwZXJmLmxhdGVzdFVwZGF0ZXMucHVzaChub3cpXG4gIHBlcmYudXBkYXRlVGltZS5wdXNoKHtcbiAgICBzdGFydDogZWFybGllc3RCZWZvcmVVcGRhdGVUaW1lLFxuICAgIGVuZDogbm93LFxuICAgIGR1cmF0aW9uOiBub3cgLSBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWVcbiAgfSlcbn0sIDI1KVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnVXBkYXRlZCAoKSB7XG4gIGRlYm91bmNlZFRhZ1VwZGF0ZWQoKVxufVxuIiwiaW1wb3J0IHsgaXNFbGVtZW50VmlzaWJsZSB9IGZyb20gJy4vY29tcG9uZW50J1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIGRpc3BhdGNoRXZlbnQgfSBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuL2Z1bmMnXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi90eXBlJ1xuaW1wb3J0IHsgdGFnSW1nIH0gZnJvbSAnLi9wZXJmJ1xuXG5jb25zdCBTQ1JFRU5fUkVDX0xJTUlUID0gMyAgLy8ganVzdCByZWNvcmQgdGhlIGZpcnN0IDMgdGltZXMgZm9yIHNjcmVlbi1yZW5kZXIgZmluaXNoaW5nLlxubGV0IGRvUmVjb3JkID0gdHJ1ZVxuXG5mdW5jdGlvbiBwcmVMb2FkSW1nIChzcmMsIGxvYWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrID8gbG9hZENhbGxiYWNrLmJpbmQoaW1nKSA6IG51bGxcbiAgaW1nLm9uZXJyb3IgPSBlcnJvckNhbGxiYWNrID8gZXJyb3JDYWxsYmFjay5iaW5kKGltZykgOiBudWxsXG4gIGltZy5zcmMgPSBzcmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3JjIChpdGVtLCBzcmMsIHBsYWNlaG9sZGVyU3JjKSB7XG4gIGlmICghc3JjKSB7IHJldHVybiB9XG4gIGZ1bmN0aW9uIGZpbmFsbENiICgpIHtcbiAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnaW1nLXNyYycpXG4gICAgaWYgKGRvUmVjb3JkKSB7XG4gICAgICBpZiAod2luZG93Ll93ZWV4X3BlcmYucmVuZGVyVGltZS5sZW5ndGggPCBTQ1JFRU5fUkVDX0xJTUlUKSB7XG4gICAgICAgIHRhZ0ltZygpIC8vIHRhZyBsYXN0ZXN0IGltZyBvbmxvYWQgdGltZS5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkb1JlY29yZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByZUxvYWRJbWcoc3JjLCBmdW5jdGlvbiAoKSB7XG4gICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3JjfSlgXG4gICAgY29uc3QgeyB3aWR0aDogbmF0dXJhbFdpZHRoLCBoZWlnaHQ6IG5hdHVyYWxIZWlnaHQgfSA9IHRoaXNcbiAgICBkaXNwYXRjaEV2ZW50KGl0ZW0sIGNyZWF0ZUV2ZW50KGl0ZW0sICdsb2FkJywgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSkpXG4gICAgZmluYWxsQ2IoKVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2hFdmVudChpdGVtLCBjcmVhdGVFdmVudChpdGVtLCAnZXJyb3InKSlcbiAgICBpZiAocGxhY2Vob2xkZXJTcmMpIHtcbiAgICAgIHByZUxvYWRJbWcocGxhY2Vob2xkZXJTcmMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGxhY2Vob2xkZXJTcmN9KWBcbiAgICAgIH0pXG4gICAgfVxuICAgIGZpbmFsbENiKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVMYXp5bG9hZCAoZWwsIGlnbm9yZVZpc2liaWxpdHkpIHtcbiAgaWYgKGlzQXJyYXkoZWwpKSB7XG4gICAgcmV0dXJuIGVsLmZvckVhY2goY3QgPT4gZmlyZUxhenlsb2FkKGN0KSlcbiAgfVxuICBjb25zdCBpbWdzID0gKGVsIHx8IGRvY3VtZW50LmJvZHkpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbWctc3JjXScpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGltZ3NbaV1cbiAgICBpZiAoaWdub3JlVmlzaWJpbGl0eSkge1xuICAgICAgYXBwbHlTcmMoaW1nLCBpbWcuZ2V0QXR0cmlidXRlKCdpbWctc3JjJyksIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1wbGFjZWhvbGRlcicpKVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0VsZW1lbnRWaXNpYmxlKGltZywgZWwpKSB7XG4gICAgICBhcHBseVNyYyhpbWcsIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1zcmMnKSwgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXBsYWNlaG9sZGVyJykpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gYWxyZWF5IG91dCBvZiB2aWV3LCBubyBuZWVkIHRvIGNvbXBhcmUgYW55IG1vcmUuXG4gICAgICAvLyBicmVha1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNhY2hlIGEgdGhyb3R0bGUgbGF6eWxvYWQgZnVuY3Rpb24gZm9yIGV2ZXJ5IGNvbnRhaW5lciBlbGVtZW50XG4gKiBvbmNlIGZvciBkaWZmZXJlbnQgd2FpdCB0aW1lcyBzZXBhcmF0ZS5cbiAqICAgdGhlIGFyY2hpdGVjdHVyZSBvZiB0aGlzIGNhY2hlOlxuICogICAgICBjYWNoZToge1xuICogICAgICAgIGVsLmlkOiB7XG4gKiAgICAgICAgICB3YWl0OiB0aHJvdHRsZWRGdW5jdGlvbiAoKSB7IC4uLiB9XG4gKiAgICAgICAgfVxuICogICAgICB9XG4gKi9cbmNvbnN0IGNhY2hlID0ge31cbmxldCBfdWlkID0gMFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRocm90dGxlTGF6eWxvYWQgKHdhaXQgPSAxNiwgZWwgPSBkb2N1bWVudC5ib2R5KSB7XG4gIGxldCBpZCA9IGVsLmRhdGFzZXQudGhyb3R0bGVJZFxuICBpZiAoIWlkKSB7XG4gICAgaWQgPSBfdWlkKytcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyb3R0bGUtaWQnLCBpZClcbiAgfVxuXG4gICFjYWNoZVtpZF0gJiYgKGNhY2hlW2lkXSA9IHt9KVxuICBjb25zdCB0aHJvdHRsZWQgPSBjYWNoZVtpZF1bd2FpdF0gfHxcbiAgICAoY2FjaGVbaWRdW3dhaXRdID0gdGhyb3R0bGUoXG4gICAgICBmaXJlTGF6eWxvYWQuYmluZCh0aGlzLCBlbCksXG4gICAgICBwYXJzZUZsb2F0KHdhaXQpLFxuICAgICAgLy8gdHJ1ZSBmb3IgY2FsbExhc3RUaW1lLlxuICAgICAgLy8gdG8gdHJpZ2dlciBvbmNlIG1vcmUgdGltZSBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQgZnVuY3Rpb24gY2FsbGVkIHdpdGggYSBsaXR0bGUgbW9yZSBkZWxheS5cbiAgICAgIHRydWUpXG4gICAgKVxuICByZXR1cm4gdGhyb3R0bGVkXG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2Z1bmMnXG5cbmNvbnN0IHZhbHVlTWFwID0ge1xuICBhbGlnbkl0ZW1zOiB7XG4gICAgc3RyZXRjaDogJ3N0cmV0Y2gnLFxuICAgICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgICBjZW50ZXI6ICdjZW50ZXInXG4gIH0sXG5cbiAgZmxleERpcmVjdGlvbjoge1xuICAgIHJvdzogJ2hvcml6b250YWwnLFxuICAgIGNvbHVtbjogJ3ZlcnRpY2FsJ1xuICB9LFxuXG4gIGp1c3RpZnlDb250ZW50OiB7XG4gICAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAgICdmbGV4LWVuZCc6ICdlbmQnLFxuICAgIGNlbnRlcjogJ2NlbnRlcicsXG4gICAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyAvLyBKdXN0IHNhbWUgYXMgYHNwYWNlLWJldHdlZW5gXG4gIH1cbn1cblxuY29uc3QgZmlsdGVycyA9IHtcbiAgZmxleCAodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy13ZWJraXQtYm94LWZsZXgnOiB2YWx1ZSxcbiAgICAgICctd2Via2l0LWZsZXgnOiB2YWx1ZSxcbiAgICAgICdmbGV4JzogdmFsdWVcbiAgICB9XG4gIH0sXG5cbiAgJ2FsaWduLWl0ZW1zJyAodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy13ZWJraXQtYm94LWFsaWduJzogdmFsdWVNYXAuYWxpZ25JdGVtc1t2YWx1ZV0sXG4gICAgICAnLXdlYmtpdC1hbGlnbi1pdGVtcyc6IHZhbHVlLFxuICAgICAgJ2FsaWduLWl0ZW1zJzogdmFsdWVcbiAgICB9XG4gIH0sXG5cbiAgJ2FsaWduLXNlbGYnICh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAnLXdlYmtpdC1hbGlnbi1zZWxmJzogdmFsdWUsXG4gICAgICAnYWxpZ24tc2VsZic6IHZhbHVlXG4gICAgfVxuICB9LFxuXG4gICdmbGV4LWRpcmVjdGlvbicgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICctd2Via2l0LWJveC1vcmllbnQnOiB2YWx1ZU1hcC5mbGV4RGlyZWN0aW9uW3ZhbHVlXSxcbiAgICAgICctd2Via2l0LWZsZXgtZGlyZWN0aW9uJzogdmFsdWUsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICAnanVzdGlmeS1jb250ZW50JyAodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy13ZWJraXQtYm94LXBhY2snOiB2YWx1ZU1hcC5qdXN0aWZ5Q29udGVudFt2YWx1ZV0sXG4gICAgICAnLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQnOiB2YWx1ZSxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiB2YWx1ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplIChzdHlsZXMpIHtcbiAgY29uc3QgcmVzID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlc1trZXldID0gc3R5bGVzW2tleV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRlbmQocmVzLCBmaWx0ZXJzW2tleV0oc3R5bGVzW2tleV0pKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICcuL2ZsZXgnXG5cbi8qKlxuICogcmVtb3ZlIGNvbW1lbnRzIGZyb20gYSBjc3NUZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbUNvbW1lbnQgKGNzc1RleHQpIHtcbiAgcmV0dXJuIGNzc1RleHQucmVwbGFjZSgvKD86XFwvXFwqKVteKl0qXFwqXFwvL2csICcnKVxufVxuXG4vKipcbiAqIGFkZCBmbGV4IHByZWZpeGVzIGZvciBjb21wYXRpYmlsaXR5IGNvbmlzZGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZXMgKHN0eWxlKSB7XG4gIHJldHVybiBub3JtYWxpemUoc3R5bGUpXG59XG5cbmxldCBzdXBwb3J0ID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydFN0aWNreSAoKSB7XG4gIGlmIChzdXBwb3J0ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRcbiAgfVxuICBjb25zdCBlbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGVsZW1lbnQuc3R5bGVcbiAgZWxlbWVudFN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246LXdlYmtpdC1zdGlja3k7cG9zaXRpb246c3RpY2t5OydcbiAgc3VwcG9ydCA9IGVsZW1lbnRTdHlsZS5wb3NpdGlvbi5pbmRleE9mKCdzdGlja3knKSAhPT0gLTFcbiAgcmV0dXJuIHN1cHBvcnRcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZnVuYydcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQnXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vbGF6eWxvYWQnXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJ1xuZXhwb3J0ICogZnJvbSAnLi90eXBlJ1xuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICovXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG59KVxuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pXG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9LZWJhYiAobmFtZSkge1xuICBpZiAoIW5hbWUpIHsgcmV0dXJuICcnIH1cbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoZywgZzEpIHtcbiAgICByZXR1cm4gYC0ke2cxLnRvTG93ZXJDYXNlKCl9YFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU3R5bGUgKGNzcywgc3R5bGVJZCwgcmVwbGFjZSkge1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKVxuICBpZiAoc3R5bGUgJiYgcmVwbGFjZSkge1xuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpXG4gICAgc3R5bGUgPSBudWxsXG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgc3R5bGVJZCAmJiAoc3R5bGUuaWQgPSBzdHlsZUlkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIH1cbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRGcmFtZSAoY2FsbGJhY2spIHtcbiAgY29uc3QgcnVubmVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB8fCAoY2IgPT4gc2V0VGltZW91dChjYiwgMTYpKVxuICBydW5uZXIoY2FsbGJhY2spXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NTU1RleHQgKG9iamVjdCkge1xuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGlmIChvYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGNzc1RleHQgKz0gYCR7aHlwaGVuYXRlKGtleSl9OiR7b2JqZWN0W2tleV19O2BcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNzc1RleHRcbn1cbiIsImltcG9ydCB7IG5leHRGcmFtZSwgdG9DU1NUZXh0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25PbmNlICh2bm9kZSwgY29uZmlnLCBjYWxsYmFjaykge1xuICBjb25zdCBkdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbiB8fCAxMDAwIC8vIG1zXG4gIGNvbnN0IHRpbWluZyA9IGNvbmZpZy50aW1pbmdGdW5jdGlvbiB8fCAnZWFzZSdcbiAgY29uc3QgZGVsYXkgPSBjb25maWcuZGVsYXkgfHwgMCAgLy8gbXNcblxuICAvLyBUT0RPOiBwYXJzZSB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgY29uc3QgdHJhbnNpdGlvblZhbHVlID0gYGFsbCAke2R1cmF0aW9ufW1zICR7dGltaW5nfSAke2RlbGF5fW1zYFxuXG4gIGNvbnN0IGRvbSA9IHZub2RlLiRlbFxuICBjb25zdCB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuICAgIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gJydcbiAgICBkb20uc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnXG4gICAgY2FsbGJhY2soKVxuICB9XG5cbiAgZG9tLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcblxuICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgIGRvbS5zdHlsZS5jc3NUZXh0ICs9IHRvQ1NTVGV4dChjb25maWcuc3R5bGVzIHx8IHt9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjYWxsYmFja1xuICAgKi9cbiAgdHJhbnNpdGlvbiAodm5vZGUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBNYWtlIHN1cmUgdGhlIHRyYW5zaXRpb24gaXMgb25seSBydW4gb25jZVxuICAgIHJldHVybiB0cmFuc2l0aW9uT25jZSh2bm9kZSwgY29uZmlnLCAoKSA9PiB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FtZWxUb0tlYmFiLCBhcHBlbmRTdHlsZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRTY3JvbGxlciAodm5vZGUpIHtcbiAgaWYgKCF2bm9kZSkgcmV0dXJuIG51bGxcbiAgaWYgKHZub2RlLndlZXhUeXBlID09PSAnc2Nyb2xsZXInIHx8IHZub2RlLndlZXhUeXBlID09PSAnbGlzdCcpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxuICByZXR1cm4gZ2V0UGFyZW50U2Nyb2xsZXIodm5vZGUuJHBhcmVudClcbn1cblxuZnVuY3Rpb24gbm93ICgpIHtcbiAgY29uc3Qgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHdpbmRvdy5wZXJmb3JtYW5jZSkgOiBEYXRlLm5vd1xuICByZXR1cm4gbm93KClcbn1cblxuZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCAoZFN1ZmZpeCwgcG9zaXRpb24pIHtcbiAgdGhpc1tgc2Nyb2xsJHtkU3VmZml4fWBdID0gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICogQG1ldGhvZCBzdGVwXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBzdGVwIChjb250ZXh0KSB7XG4gIC8vIGNhbGwgbWV0aG9kIGFnYWluIG9uIG5leHQgYXZhaWxhYmxlIGZyYW1lXG4gIGNvbnRleHQuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3aW5kb3csIGNvbnRleHQpKVxuXG4gIGNvbnN0IHRpbWUgPSBub3coKVxuICBsZXQgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gNDY4XG5cbiAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWRcblxuICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gIGNvbnN0IHZhbHVlID0gZWFzZShlbGFwc2VkKVxuXG4gIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGNvbnRleHQuc3RhcnRQb3NpdGlvbiArIChjb250ZXh0LnBvc2l0aW9uIC0gY29udGV4dC5zdGFydFBvc2l0aW9uKSAqIHZhbHVlXG5cbiAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGNvbnRleHQuZFN1ZmZpeCwgY3VycmVudFBvc2l0aW9uKVxuXG4gIC8vIHJldHVybiB3aGVuIGVuZCBwb2ludHMgaGF2ZSBiZWVuIHJlYWNoZWRcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gY29udGV4dC5wb3NpdGlvbikge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShjb250ZXh0LmZyYW1lKVxuICAgIHJldHVyblxuICB9XG59XG5cbi8qKlxuICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gKiBAbWV0aG9kIGVhc2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBlYXNlIChrKSB7XG4gIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogc2Nyb2xsVG9FbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIHtvZmZzZXQ6TnVtYmVyfVxuICAgKiAgIHBzOiBzY3JvbGwtdG8gaGFzICdlYXNlJyBhbmQgJ2R1cmF0aW9uJyhtcykgYXMgb3B0aW9ucy5cbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKHZub2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZSlcbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb24gPSBzY3JvbGxlci5zY3JvbGxEaXJlY3Rpb24gfHwgJ3ZlcnRpY2FsJ1xuXG4gICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCAmJiB2bm9kZS4kZWwpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSBsaXN0LCB0aGVuIHRoZSBsaXN0Vm5vZGUuc2Nyb2xsRGlyZWN0aW9uIGlzIHVuZGVmaW5lZC4ganVzdFxuICAgICAgLy8gYXNzdW0gaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWUgJ3ZlcnRpY2FsJy5cbiAgICAgIGNvbnN0IGRTdWZmaXggPSAoe1xuICAgICAgICBob3Jpem9udGFsOiAnTGVmdCcsXG4gICAgICAgIHZlcnRpY2FsOiAnVG9wJ1xuICAgICAgfSlbc2Nyb2xsRGlyZWN0aW9uXVxuICAgICAgbGV0IG9mZnNldCA9IHZub2RlLiRlbFtgb2Zmc2V0JHtkU3VmZml4fWBdXG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9mZnNldCArPSBOdW1iZXIob3B0aW9ucy5vZmZzZXQpIHx8IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Z1ZSBSZW5kZXJdIFRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIFwic2Nyb2xsVG9FbGVtZW50XCIgaXMgcmVxdWlyZWQsICdcbiAgICAgICAgICArICdvdGhlcndpc2UgaXQgbWF5IG5vdCB3b3JrcyB3ZWxsIG9uIG5hdGl2ZS4nKVxuICAgICAgfVxuXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsZXIuJGVsLFxuICAgICAgICBzdGFydFRpbWU6IG5vdygpLFxuICAgICAgICBmcmFtZTogbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogc2Nyb2xsZXIuJGVsW2BzY3JvbGwke2RTdWZmaXh9YF0sXG4gICAgICAgIHBvc2l0aW9uOiBvZmZzZXQsXG4gICAgICAgIG1ldGhvZDogc2Nyb2xsRWxlbWVudCxcbiAgICAgICAgZFN1ZmZpeDogZFN1ZmZpeFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGdldENvbXBvbmVudFJlY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBnZXRDb21wb25lbnRSZWN0OiBmdW5jdGlvbiAodm5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgcmVzdWx0OiBmYWxzZSB9XG5cbiAgICBpZiAodm5vZGUgJiYgdm5vZGUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIGluZm8ucmVzdWx0ID0gdHJ1ZVxuICAgICAgaW5mby5zaXplID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZub2RlICYmIHZub2RlLiRlbCkge1xuICAgICAgaW5mby5yZXN1bHQgPSB0cnVlXG4gICAgICBpbmZvLnNpemUgPSB2bm9kZS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gaW5mby5yZXN1bHQgPyBpbmZvIDoge1xuICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgIGVyck1zZzogJ0lsbGVnYWwgcGFyYW1ldGVyJ1xuICAgIH1cblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG1lc3NhZ2VcbiAgfSxcblxuICAvKipcbiAgICogZm9yIGFkZGluZyBmb250RmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGZvbnRGYWNlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXMgcnVsZXNcbiAgICovXG4gIGFkZFJ1bGU6IGZ1bmN0aW9uIChrZXksIHN0eWxlcykge1xuICAgIGtleSA9IGNhbWVsVG9LZWJhYihrZXkpXG4gICAgbGV0IHN0eWxlc1RleHQgPSAnJ1xuICAgIGZvciAoY29uc3QgayBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgc3R5bGVzVGV4dCArPSBjYW1lbFRvS2ViYWIoaykgKyAnOicgKyBzdHlsZXNba10gKyAnOydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gYEAke2tleX17JHtzdHlsZXNUZXh0fX1gXG4gICAgYXBwZW5kU3R5bGUoc3R5bGVUZXh0LCAnZG9tLWFkZGVkLXJ1bGVzJylcbiAgfVxufVxuIiwiY29uc3QgcXVldWUgPSBbXVxubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlXG5sZXQgdG9hc3RXaW5cbmNvbnN0IFRPQVNUX1dJTl9DTEFTU19OQU1FID0gJ3dlZXgtdG9hc3QnXG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSAwLjhcblxuZnVuY3Rpb24gc2hvd1RvYXN0V2luZG93IChtc2csIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG4gIGlmICghdG9hc3RXaW4pIHtcbiAgICB0b2FzdFdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9hc3RXaW4uY2xhc3NMaXN0LmFkZChUT0FTVF9XSU5fQ0xBU1NfTkFNRSwgJ2hpZGUnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3RXaW4pXG4gIH1cbiAgdG9hc3RXaW4udGV4dENvbnRlbnQgPSBtc2dcbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gaGlkZVRvYXN0V2luZG93IChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfVxuICBpZiAoIXRvYXN0V2luKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAobXNnLCBkdXJhdGlvbikge1xuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgbXNnOiBtc2csXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTlxuICAgIH0pXG4gICAgdGhpcy5zaG93KClcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcblxuICAgIC8vIEFsbCBtZXNzYWdlcyBoYWQgYmVlbiB0b2FzdGVkIGFscmVhZHksIHNvIHJlbW92ZSB0aGUgdG9hc3Qgd2luZG93LFxuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICB0b2FzdFdpbiAmJiB0b2FzdFdpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0V2luKVxuICAgICAgdG9hc3RXaW4gPSBudWxsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB0aGUgcHJldmlvdXMgdG9hc3QgaXMgbm90IGVuZGVkIHlldC5cbiAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgdG9hc3RJbmZvID0gcXVldWUuc2hpZnQoKVxuICAgIHNob3dUb2FzdFdpbmRvdyh0b2FzdEluZm8ubXNnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlkZVRvYXN0V2luZG93KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuc2hvdygpXG4gICAgICAgIH0pXG4gICAgICB9LCB0b2FzdEluZm8uZHVyYXRpb24gKiAxMDAwKVxuICAgIH0pXG4gIH1cbn1cbiIsIlxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBtb2RhbC5cbmNvbnN0IE1PREFMX1dSQVBfQ0xBU1MgPSAnd2VleC1tb2RhbC13cmFwJ1xuY29uc3QgTU9EQUxfTk9ERV9DTEFTUyA9ICd3ZWV4LW1vZGFsLW5vZGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsICgpIHtcbiAgdGhpcy53cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNT0RBTF9XUkFQX0NMQVNTKVxuICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1PREFMX05PREVfQ0xBU1MpXG4gIGlmICghdGhpcy53cmFwKSB7XG4gICAgdGhpcy5jcmVhdGVXcmFwKClcbiAgfVxuICBpZiAoIXRoaXMubm9kZSkge1xuICAgIHRoaXMuY3JlYXRlTm9kZSgpXG4gIH1cbiAgdGhpcy5jbGVhck5vZGUoKVxuICB0aGlzLmNyZWF0ZU5vZGVDb250ZW50KClcbiAgdGhpcy5iaW5kRXZlbnRzKClcbn1cblxuTW9kYWwucHJvdG90eXBlID0ge1xuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy53cmFwKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxuICAgIHRoaXMud3JhcCA9IG51bGxcbiAgICB0aGlzLm5vZGUgPSBudWxsXG4gIH0sXG5cbiAgY3JlYXRlV3JhcDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy53cmFwLmNsYXNzTmFtZSA9IE1PREFMX1dSQVBfQ0xBU1NcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcClcbiAgfSxcblxuICBjcmVhdGVOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChNT0RBTF9OT0RFX0NMQVNTLCAnaGlkZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXG4gIH0sXG5cbiAgY2xlYXJOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmlubmVySFRNTCA9ICcnXG4gIH0sXG5cbiAgY3JlYXRlTm9kZUNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvIG5vdGhpbmcuXG4gICAgLy8gY2hpbGQgY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gIH0sXG5cbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0IChjb25maWcpIHtcbiAgdGhpcy5tc2cgPSBjb25maWcubWVzc2FnZSB8fCAnJ1xuICB0aGlzLmNhbGxiYWNrID0gY29uZmlnLmNhbGxiYWNrXG4gIHRoaXMub2tUaXRsZSA9IGNvbmZpZy5va1RpdGxlIHx8ICdPSydcbiAgTW9kYWwuY2FsbCh0aGlzKVxuICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnd2VleC1hbGVydCcpXG59XG5cbkFsZXJ0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5BbGVydC5wcm90b3R5cGUuY3JlYXRlTm9kZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ09OVEVOVF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXNnLmNsYXNzTGlzdC5hZGQoTVNHX0NMQVNTKVxuICBtc2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tc2cpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1zZylcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0dST1VQX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKEJVVFRPTl9DTEFTUywgJ2FsZXJ0LW9rJylcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuQWxlcnQucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGFsLnByb3RvdHlwZS5iaW5kRXZlbnRzLmNhbGwodGhpcylcbiAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICB9LmJpbmQodGhpcykpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm0gKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtY29uZmlybScpXG59XG5cbkNvbmZpcm0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb2RhbC5wcm90b3R5cGUpXG5cbkNvbmZpcm0ucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKEJVVFRPTl9HUk9VUF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxuICBjb25zdCBidG5PayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bk9rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ0bk9rLmNsYXNzTGlzdC5hZGQoJ2J0bi1vaycsIEJVVFRPTl9DTEFTUylcbiAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuQ2FuY2VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY2FuY2VsVGl0bGUpKVxuICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcsIEJVVFRPTl9DTEFTUylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuT2spXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bkNhbmNlbClcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxufVxuXG5Db25maXJtLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBNb2RhbC5wcm90b3R5cGUuYmluZEV2ZW50cy5jYWxsKHRoaXMpXG4gIGNvbnN0IGJ0bk9rID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tb2snKVxuICBjb25zdCBidG5DYW5jZWwgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1jYW5jZWwnKVxuICBidG5Pay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh0aGlzLm9rVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHRoaXMuY2FuY2VsVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zdCBDT05URU5UX0NMQVNTID0gJ2NvbnRlbnQnXG5jb25zdCBNU0dfQ0xBU1MgPSAnY29udGVudC1tc2cnXG5jb25zdCBCVVRUT05fR1JPVVBfQ0xBU1MgPSAnYnRuLWdyb3VwJ1xuY29uc3QgQlVUVE9OX0NMQVNTID0gJ2J0bidcbmNvbnN0IElOUFVUX1dSQVBfQ0xBU1MgPSAnaW5wdXQtd3JhcCdcbmNvbnN0IElOUFVUX0NMQVNTID0gJ2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9tcHQgKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuZGVmYXVsdE1zZyA9IGNvbmZpZy5kZWZhdWx0IHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtcHJvbXB0Jylcbn1cblxuUHJvbXB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5Qcm9tcHQucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgaW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoSU5QVVRfV1JBUF9DTEFTUylcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXApXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKElOUFVUX0NMQVNTKVxuICBpbnB1dC50eXBlID0gJ3RleHQnXG4gIGlucHV0LmF1dG9mb2N1cyA9IHRydWVcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmRlZmF1bHRNc2dcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChCVVRUT05fR1JPVVBfQ0xBU1MpXG4gIGNvbnN0IGJ0bk9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuT2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5va1RpdGxlKSlcbiAgYnRuT2suY2xhc3NMaXN0LmFkZCgnYnRuLW9rJywgQlVUVE9OX0NMQVNTKVxuICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5DYW5jZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jYW5jZWxUaXRsZSkpXG4gIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tY2FuY2VsJywgQlVUVE9OX0NMQVNTKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5PaylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG59XG5cblByb21wdC5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kYWwucHJvdG90eXBlLmJpbmRFdmVudHMuY2FsbCh0aGlzKVxuICBjb25zdCBidG5PayA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLW9rJylcbiAgY29uc3QgYnRuQ2FuY2VsID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tY2FuY2VsJylcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgYnRuT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5va1RpdGxlLFxuICAgICAgZGF0YTogdmFsXG4gICAgfSlcbiAgfS5iaW5kKHRoaXMpKVxuICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5jYW5jZWxUaXRsZSxcbiAgICAgIGRhdGE6IHZhbFxuICAgIH0pXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCB0b2FzdCBmcm9tICcuL3RvYXN0J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuL2NvbmZpcm0nXG5pbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0J1xuXG4vLyBUT0RPOiByZXdyaXRlIHRoZSBtb2RhbCBzdHlsZXNcbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvLyBkdXJhdGlvbjogZGVmYXVsdCBpcyAwLjggc2Vjb25kcy5cbiAgdG9hc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB0b2FzdC5wdXNoKGNvbmZpZy5tZXNzYWdlLCBjb25maWcuZHVyYXRpb24pXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGFsZXJ0OiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIGNvbmZpZy5jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG4gICAgbmV3IEFsZXJ0KGNvbmZpZykuc2hvdygpXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbmNlbFRpdGxlOiB0aXRsZSBvZiBjYW5jZWwgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGNvbmZpcm06IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgQ29uZmlybShjb25maWcpLnNob3coKVxuICB9LFxuXG4gIC8vIGNvbmZpZzpcbiAgLy8gIC0gbWVzc2FnZTogc3RyaW5nXG4gIC8vICAtIG9rVGl0bGU6IHRpdGxlIG9mIG9rIGJ1dHRvblxuICAvLyAgLSBjYW5jZWxUaXRsZTogdGl0bGUgb2YgY2FuY2VsIGJ1dHRvblxuICAvLyAgLSBjYWxsYmFja1xuICBwcm9tcHQ6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgUHJvbXB0KGNvbmZpZykuc2hvdygpXG4gIH1cbn1cbiIsIi8qKlxuICogTmF2aWdhdG9yIG1vZHVsZVxuICovXG5cbi8vIFRPRE86IGNvbmZpZy5hbmltYXRlZFxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLnVybFxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG59XG4iLCIvKipcbiAqIFdlYnZpZXcgbW9kdWxlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnb0JhY2sgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0JhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvQmFjaygpXG4gICAgfVxuICB9LFxuICBnb0ZvcndhcmQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0ZvcndhcmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvRm9yd2FyZCgpXG4gICAgfVxuICB9LFxuICByZWxvYWQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5yZWxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLnJlbG9hZCgpXG4gICAgfVxuICB9XG59XG4iLCIvLyBtb2R1bGVzIGZyb20gcmVuZGVyL2Jyb3dlc3JcbmltcG9ydCBFdmVudCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvZXZlbnQnXG5pbXBvcnQgR2VvbG9jYXRpb24gZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL2dlb2xvY2F0aW9uJ1xuaW1wb3J0IFBhZ2VJbmZvIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9wYWdlSW5mbydcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlJ1xuaW1wb3J0IFN0cmVhbSBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvc3RyZWFtJ1xuaW1wb3J0IENsaXBib2FyZCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvY2xpcGJvYXJkJ1xuXG4vLyBjdXN0b20gbW9kdWxlc1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbidcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCdcbmltcG9ydCBuYXZpZ2F0b3IgZnJvbSAnLi9uYXZpZ2F0b3InXG5pbXBvcnQgd2VidmlldyBmcm9tICcuL3dlYnZpZXcnXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGFuaW1hdGlvbixcbiAgZG9tLFxuICBtb2RhbCxcbiAgbmF2aWdhdG9yLFxuICB3ZWJ2aWV3XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlV2VleE1vZHVsZSAobmFtZSkge1xuICBpZiAobW9kdWxlc1tuYW1lXSkge1xuICAgIHJldHVybiBtb2R1bGVzW25hbWVdXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0ICh3ZWV4KSB7XG4gICAgd2VleC5pbnN0YWxsKEV2ZW50KVxuICAgIHdlZXguaW5zdGFsbChHZW9sb2NhdGlvbilcbiAgICB3ZWV4Lmluc3RhbGwoUGFnZUluZm8pXG4gICAgd2VleC5pbnN0YWxsKFN0b3JhZ2UpXG4gICAgd2VleC5pbnN0YWxsKFN0cmVhbSlcbiAgICB3ZWV4Lmluc3RhbGwoQ2xpcGJvYXJkKVxuICB9XG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ2YWxcIix7dmFsdWU6YS50b1N0cmluZygpLGVudW1lcmFibGU6ITB9KSx0aGlzLmd0PWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKT4wfSx0aGlzLmd0ZT1mdW5jdGlvbihhKXtyZXR1cm4gYy5jb21wYXJlKHRoaXMsYSk+PTB9LHRoaXMubHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPDB9LHRoaXMubHRlPWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKTw9MH0sdGhpcy5lcT1mdW5jdGlvbihhKXtyZXR1cm4gMD09PWMuY29tcGFyZSh0aGlzLGEpfX1iLmVudj1iLmVudnx8e30sYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx9LGMucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy52YWwuc3BsaXQoXCIuXCIpLGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1wYXJzZUludChhW2NdLDEwKTtpc05hTihkKSYmKGQ9MCk7dmFyIGU9ZC50b1N0cmluZygpO2UubGVuZ3RoPDUmJihlPUFycmF5KDYtZS5sZW5ndGgpLmpvaW4oXCIwXCIpK2UpLGIucHVzaChlKSwxPT09Yi5sZW5ndGgmJmIucHVzaChcIi5cIil9cmV0dXJuIHBhcnNlRmxvYXQoYi5qb2luKFwiXCIpKX0sYy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7YT1hLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpLGI9Yi50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RofHxjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9cGFyc2VJbnQoYVtjXSwxMCksZT1wYXJzZUludChiW2NdLDEwKTtpZih3aW5kb3cuaXNOYU4oZCkmJihkPTApLHdpbmRvdy5pc05hTihlKSYmKGU9MCksZT5kKXJldHVybi0xO2lmKGQ+ZSlyZXR1cm4gMX1yZXR1cm4gMH0sYi52ZXJzaW9uPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgYyhhKX19KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpO2lmKGIuZW52LnBhcmFtcz17fSxjKWZvcih2YXIgZD1jLnNwbGl0KFwiJlwiKSxlPTA7ZTxkLmxlbmd0aDtlKyspe2RbZV09ZFtlXS5zcGxpdChcIj1cIik7dHJ5e2IuZW52LnBhcmFtc1tkW2VdWzBdXT1kZWNvZGVVUklDb21wb25lbnQoZFtlXVsxXSl9Y2F0Y2goZil7Yi5lbnYucGFyYW1zW2RbZV1bMF1dPWRbZV1bMV19fX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZD1hLm5hdmlnYXRvci51c2VyQWdlbnQ7aWYoYz1kLm1hdGNoKC9XaW5kb3dzXFxzUGhvbmVcXHMoPzpPU1xccyk/KFtcXGRcXC5dKykvKSliLmVudi5vcz17bmFtZTpcIldpbmRvd3MgUGhvbmVcIixpc1dpbmRvd3NQaG9uZTohMCx2ZXJzaW9uOmNbMV19O2Vsc2UgaWYoZC5tYXRjaCgvU2FmYXJpLykmJihjPWQubWF0Y2goL0FuZHJvaWRbXFxzXFwvXShbXFxkXFwuXSspLykpKWIuZW52Lm9zPXt2ZXJzaW9uOmNbMV19LGQubWF0Y2goL01vYmlsZVxccytTYWZhcmkvKT8oYi5lbnYub3MubmFtZT1cIkFuZHJvaWRcIixiLmVudi5vcy5pc0FuZHJvaWQ9ITApOihiLmVudi5vcy5uYW1lPVwiQW5kcm9pZFBhZFwiLGIuZW52Lm9zLmlzQW5kcm9pZFBhZD0hMCk7ZWxzZSBpZihjPWQubWF0Y2goLyhpUGhvbmV8aVBhZHxpUG9kKS8pKXt2YXIgZT1jWzFdO2M9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5vcz17bmFtZTplLGlzSVBob25lOlwiaVBob25lXCI9PT1lfHxcImlQb2RcIj09PWUsaXNJUGFkOlwiaVBhZFwiPT09ZSxpc0lPUzohMCx2ZXJzaW9uOmNbMV0uc3BsaXQoXCJfXCIpLmpvaW4oXCIuXCIpfX1lbHNlIGIuZW52Lm9zPXtuYW1lOlwidW5rbm93blwiLHZlcnNpb246XCIwLjAuMFwifTtiLnZlcnNpb24mJihiLmVudi5vcy52ZXJzaW9uPWIudmVyc2lvbihiLmVudi5vcy52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQ9YS5uYXZpZ2F0b3IudXNlckFnZW50OyhjPWQubWF0Y2goLyg/OlVDV0VCfFVDQnJvd3NlclxcLykoW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiVUNcIixpc1VDOiEwLHZlcnNpb246Y1sxXX06KGM9ZC5tYXRjaCgvTVFRQnJvd3NlclxcLyhbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJRUVwiLGlzUVE6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9GaXJlZm94XFwvKFtcXGRcXC5dKykvKSk/Yi5lbnYuYnJvd3Nlcj17bmFtZTpcIkZpcmVmb3hcIixpc0ZpcmVmb3g6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9NU0lFXFxzKFtcXGRcXC5dKykvKSl8fChjPWQubWF0Y2goL0lFTW9iaWxlXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e3ZlcnNpb246Y1sxXX0sZC5tYXRjaCgvSUVNb2JpbGUvKT8oYi5lbnYuYnJvd3Nlci5uYW1lPVwiSUVNb2JpbGVcIixiLmVudi5icm93c2VyLmlzSUVNb2JpbGU9ITApOihiLmVudi5icm93c2VyLm5hbWU9XCJJRVwiLGIuZW52LmJyb3dzZXIuaXNJRT0hMCksZC5tYXRjaCgvQW5kcm9pZHxpUGhvbmUvKSYmKGIuZW52LmJyb3dzZXIuaXNJRUxpa2VXZWJraXQ9ITApKTooYz1kLm1hdGNoKC8oPzpDaHJvbWV8Q3JpT1MpXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e25hbWU6XCJDaHJvbWVcIixpc0Nocm9tZTohMCx2ZXJzaW9uOmNbMV19LGQubWF0Y2goL1ZlcnNpb25cXC9bXFxkK1xcLl0rXFxzKkNocm9tZS8pJiYoYi5lbnYuYnJvd3Nlci5uYW1lPVwiQ2hyb21lIFdlYnZpZXdcIixiLmVudi5icm93c2VyLmlzV2Vidmlldz0hMCkpOmQubWF0Y2goL1NhZmFyaS8pJiYoYz1kLm1hdGNoKC9BbmRyb2lkW1xcc1xcL10oW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiQW5kcm9pZFwiLGlzQW5kcm9pZDohMCx2ZXJzaW9uOmNbMV19OmQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvKT9kLm1hdGNoKC9TYWZhcmkvKT8oYz1kLm1hdGNoKC9WZXJzaW9uXFwvKFtcXGRcXC5dKykvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiU2FmYXJpXCIsaXNTYWZhcmk6ITAsdmVyc2lvbjpjWzFdfSk6KGM9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiaU9TIFdlYnZpZXdcIixpc1dlYnZpZXc6ITAsdmVyc2lvbjpjWzFdLnJlcGxhY2UoL1xcXy9nLFwiLlwiKX0pOmIuZW52LmJyb3dzZXI9e25hbWU6XCJ1bmtub3duXCIsdmVyc2lvbjpcIjAuMC4wXCJ9LGIudmVyc2lvbiYmKGIuZW52LmJyb3dzZXIudmVyc2lvbj1iLnZlcnNpb24oYi5lbnYuYnJvd3Nlci52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubmF2aWdhdG9yLnVzZXJBZ2VudDtjLm1hdGNoKC9XZWliby9pKT9iLmVudi50aGlyZGFwcD17YXBwbmFtZTpcIldlaWJvXCIsaXNXZWlibzohMH06Yy5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSk/Yi5lbnYudGhpcmRhcHA9e2FwcG5hbWU6XCJXZWl4aW5cIixpc1dlaXhpbjohMH06Yi5lbnYudGhpcmRhcHA9ITF9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQsZT1hLm5hdmlnYXRvci51c2VyQWdlbnQ7KGQ9ZS5tYXRjaCgvV2luZFZhbmVbXFwvXFxzXShbXFxkXFwuXFxfXSspLykpJiYoYz1kWzFdKTt2YXIgZj0hMSxnPVwiXCIsaD1cIlwiLGk9XCJcIjsoZD1lLm1hdGNoKC9BbGlBcHBcXCgoW0EtWlxcLV0rKVxcLyhbXFxkXFwuXSspXFwpL2kpKSYmKGY9ITAsZz1kWzFdLGk9ZFsyXSxoPWcuaW5kZXhPZihcIi1QRFwiKT4wP2IuZW52Lm9zLmlzSU9TP1wiaVBhZFwiOmIuZW52Lm9zLmlzQW5kcm9pZD9cIkFuZHJvaWRQYWRcIjpiLmVudi5vcy5uYW1lOmIuZW52Lm9zLm5hbWUpLCFnJiZlLmluZGV4T2YoXCJUQklPU1wiKT4wJiYoZz1cIlRCXCIpLGY/Yi5lbnYuYWxpYXBwPXt3aW5kdmFuZTpiLnZlcnNpb24oY3x8XCIwLjAuMFwiKSxhcHBuYW1lOmd8fFwidW5rb3duXCIsdmVyc2lvbjpiLnZlcnNpb24oaXx8XCIwLjAuMFwiKSxwbGF0Zm9ybTpofHxiLmVudi5vcy5uYW1lfTpiLmVudi5hbGlhcHA9ITEsYi5lbnYudGFvYmFvQXBwPWIuZW52LmFsaWFwcH0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSk7O21vZHVsZS5leHBvcnRzID0gd2luZG93LmxpYlsnZW52J107IiwiLyoqXG4gKiB2aWV3cG9ydCBwcmlvcml0eTpcbiAqXG4gKiAxLiBtZXRhIHdlZXgtdmlld3BvcnQgKGRldmVsb3BlciBjdXN0b20pXG4gKiAyLiBzZXRWaWV3cG9ydChjb25maWcpIDo9IGNvbmZpZy53aWR0aCAocHJpdmF0ZSBjb2RlKSBAZGVwcmVjYXRlZFxuICogMy4gcHJvY2Vzcy5lbnYuVklFV1BPUlRfV0lEVEggKGJ1aWQgdGltZSlcbiAqXG4gKi9cbmxldCB2aWV3cG9ydFdpZHRoID0gcHJvY2Vzcy5lbnYuVklFV1BPUlRfV0lEVEhcblxuY29uc3Qgd3hWaWV3cG9ydE1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ3ZWV4LXZpZXdwb3J0XCJdJylcbmNvbnN0IG1ldGFXaWR0aCA9IHd4Vmlld3BvcnRNZXRhICYmIHBhcnNlSW50KHd4Vmlld3BvcnRNZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKVxuaWYgKG1ldGFXaWR0aCAmJiAhaXNOYU4obWV0YVdpZHRoKSAmJiBtZXRhV2lkdGggPiAwKSB7IHZpZXdwb3J0V2lkdGggPSBtZXRhV2lkdGggfVxuXG4vKipcbiAqIHNldCByb290IGZvbnQtc2l6ZSBmb3IgcmVtIHVuaXRzLiBJZiBhbHJlYWR5IGJlZW4gc2V0LCBqdXN0IHNraXAgdGhpcy5cbiAqL1xuZnVuY3Rpb24gc2V0Um9vdEZvbnQgKGRvYywgd2lkdGgpIHtcbiAgY29uc3Qgcm9vdEZvbnRTaXplID0gZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZVxuICBpZiAoIXJvb3RGb250U2l6ZSkge1xuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB3aWR0aCAvIDEwICsgJ3B4J1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaWV3cG9ydCAoY29uZmlnID0ge30pIHtcbiAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50XG5cbiAgaWYgKGRvYykge1xuICAgIC8vIHNldCByb290IGZvbnQgZm9yIHJlbS5cbiAgICBzZXRSb290Rm9udChkb2MsIHZpZXdwb3J0V2lkdGgpXG5cbiAgICAvKipcbiAgICAgKiB3aHkgbm90IHRvIHVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIHRvIGdldCBzY3JlZW5XaWR0aCA/IEJlY2F1c2UgaW4gc29tZVxuICAgICAqIG9sZCB3ZWJraXQgYnJvd3NlciBvbiBhbmRyb2lkIHN5c3RlbSBpdCBnZXQgdGhlIGRldmljZSBwaXhlbCB3aWR0aCwgd2hpY2hcbiAgICAgKiBpcyB0aGUgc2NyZWVuV2lkdGggbXVsdGlwbHkgYnkgdGhlIGRldmljZSBwaXhlbCByYXRpby5cbiAgICAgKi9cbiAgICBjb25zdCBkZVJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IGRlUmVjdC53aWR0aFxuICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IGRlUmVjdC5oZWlnaHRcbiAgICBjb25zdCBzY2FsZSA9IHNjcmVlbldpZHRoIC8gdmlld3BvcnRXaWR0aFxuXG4gICAgLyoqXG4gICAgICogaWYgc2V0IGluaXRpYWwvbWF4aW11bS9taW1pbXVtLXNjYWxlIHNvbWUgaG93IHRoZSBwYWdlIHdpbGwgaGF2ZSBhIGJvdW5jZVxuICAgICAqIGVmZmVjdCB3aGVuIHVzZXIgZHJhZyB0aGUgcGFnZSB0b3dhcmRzIGhvcml6b250YWwgYXhpcy5cbiAgICAgKi9cbiAgICBjb25zdCBjb250ZW50cyA9IFtcbiAgICAgIGB3aWR0aD0ke3ZpZXdwb3J0V2lkdGh9YCxcbiAgICAgIC8vIGBpbml0aWFsLXNjYWxlPSR7c2NhbGV9YCxcbiAgICAgIC8vIGBtYXhpbXVtLXNjYWxlPSR7c2NhbGV9YCxcbiAgICAgIC8vIGBtaW5pbXVtLXNjYWxlPSR7c2NhbGV9YCxcbiAgICAgIGB1c2VyLXNjYWxhYmxlPW5vYFxuICAgIF1cblxuICAgIGxldCBtZXRhID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJylcbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIG1ldGEgPSBkb2MuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd2aWV3cG9ydCcpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobWV0YSlcbiAgICB9XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBjb250ZW50cy5qb2luKCcsJykpXG5cbiAgICBjb25zdCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlLFxuICAgICAgZGV2aWNlV2lkdGg6IHNjcmVlbldpZHRoICogZHByLFxuICAgICAgZGV2aWNlSGVpZ2h0OiBzY3JlZW5IZWlnaHQgKiBkcHJcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAnZW52ZCdcblxuaW1wb3J0IHsgc2V0Vmlld3BvcnQgfSBmcm9tICcuL3ZpZXdwb3J0J1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHNjYWxlSW5mbyA9IHNldFZpZXdwb3J0KClcblxuY29uc3QgbGliID0gd2luZG93LmxpYlxuY29uc3QgZW52ID0ge1xuICBwbGF0Zm9ybTogJ1dlYicsXG4gIC8vIHdlZXhWZXJzaW9uOiAnMC4xMC4wJywgLy8gVE9ETzogZ2V0IHZlcnNpb24gZnJvbSBwYWNrYWdlLmpzb24gKG5vdCBzdXJlKVxuICB3ZWV4VmVyc2lvbjogJ3Byb2Nlc3MuZW52LldFRVhfVkVSU0lPTicsXG4gIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgYXBwTmFtZTogbGliLmVudi5hbGlhcHAgPyBsaWIuZW52LmFsaWFwcC5hcHBuYW1lIDogbmF2aWdhdG9yLmFwcE5hbWUsXG4gIGFwcFZlcnNpb246IGxpYi5lbnYuYWxpYXBwID8gbGliLmVudi5hbGlhcHAudmVyc2lvbi52YWwgOiBudWxsLFxuICBvc05hbWU6IGxpYi5lbnYuYnJvd3NlciA/IGxpYi5lbnYuYnJvd3Nlci5uYW1lIDogbnVsbCxcbiAgb3NWZXJzaW9uOiBsaWIuZW52LmJyb3dzZXIgPyBsaWIuZW52LmJyb3dzZXIudmVyc2lvbi52YWwgOiBudWxsLFxuICBkZXZpY2VNb2RlbDogbGliLmVudi5vcy5uYW1lIHx8IG51bGxcbn1cblxuLyoqXG4gKiBzY2FsZUluZm86IHNjYWxlLCBkZXZpY2VXaWR0aCwgZGV2aWNlSGVpZ2h0LlxuICovXG5leHRlbmQoZW52LCBzY2FsZUluZm8pXG5cbi8vIDc1MCBieSBkZWZhdWx0IGN1cnJlbnRseVxuY29uc3Qgc2NhbGUgPSBlbnYuc2NhbGVcblxuY29uc3QgdW5pdHMgPSB7XG4gIFJFTTogMTIgKiBzY2FsZSxcbiAgVlc6IGVudi5kZXZpY2VXaWR0aCAvIDEwMCxcbiAgVkg6IGVudi5kZXZpY2VIZWlnaHQgLyAxMDAsXG4gIFZNSU46IE1hdGgubWluKGVudi5kZXZpY2VXaWR0aCwgZW52LmRldmljZUhlaWdodCkgLyAxMDAsXG4gIFZNQVg6IE1hdGgubWF4KGVudi5kZXZpY2VXaWR0aCwgZW52LmRldmljZUhlaWdodCkgLyAxMDAsXG4gIENNOiA5NiAvIDIuNTQgKiBzY2FsZSxcbiAgTU06IDk2IC8gMjUuNCAqIHNjYWxlLFxuICBROiA5NiAvIDI1LjQgLyA0ICogc2NhbGUsXG4gIElOOiA5NiAqIHNjYWxlLFxuICBQVDogOTYgLyA3MiAqIHNjYWxlLFxuICBQQzogOTYgLyA2ICogc2NhbGUsXG4gIFBYOiBzY2FsZVxufVxuXG5PYmplY3QuZnJlZXplKHVuaXRzKVxuLy8gT2JqZWN0LmZyZWV6ZShlbnYpXG5cbndpbmRvdy5DU1NfVU5JVCA9IHVuaXRzXG53aW5kb3cuV1hFbnZpcm9ubWVudCA9IGVudlxuIiwiaW1wb3J0ICcuL3d4LWVudidcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgcmVxdWlyZVdlZXhNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzJ1xuXG5jb25zdCB3ZWV4TW9kdWxlcyA9IHt9XG5cbmNvbnN0IHdlZXggPSB7XG4gIF9fdnVlX186IG51bGwsXG4gIHV0aWxzLFxuICB1bml0czogd2luZG93LkNTU19VTklULFxuICBjb25maWc6IHtcbiAgICBlbnY6IHdpbmRvdy5XWEVudmlyb25tZW50LFxuICAgIGJ1bmRsZVVybDogbG9jYXRpb24uaHJlZlxuICB9LFxuXG4gIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgICBjb25zdCBtb2R1bGUgPSByZXF1aXJlV2VleE1vZHVsZShtb2R1bGVOYW1lKVxuICAgIGlmIChtb2R1bGUpIHtcbiAgICAgIHJldHVybiBtb2R1bGVcbiAgICB9XG4gICAgcmV0dXJuIHdlZXhNb2R1bGVzW21vZHVsZU5hbWVdXG4gIH0sXG5cbiAgcmVnaXN0ZXJNb2R1bGUgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlckFwaU1vZHVsZSguLi5hcmdzKVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHJlcXVpcmUgKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhgW1Z1ZSBSZW5kZXJdIFwid2VleC5yZXF1aXJlXCIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcIndlZXgucmVxdWlyZU1vZHVsZVwiIGluc3RlYWQuYClcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgLy8gVE9ETzogcmVuYW1lIHRvIHJlZ2lzdGVyTW9kdWxlXG4gIHJlZ2lzdGVyQXBpTW9kdWxlIChuYW1lLCBtb2R1bGUsIG1ldGEpIHtcbiAgICBpZiAoIXdlZXhNb2R1bGVzW25hbWVdKSB7XG4gICAgICB3ZWV4TW9kdWxlc1tuYW1lXSA9IHt9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZHVsZSkge1xuICAgICAgaWYgKG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHdlZXhNb2R1bGVzW25hbWVdW2tleV0gPSB1dGlscy5iaW5kKG1vZHVsZVtrZXldLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZWdpc3RlckNvbXBvbmVudCAobmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYgKCF0aGlzLl9fdnVlX18pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnW1Z1ZSBSZW5kZXJdIFZ1ZSBpcyBub3QgZm91bmQuIFBsZWFzZSBpbXBvcnQgVnVlLmpzIGJlZm9yZSByZWdpc3RlciBhIGNvbXBvbmVudC4nKVxuICAgIH1cbiAgICB0aGlzLl9fdnVlX18uY29tcG9uZW50KG5hbWUsIGNvbXBvbmVudClcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICBnZXRSb290ICgpIHt9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHNlbmRlcjoge1xuICAgIHBlcmZvcm1DYWxsYmFjayAoY2FsbGJhY2ssIGRhdGEsIGtlZXBBbGl2ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGluc3RhbGwgKG1vZHVsZSkge1xuICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VleFxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvY29tcG9uZW50cy5jc3MnXG5cbi8vIGltcG9ydCAnbGF6eWltZydcbmltcG9ydCAnLi4vLi4vYnJvd3Nlci9yZW5kZXIvZ2VzdHVyZSdcblxuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvYXJyYXlGcm9tJ1xuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvb2JqZWN0QXNzaWduJ1xuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvb2JqZWN0U2V0UHJvdG90eXBlT2YnXG5cbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcidcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZSdcblxuaW1wb3J0IG1vZHVsZXMgZnJvbSAnLi4vbW9kdWxlcydcbmltcG9ydCB3ZWV4IGZyb20gJy4vd2VleCdcblxuLy8gcmVnaXN0ZXIgYnVpbHQtaW4gbW9kdWxlcy5cbndlZXguaW5zdGFsbChtb2R1bGVzKVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VnVlICh2dWUpIHtcbiAgaWYgKCF2dWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tWdWUgUmVuZGVyXSBWdWUgbm90IGZvdW5kLiBQbGVhc2UgbWFrZSBzdXJlIHZ1ZSAyLnggcnVudGltZSBpcyBpbXBvcnRlZC4nKVxuICB9XG4gIHdlZXguX192dWVfXyA9IHZ1ZVxuICBjb25zb2xlLmxvZyhgW1Z1ZSBSZW5kZXJdIGluc3RhbGwgVnVlICR7dnVlLnZlcnNpb259LmApXG59XG5cbndpbmRvdy53ZWV4ID0gd2VleFxud2luZG93Lmdsb2JhbCA9IHdpbmRvd1xuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNDaGVja2VkOiAodGhpcy5jaGVja2VkICE9PSAnZmFsc2UnICYmIHRoaXMuY2hlY2tlZCAhPT0gZmFsc2UpLFxuICAgICAgaXNEaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LXN3aXRjaCddXG4gICAgICB0aGlzLmlzQ2hlY2tlZCAmJiBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc3dpdGNoLWNoZWNrZWQnKVxuICAgICAgdGhpcy5pc0Rpc2FibGVkICYmIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zd2l0Y2gtZGlzYWJsZWQnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlICgpIHtcbiAgICAgIC8vIFRPRE86IGhhbmRsZSB0aGUgZXZlbnRzXG4gICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZFxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7IHZhbHVlOiB0aGlzLmlzQ2hlY2tlZCB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3N3aXRjaCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3N3aXRjaCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudClcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbY3JlYXRlRWxlbWVudCgnc21hbGwnLCB7IHN0YXRpY0NsYXNzOiAnd2VleC1zd2l0Y2gtaW5uZXInIH0pXSlcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBocmVmOiBTdHJpbmdcbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6YScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnYScsXG4gICAgICAgIGhyZWY6IHRoaXMuaHJlZlxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWEnLFxuICAgICAgc3RhdGljU3R5bGU6IG1zXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmZ1bmN0aW9uIHRyaW1UZXh0Tm9kZSAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiAhIXZub2RlLnRhZylcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2RpdicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmRpdicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnZGl2JyB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtZGl2JyxcbiAgICAgIHN0YXRpY1N0eWxlOiBtc1xuICAgIH0sIHRyaW1UZXh0Tm9kZSh0aGlzLiRzbG90cy5kZWZhdWx0KSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogZ2V0IHJlc2l6ZSAoc3RldGNofGNvdmVyfGNvbnRhaW4pIHJlbGF0ZWQgc3R5bGVzLlxuICovXG5mdW5jdGlvbiBnZXRSZXNpemVTdHlsZSAoY29udGV4dCkge1xuICBjb25zdCBzdHJldGNoID0gJzEwMCUgMTAwJSdcbiAgY29uc3QgcmVzaXplID0gY29udGV4dC5yZXNpemUgfHwgc3RyZXRjaFxuICBjb25zdCBiZ1NpemUgPSBbJ2NvdmVyJywgJ2NvbnRhaW4nLCBzdHJldGNoXS5pbmRleE9mKHJlc2l6ZSkgPiAtMSA/IHJlc2l6ZSA6IHN0cmV0Y2hcbiAgcmV0dXJuIHsgJ2JhY2tncm91bmQtc2l6ZSc6IGJnU2l6ZSB9XG59XG5cbmZ1bmN0aW9uIHByZVByb2Nlc3NTcmMgKGNvbnRleHQsIHVybCwgbWVyZ2VkU3R5bGUpIHtcbiAgLy8gc29tZWhvdyB0aGUgbWVyZ2VkIHN0eWxlIGluIF9wcmVyZW5kZXIgaG9vayBpcyBnb25lLlxuICAvLyBqdXN0IHJldHVybiB0aGUgb3JpZ2luYWwgc3JjLlxuICBpZiAoIW1lcmdlZFN0eWxlIHx8ICFtZXJnZWRTdHlsZS53aWR0aCB8fCAhbWVyZ2VkU3R5bGUuaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHVybFxuICB9XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gbWVyZ2VkU3R5bGVcbiAgcmV0dXJuIGNvbnRleHQucHJvY2Vzc0ltZ1NyYyAmJiBjb250ZXh0LnByb2Nlc3NJbWdTcmModXJsLCB7XG4gICAgd2lkdGg6IHBhcnNlRmxvYXQod2lkdGgpLFxuICAgIGhlaWdodDogcGFyc2VGbG9hdChoZWlnaHQpLFxuICAgIHF1YWxpdHk6IGNvbnRleHQucXVhbGl0eSxcbiAgICBzaGFycGVuOiBjb250ZXh0LnNoYXJwZW4sXG4gICAgb3JpZ2luYWw6IGNvbnRleHQub3JpZ2luYWxcbiAgfSkgfHwgdXJsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIHJlc2l6ZTogU3RyaW5nLFxuICAgIHF1YWxpdHk6IFN0cmluZyxcbiAgICBzaGFycGVuOiBTdHJpbmcsXG4gICAgb3JpZ2luYWw6IFtTdHJpbmcsIEJvb2xlYW5dXG4gIH0sXG5cbiAgdXBkYXRlZCAoKSB7XG4gICAgdGhpcy5fZmlyZUxhenlsb2FkKClcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLl9maXJlTGF6eWxvYWQoKVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnaW1hZ2UnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuXG4gICAgLy8gbGV0IGNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIke3RoaXMuc3JjfVwiKTtgXG5cbiAgICAvLyAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1iYWNrZ3JvdW5kLXNpemVcbiAgICAvLyBjc3NUZXh0ICs9ICh0aGlzLnJlc2l6ZSAmJiB0aGlzLnJlc2l6ZSAhPT0gJ3N0cmV0Y2gnKVxuICAgIC8vICAgPyBgYmFja2dyb3VuZC1zaXplOiAke3RoaXMucmVzaXplfTtgXG4gICAgLy8gICA6IGBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtgXG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnaW1hZ2UnLFxuICAgICAgICAnaW1nLXNyYyc6IHByZVByb2Nlc3NTcmModGhpcywgdGhpcy5zcmMsIG1zKSxcbiAgICAgICAgJ2ltZy1wbGFjZWhvbGRlcic6IHByZVByb2Nlc3NTcmModGhpcywgdGhpcy5wbGFjZWhvbGRlciwgbXMpXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKFsnbG9hZCcsICdlcnJvciddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbWFnZScsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0ZW5kKG1zLCBnZXRSZXNpemVTdHlsZSh0aGlzKSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQsIG1hcEZvcm1FdmVudHMgfSBmcm9tICcuLi91dGlscydcbi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICdlbWFpbCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3VybCdcbiAgICAgICAgICAvLyB1bnN1cHBvcnRlZCB0eXBlOlxuICAgICAgICAgIC8vIGJ1dHRvbiwgY2hlY2tib3gsIGNvbG9yLCBkYXRlLCBkYXRldGltZSwgZmlsZSwgaGlkZGVuLCBpbWFnZSxcbiAgICAgICAgICAvLyBtb250aCwgcmFkaW8sIHJhbmdlLCByZXNldCwgc3VibWl0LCB0aW1lLCB3ZWVrLFxuICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG1heGxlbmd0aDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLiRlbCAmJiB0aGlzLiRlbC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyICgpIHtcbiAgICAgIHRoaXMuJGVsICYmIHRoaXMuJGVsLmJsdXIoKVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2lucHV0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6aW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ2lucHV0JyxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6ICh0aGlzLmRpc2FibGVkICE9PSAnZmFsc2UnICYmIHRoaXMuZGlzYWJsZWQgIT09IGZhbHNlKSxcbiAgICAgICAgYXV0b2ZvY3VzOiAodGhpcy5hdXRvZm9jdXMgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG1heGxlbmd0aDogdGhpcy5tYXhsZW5ndGhcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfSxcbiAgICAgIG9uOiBleHRlbmQodGhpcy5fY3JlYXRlRXZlbnRNYXAoKSwgbWFwRm9ybUV2ZW50cyh0aGlzKSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW5wdXQnLFxuICAgICAgc3RhdGljU3R5bGU6IG1zXG4gICAgfSlcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBzdXBwb3J0U3RpY2t5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0aWNreTogZmFsc2UsXG4gICAgICBpbml0VG9wOiAwLFxuICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgICBzdXBwb3J0U3RpY2t5OiBzdXBwb3J0U3RpY2t5KClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pbml0VG9wID0gdGhpcy4kZWwub2Zmc2V0VG9wXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIGlmICghdGhpcy5zdGlja3kpIHtcbiAgICAgIHRoaXMuaW5pdFRvcCA9IHRoaXMuJGVsLm9mZnNldFRvcFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWRkU3RpY2t5ICgpIHtcbiAgICAgIHRoaXMuc3RpY2t5ID0gdHJ1ZVxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHRoaXMuJGVsLm9mZnNldFdpZHRoICsgJ3B4J1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnBsYWNlaG9sZGVyLCB0aGlzLiRlbClcbiAgICB9LFxuXG4gICAgcmVtb3ZlU3RpY2t5ICgpIHtcbiAgICAgIHRoaXMuc3RpY2t5ID0gZmFsc2VcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wbGFjZWhvbGRlcilcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnaGVhZGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6aGVhZGVyJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdoZWFkZXInIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHJlZjogJ2hlYWRlcicsXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaGVhZGVyJyxcbiAgICAgIGNsYXNzOiB7IHN0aWNreTogdGhpcy5zdGlja3ksIGlvc3N0aWNreTogdGhpcy5zdXBwb3J0U3RpY2t5IH0sXG4gICAgICBzdGF0aWNTdHlsZTogbXNcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUaHJvdHRsZUxhenlsb2FkLCB3YXRjaEFwcGVhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdGFnQmVmb3JlQ3JlYXRlLCB0YWdNb3VudGVkLCB0YWdCZWZvcmVVcGRhdGUsIHRhZ1VwZGF0ZWQgfSBmcm9tICcuLi91dGlscy9wZXJmJ1xuXG5jb25zdCBzdXBwb3J0ZWRFdmVudHMgPSBbXG4gICdjbGljaycsICdsb25ncHJlc3MnLCAnYXBwZWFyJywgJ2Rpc2FwcGVhcidcbiAgLy8gJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJ1xuXVxuXG5jb25zdCBzY3JvbGxhYmxlVHlwZXMgPSBbJ3Njcm9sbGVyJywgJ2xpc3QnXVxuXG5sZXQgbGF6eWxvYWRXYXRjaGVkID0gZmFsc2VcbmZ1bmN0aW9uIHdhdGNoTGF6eWxvYWQgKCkge1xuICBsYXp5bG9hZFdhdGNoZWQgPSB0cnVlXG4gIDsgW1xuICAgICdzY3JvbGwnXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnLFxuICAgIC8vICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAvLyAnYW5pbWF0aW9uZW5kJyxcbiAgICAvLyAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAvLyAncmVzaXplJ1xuICBdLmZvckVhY2goZXZ0ID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGdldFRocm90dGxlTGF6eWxvYWQoMjUsIGRvY3VtZW50LmJvZHkpKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgaWYgKCFsYXp5bG9hZFdhdGNoZWQpIHtcbiAgICAgIHdhdGNoTGF6eWxvYWQoKVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHRhZ0JlZm9yZUNyZWF0ZSgpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICghd2VleC5fcm9vdCkge1xuICAgICAgd2VleC5fcm9vdCA9IHRoaXMuJHJvb3QuJGVsXG4gICAgICB3ZWV4Ll9yb290LmNsYXNzTGlzdC5hZGQoJ3dlZXgtcm9vdCcpXG4gICAgICBPYmplY3QuZnJlZXplKHdlZXgpXG4gICAgfVxuICAgIHdhdGNoQXBwZWFyKHRoaXMpXG4gICAgdGFnTW91bnRlZCgpXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0YWdCZWZvcmVVcGRhdGUoKVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIHRhZ1VwZGF0ZWQoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfZ2V0VG9wQ29udGV4dCAoKSB7XG4gICAgICBsZXQgY3R4ID0gdGhpc1xuICAgICAgbGV0IHZub2RlID0gY3R4LiRvcHRpb25zLl9wYXJlbnRWbm9kZVxuICAgICAgd2hpbGUgKHZub2RlKSB7XG4gICAgICAgIGN0eCA9IHZub2RlLmNvbnRleHRcbiAgICAgICAgdm5vZGUgPSBjdHguJG9wdGlvbnMuX3BhcmVudFZub2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gY3R4XG4gICAgfSxcblxuICAgIF9nZXRTY29wZUlkICgpIHtcbiAgICAgIC8vIHJldHVybiBjbG9zZXN0IHNjb3BlSWQuXG4gICAgICBsZXQgc2NvcGVJZCA9IHRoaXMuJG9wdGlvbnMuX3Njb3BlSWRcbiAgICAgIGxldCBjdHggPSB0aGlzXG4gICAgICB3aGlsZSAoIXNjb3BlSWQpIHtcbiAgICAgICAgY3R4ID0gY3R4LiRvcHRpb25zLnBhcmVudFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuIG51bGxcbiAgICAgICAgc2NvcGVJZCA9IGN0eC4kb3B0aW9ucy5fc2NvcGVJZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHNjb3BlSWRcbiAgICB9LFxuXG4gICAgX2dldFBhcmVudFNjcm9sbGVyICgpIHtcbiAgICAgIGxldCBwYXJlbnQgPSB0aGlzXG4gICAgICB3aGlsZSAocGFyZW50ICYmIHNjcm9sbGFibGVUeXBlcy5pbmRleE9mKHBhcmVudC4kb3B0aW9ucy5fY29tcG9uZW50VGFnKSA8PSAtMSkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJG9wdGlvbnMucGFyZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfSxcblxuICAgIF9jcmVhdGVFdmVudE1hcCAoZXh0cmFzID0gW10pIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0ge31cbiAgICAgIHN1cHBvcnRlZEV2ZW50cy5jb25jYXQoZXh0cmFzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBldmVudE1hcFtuYW1lXSA9IGV2ZW50ID0+IHRoaXMuJGVtaXQobmFtZSwgZXZlbnQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGV2ZW50TWFwXG4gICAgfSxcblxuICAgIF9maXJlTGF6eWxvYWQgKGVsKSB7XG4gICAgICBnZXRUaHJvdHRsZUxhenlsb2FkKDE2KSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoeXBoZW5hdGUsIHRyaW1Db21tZW50LCBub3JtYWxpemVTdHlsZXMgfSBmcm9tICcuLi91dGlscydcbi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG4vLyBsZXQgd2FybmVkID0gZmFsc2VcblxuZnVuY3Rpb24gaHlwaGVuYXRlRXh0ZW5kICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIH1cbiAgZm9yIChjb25zdCBrIGluIGZyb20pIHtcbiAgICB0b1toeXBoZW5hdGUoayldID0gZnJvbVtrXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEhlYWRTdHlsZU1hcCAoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzIHx8IFtdKVxuICAgIC5yZWR1Y2UoKHByZSwgc3R5bGVTaGVldCkgPT4ge1xuICAgICAgLy8gd2h5IG5vdCB1c2luZyBzdHlsZVNoZWV0LnJ1bGVzIHx8IHN0eWxlU2hlZXQuY3NzUnVsZXMgdG8gZ2V0IGNzcyBydWxlcyA/XG4gICAgICAvLyBiZWNhdXNlIHdlZXgncyBjb21wb25lbnRzIGRlZmluZWQgbm9uLXN0YW5kYXJkIHN0eWxlIGF0dHJpYnV0ZXMsIHdoaWNoIGlzXG4gICAgICAvLyBhdXRvIGlnbm9yZWQgd2hlbiBhY2Nlc3MgcnVsZS5jc3NUZXh0LlxuICAgICAgY29uc3Qgc3RyQXJyID0gdHJpbUNvbW1lbnQoc3R5bGVTaGVldC5vd25lck5vZGUudGV4dENvbnRlbnQudHJpbSgpKS5zcGxpdCgvXFwuKD8hXFxkKykvKVxuICAgICAgY29uc3QgbGVuID0gc3RyQXJyLmxlbmd0aFxuICAgICAgY29uc3QgcnVsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBzdHIgPSBzdHJBcnJbaV1cbiAgICAgICAgaWYgKCFzdHIgfHwgc3RyLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goL14oW157XFxzXSspXFxzKntcXHMqKFtefV0rKX1cXHMqJC8pXG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAvLyBub3QgdGhlIHZ1ZSBzdGF0aWMgY2xhc3Mgc3R5bGVzIG1hcC4gc28gYWNxdWlyZSBubyBydWxlcyBmb3IgdGhpcyBzdHlsZVNoZWV0LlxuICAgICAgICAgIC8vIGp1c3QganVtcCB0aHJvdWdoIHRoaXMgc3R5bGVTaGVldCBhbmQgZ28gdG8gYW5hbHl6aW5nIG5leHQuXG4gICAgICAgICAgcmV0dXJuIHByZVxuICAgICAgICB9XG4gICAgICAgIHJ1bGVzLnB1c2goe1xuICAgICAgICAgIHNlbGVjdG9yVGV4dDogYC4ke21hdGNoWzFdfWAsXG4gICAgICAgICAgY3NzVGV4dDogbWF0Y2hbMl0udHJpbSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBBcnJheS5mcm9tKHJ1bGVzKS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3JUZXh0IHx8ICcnXG4gICAgICAgIHByZVtzZWxlY3Rvcl0gPSB0cmltQ29tbWVudChydWxlLmNzc1RleHQpLnNwbGl0KCc7JylcbiAgICAgICAgICAucmVkdWNlKChzdHlsZU9iaiwgc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50ICYmIHN0YXRlbWVudC5pbmRleE9mKCcvKicpIDw9IC0xKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc0FyciA9IHN0YXRlbWVudC5zcGxpdCgnOicpLm1hcCgocGFydCkgPT4gcGFydC50cmltKCkpXG4gICAgICAgICAgICAgIHN0eWxlT2JqW2h5cGhlbmF0ZShyZXNBcnJbMF0pXSA9IHJlc0FyclsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqXG4gICAgICAgICAgfSwge30pXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHByZVxuICAgIH0sIHt9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgLy8gZ2V0IHN0YXRpYyBjbGFzcyBzdHlsZSBtYXAgZnJvbSBkb2N1bWVudCdzIHN0eWxlU2hlZXRzLlxuICAgIGlmICghd2VleC5zdHlsZU1hcCkge1xuICAgICAgd2VleC5zdHlsZU1hcCA9IGdldEhlYWRTdHlsZU1hcCgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvLyBnZXQgc3R5bGUgZnJvbSBjbGFzcywgc3RhdGljQ2xhc3MsIHN0eWxlIGFuZCBzdGF0aWNTdHlsZS5cbiAgICBfZ2V0Q29tcG9uZW50U3R5bGUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge31cbiAgICAgIGNvbnN0IF9zY29wZUlkID0gdGhpcy5fZ2V0U2NvcGVJZCAmJiB0aGlzLl9nZXRTY29wZUlkKClcbiAgICAgIGNvbnN0IHN0YXRpY0NsYXNzTmFtZXMgPSAodHlwZW9mIGRhdGEuc3RhdGljQ2xhc3MgPT09ICdzdHJpbmcnKSA/IFtkYXRhLnN0YXRpY0NsYXNzXSA6IChkYXRhLnN0YXRpY0NsYXNzIHx8IFtdKVxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9ICh0eXBlb2YgZGF0YS5jbGFzcyA9PT0gJ3N0cmluZycpID8gW2RhdGEuY2xhc3NdIDogKGRhdGEuY2xhc3MgfHwgW10pXG5cbiAgICAgIC8qKlxuICAgICAgICogbWVyZ2Ugc3R5bGVzLiBwcmlvcml0eTogaGlnaCAtPiBsb3dcbiAgICAgICAqICAxLiBkYXRhLnN0eWxlIChib3VuZCBzdHlsZSkuXG4gICAgICAgKiAgMi4gZGF0YS5zdGF0aWNTdHlsZSAoaW5saW5lIHN0eWxlcykuXG4gICAgICAgKiAgMy4gZGF0YS5jbGFzcyBzdHlsZSAoYm91bmQgY2xhc3MgbmFtZXMpLlxuICAgICAgICogIDQuIGRhdGEuc3RhdGljQ2xhc3Mgc3R5bGUgKHNjb3BlZCBzdHlsZXMgb3Igc3RhdGljIGNsYXNzZXMpLlxuICAgICAgICovXG4gICAgICBzdGF0aWNDbGFzc05hbWVzLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGxldCBjbHMgPSAnJ1xuICAgICAgICBpZiAoX3Njb3BlSWQpIHtcbiAgICAgICAgICBjbHMgPSBgLiR7bn1bJHtfc2NvcGVJZH1dYFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGVNYXAgPSB3ZWV4LnN0eWxlTWFwW2Nsc10gfHwge31cbiAgICAgICAgaHlwaGVuYXRlRXh0ZW5kKHN0eWxlLCBydWxlTWFwKVxuICAgICAgfSlcbiAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgbGV0IGNscyA9ICcnXG4gICAgICAgIGlmIChfc2NvcGVJZCkge1xuICAgICAgICAgIGNscyA9IGAuJHtufVske19zY29wZUlkfV1gXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZU1hcCA9IHdlZXguc3R5bGVNYXBbY2xzXSB8fCB7fVxuICAgICAgICBoeXBoZW5hdGVFeHRlbmQoc3R5bGUsIHJ1bGVNYXApXG4gICAgICB9KVxuICAgICAgaHlwaGVuYXRlRXh0ZW5kKHN0eWxlLCBkYXRhLnN0YXRpY1N0eWxlKVxuICAgICAgaHlwaGVuYXRlRXh0ZW5kKHN0eWxlLCBkYXRhLnN0eWxlKVxuXG4gICAgICAvLyBmaWx0ZXIgc3R5bGVzLlxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZSlcbiAgICB9LFxuXG4gICAgLy8gbWVyZ2Ugc3RhdGljIHN0eWxlcyBhbmQgc3RhdGljIGNsYXNzIHN0eWxlcyBpbnRvICR2bm9kZS5kYXRhLm1lcmdlZFN0eWxlcy5cbiAgICBfbWVyZ2VTdHlsZXMgKCkge1xuICAgICAgY29uc3Qgdm5vZGUgPSB0aGlzLiRvcHRpb25zLl9wYXJlbnRWbm9kZSB8fCB7fVxuICAgICAgY29uc3QgZGF0YSA9IHZub2RlLmRhdGFcbiAgICAgIGlmICghZGF0YSkgeyByZXR1cm4gfVxuICAgICAgdGhpcy4kb3B0aW9ucy5fcGFyZW50Vm5vZGUuZGF0YS5zdGF0aWNTdHlsZSA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKGRhdGEpXG4gICAgfSxcblxuICAgIF9nZXRQYXJlbnRSZWN0ICgpIHtcbiAgICAgIGNvbnN0IHBhcmVudEVsbSA9IHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbVxuICAgICAgcmV0dXJuIHBhcmVudEVsbSAmJiBwYXJlbnRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9LFxuXG4gICAgX2dldFBhcmVudFJlY3RBc3luYyAoY2IpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiLmNhbGwodGhpcywgdGhpcy5nZXRQYXJlbnRSZWN0U3luYygpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFRocm90dGxlTGF6eWxvYWQgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlTGF5b3V0ICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSByZWN0LmhlaWdodFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVTY3JvbGwgKGV2ZW50KSB7XG4gICAgICBnZXRUaHJvdHRsZUxhenlsb2FkKDI1LCB0aGlzLiRlbCwgJ3Njcm9sbCcpKClcbiAgICAgIGlmICh0aGlzLnJlYWNoQm90dG9tKCkpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnbG9hZG1vcmUnLCBldmVudClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVhY2hUb3AgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgcmV0dXJuICghIXdyYXBwZXIpICYmICh3cmFwcGVyLnNjcm9sbFRvcCA8PSAwKVxuICAgIH0sXG5cbiAgICByZWFjaEJvdHRvbSAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGNvbnN0IG9mZnNldCA9IE51bWJlcih0aGlzLmxvYWRtb3Jlb2Zmc2V0KSB8fCAwXG5cbiAgICAgIGlmICh3cmFwcGVyICYmIGlubmVyKSB7XG4gICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICByZXR1cm4gd3JhcHBlci5zY3JvbGxUb3AgPj0gaW5uZXJIZWlnaHQgLSB3cmFwcGVySGVpZ2h0IC0gb2Zmc2V0XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fbG9hZGluZyB8fCB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgICAgcmVhY2hUb3A6IHRoaXMucmVhY2hUb3AoKSxcbiAgICAgICAgICByZWFjaEJvdHRvbTogdGhpcy5yZWFjaEJvdHRvbSgpLFxuICAgICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgICBzdGFydFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFkgPSBvZmZzZXRZXG4gICAgICAgICAgaWYgKHJlYWNoVG9wICYmIHRoaXMuX3JlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2guY2hpbGQucHVsbGluZ0Rvd24ob2Zmc2V0WSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAocmVhY2hCb3R0b20gJiYgdGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZy5jaGlsZC5wdWxsaW5nVXAoLW9mZnNldFkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgIGlmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoLmNoaWxkLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChyZWFjaEJvdHRvbSAmJiB0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nLmNoaWxkLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsb2FkaW5nLWluZGljYXRvcicsXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIGNvbnN0IG1zID0gdGhpcy5fZ2V0Q29tcG9uZW50U3R5bGUodGhpcy4kdm5vZGUuZGF0YSlcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYXJrJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nLWluZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nLWluZGljYXRvcicsXG4gICAgICBzdGF0aWNTdHlsZTogbXNcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tICcuL2xvYWRpbmctaW5kaWNhdG9yJ1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBuYW1lOiAncmVmcmVzaCcsXG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdER5OiAwLFxuICAgICAgdmlld0hlaWdodDogMCxcbiAgICAgIGhlaWdodDogLTFcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZWQgKCkge1xuICB9LFxuICB3YXRjaDoge1xuICAgIGhlaWdodCAodmFsKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnXG4gICAgfSxcbiAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHB1bGxpbmcgKG9mZnNldFkgPSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IG9mZnNldFlcbiAgICAgIHRoaXMuJGVtaXQoJ3B1bGxpbmdkb3duJywgY3JlYXRlRXZlbnQodGhpcywgJ3B1bGxpbmdkb3duJywge1xuICAgICAgICBkeTogb2Zmc2V0WSAtIHRoaXMubGFzdER5LFxuICAgICAgICBwdWxsaW5nRGlzdGFuY2U6IG9mZnNldFksXG4gICAgICAgIHZpZXdIZWlnaHQ6IHRoaXMudmlld0hlaWdodFxuICAgICAgfSkpXG4gICAgICB0aGlzLmxhc3REeSA9IG9mZnNldFlcbiAgICB9LFxuICAgIHB1bGxpbmdEb3duIChvZmZzZXRZKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAwc2BcbiAgICAgIHRoaXMucHVsbGluZyhvZmZzZXRZKVxuICAgIH0sXG4gICAgcHVsbGluZ0VuZCAoKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAuMnNgXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPj0gdGhpcy52aWV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucHVsbGluZyh0aGlzLnZpZXdIZWlnaHQpXG4gICAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2gnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHVsbGluZygwKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2hpbGRyZW4gKCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ID09PSAnc2hvdycpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHZub2RlLmNvbXBvbmVudE9wdGlvbnNcbiAgICAgICAgICAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyAhPT0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIGNvbnN0IG1zID0gdGhpcy5fZ2V0Q29tcG9uZW50U3R5bGUodGhpcy4kdm5vZGUuZGF0YSlcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICByZWY6ICdyZWZyZXNoJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAncmVmcmVzaCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1yZWZyZXNoJyxcbiAgICAgIHN0YXRpY1N0eWxlOiBtc1xuICAgIH0sIHRoaXMuZ2V0Q2hpbGRyZW4oKSlcbiAgfVxufVxuIiwiaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBuYW1lOiAnbG9hZGluZycsXG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAtMSxcbiAgICAgIHZpZXdIZWlnaHQ6IDBcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZWQgKCkge1xuICB9LFxuICB3YXRjaDoge1xuICAgIGhlaWdodCAodmFsKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnXG4gICAgfSxcbiAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHB1bGxpbmcgKG9mZnNldFkgPSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IG9mZnNldFlcbiAgICB9LFxuICAgIHB1bGxpbmdVcCAob2Zmc2V0WSkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgMHNgXG4gICAgICB0aGlzLnB1bGxpbmcob2Zmc2V0WSlcbiAgICB9LFxuICAgIHB1bGxpbmdFbmQgKCkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgLjJzYFxuICAgICAgaWYgKHRoaXMuaGVpZ2h0ID49IHRoaXMudmlld0hlaWdodCkge1xuICAgICAgICB0aGlzLnB1bGxpbmcodGhpcy52aWV3SGVpZ2h0KVxuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkaW5nJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnB1bGxpbmcoMClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldENoaWxkcmVuICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gICAgICAgICAgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgIT09ICdsb2FkaW5nLWluZGljYXRvcidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FzaWRlJywge1xuICAgICAgcmVmOiAnbG9hZGluZycsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmcnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbG9hZGluZycsXG4gICAgICBzdGF0aWNTdHlsZTogbXNcbiAgICB9LCB0aGlzLmdldENoaWxkcmVuKCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuLy8gaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCByZWZyZXNoIGZyb20gJy4vcmVmcmVzaCdcbmltcG9ydCBsb2FkaW5nIGZyb20gJy4vbG9hZGluZydcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlciAoY29udGV4dCwgY3JlYXRlRWxlbWVudCkge1xuLy8gICByZXR1cm4gY3JlYXRlRWxlbWVudChoZWFkZXIpXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2FkaW5nIChjb250ZXh0LCBjcmVhdGVFbGVtZW50LCB2bm9kZSkge1xuICBjb25zdCBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICBjb25zdCBtcyA9IGNvbnRleHQuX2dldENvbXBvbmVudFN0eWxlKGNvbnRleHQuJHZub2RlLmRhdGEpXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGxvYWRpbmcsIGV4dGVuZCh2bm9kZS5kYXRhLCB7XG4gICAgb246IG9wdGlvbnMubGlzdGVuZXJzLFxuICAgIHN0YXRpY1N0eWxlOiBtc1xuICB9KSwgb3B0aW9ucy5jaGlsZHJlbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZnJlc2ggKGNvbnRleHQsIGNyZWF0ZUVsZW1lbnQsIHZub2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gIGNvbnN0IG1zID0gY29udGV4dC5fZ2V0Q29tcG9uZW50U3R5bGUoY29udGV4dC4kdm5vZGUuZGF0YSlcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocmVmcmVzaCwgZXh0ZW5kKHZub2RlLmRhdGEsIHtcbiAgICBvbjogb3B0aW9ucy5saXN0ZW5lcnMsXG4gICAgc3RhdGljU3R5bGU6IG1zXG4gIH0pLCBvcHRpb25zLmNoaWxkcmVuKVxufVxuIiwiaW1wb3J0IHsgc3VwcG9ydFN0aWNreSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVMaXN0U2Nyb2xsIChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoZXZlbnQpXG5cbiAgICAgIGlmIChzdXBwb3J0U3RpY2t5KCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJGVsLnNjcm9sbFRvcFxuICAgICAgY29uc3QgaCA9IHRoaXMuJGNoaWxkcmVuLmZpbHRlcih2bSA9PiB2bS4kcmVmcy5oZWFkZXIpXG5cbiAgICAgIGlmIChoLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhbaV0uaW5pdFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICAgIGhbaV0uYWRkU3RpY2t5KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoW2ldLnJlbW92ZVN0aWNreSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHNjcm9sbGFibGUgfSBmcm9tICcuLi8uLi8uLi9taXhpbnMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbc2Nyb2xsYWJsZSwgbGlzdE1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBsb2FkbW9yZW9mZnNldDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB3cmFwcGVyQ2xhc3MgKCkge1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnd2VleC1saXN0JywgJ3dlZXgtbGlzdC13cmFwcGVyJ11cbiAgICAgIHRoaXMuX3JlZnJlc2ggJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLXJlZnJlc2gnKVxuICAgICAgdGhpcy5fbG9hZGluZyAmJiBjbGFzc0FycmF5LnB1c2goJ3dpdGgtbG9hZGluZycpXG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZUNoaWxkcmVuIChoKSB7XG4gICAgICBjb25zdCBzbG90cyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIHRoaXMuX2NlbGxzID0gc2xvdHMuZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZS50YWcgfHwgIXZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHJldHVybiBmYWxzZVxuICAgICAgICBzd2l0Y2ggKHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnKSB7XG4gICAgICAgICAgY2FzZSAnbG9hZGluZyc6IHRoaXMuX2xvYWRpbmcgPSBzaGFyZWQuY3JlYXRlTG9hZGluZyh0aGlzLCBoLCB2bm9kZSk7IHJldHVybiBmYWxzZVxuICAgICAgICAgIGNhc2UgJ3JlZnJlc2gnOiB0aGlzLl9yZWZyZXNoID0gc2hhcmVkLmNyZWF0ZVJlZnJlc2godGhpcywgaCwgdm5vZGUpOyByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuX3JlZnJlc2gsXG4gICAgICAgIGgoJ2h0bWw6ZGl2Jywge1xuICAgICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbGlzdC1pbm5lcidcbiAgICAgICAgfSwgdGhpcy5fY2VsbHMpLFxuICAgICAgICB0aGlzLl9sb2FkaW5nXG4gICAgICBdXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnbGlzdCdcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnbGlzdCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbWFpbicsIHtcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsaXN0JyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgc3RhdGljU3R5bGU6IG1zLFxuICAgICAgb246IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcCgpLCB7XG4gICAgICAgIHNjcm9sbDogdGhpcy5oYW5kbGVMaXN0U2Nyb2xsLFxuICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIHRvdWNobW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG4gICAgICAgIHRvdWNoZW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgICB9KVxuICAgIH0sIHRoaXMuY3JlYXRlQ2hpbGRyZW4oY3JlYXRlRWxlbWVudCkpXG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnY2VsbCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdjZWxsJyB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtY2VsbCcsXG4gICAgICBzdGF0aWNTdHlsZTogbXNcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG4iLCJpbXBvcnQgeyBzY3JvbGxhYmxlIH0gZnJvbSAnLi4vLi4vbWl4aW5zJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tICcuL3NoYXJlZCdcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0L2xpc3RNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIHNjcm9sbERpcmVjdGlvbjoge1xuICAgICAgdHlwZTogW1N0cmluZ10sXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkbW9yZW9mZnNldDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIC8vIFRPRE86IHN1cHBvcnQgbG9hZG1vcmUgcmV0cnlcbiAgICBsb2FkbW9yZXJldHJ5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LXNjcm9sbGVyJywgJ3dlZXgtc2Nyb2xsZXItd3JhcHBlciddXG4gICAgICBpZiAodGhpcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc2Nyb2xsZXItaG9yaXpvbnRhbCcpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXNjcm9sbGVyLXZlcnRpY2FsJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGFzc0FycmF5LmpvaW4oJyAnKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY3JlYXRlQ2hpbGRyZW4gKGgpIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgdGhpcy5fY2VsbHMgPSBzbG90cy5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICBpZiAoIXZub2RlLnRhZyB8fCAhdm5vZGUuY29tcG9uZW50T3B0aW9ucykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHN3aXRjaCAodm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcpIHtcbiAgICAgICAgICBjYXNlICdsb2FkaW5nJzogdGhpcy5fbG9hZGluZyA9IHNoYXJlZC5jcmVhdGVMb2FkaW5nKHRoaXMsIGgsIHZub2RlKTsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgY2FzZSAncmVmcmVzaCc6IHRoaXMuX3JlZnJlc2ggPSBzaGFyZWQuY3JlYXRlUmVmcmVzaCh0aGlzLCBoLCB2bm9kZSk7IHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5fcmVmcmVzaCxcbiAgICAgICAgaCgnaHRtbDpkaXYnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zY3JvbGxlci1pbm5lcidcbiAgICAgICAgfSwgdGhpcy5fY2VsbHMpLFxuICAgICAgICB0aGlzLl9sb2FkaW5nXG4gICAgICBdXG4gICAgfSxcbiAgICBzY3JvbGxUbyAodm5vZGUpIHtcbiAgICAgIGlmICh2bm9kZSAmJiB2bm9kZS4kZWwpIHtcbiAgICAgICAgLy8gVE9ETzogYWRkIGFuaW1hdGlvblxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSB2bm9kZS4kZWwub2Zmc2V0VG9wXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnc2Nyb2xsZXInXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3Njcm9sbGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cblxuICAgIHRoaXMuX2NlbGxzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICB9KVxuXG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21haW4nLCB7XG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc2Nyb2xsZXInIH0sXG4gICAgICBzdGF0aWNDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG4gICAgICBzdGF0aWNTdHlsZTogbXMsXG4gICAgICBvbjogZXh0ZW5kKHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksIHtcbiAgICAgICAgc2Nyb2xsOiB0aGlzLmhhbmRsZVNjcm9sbCxcbiAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICB0b3VjaG1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgfSlcbiAgICB9LCB0aGlzLmNyZWF0ZUNoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQsIGV4dGVuZEtleXMgfSBmcm9tICcuLi8uLi91dGlscydcblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9ySXRlbVN0eWxlIChzcGVjLCBpc0FjdGl2ZSkge1xuICBjb25zdCBzdHlsZSA9IHt9XG4gIHN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBzcGVjW2lzQWN0aXZlID8gJ2l0ZW0tc2VsZWN0ZWQtY29sb3InIDogJ2l0ZW0tY29sb3InXVxuICBzdHlsZVsnd2lkdGgnXSA9IHN0eWxlWydoZWlnaHQnXSA9IHNwZWNbJ2l0ZW0tc2l6ZSddXG4gIHJldHVybiBzdHlsZVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyIChjb250ZXh0LCBoKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSBjb250ZXh0Ll9nZXRDb21wb25lbnRTdHlsZShjb250ZXh0LiR2bm9kZS5kYXRhKVxuICBjb250ZXh0LiR2bm9kZS5kYXRhLmNhY2hlZCA9IHt9XG4gIGV4dGVuZEtleXMoY29udGV4dC4kdm5vZGUuZGF0YS5jYWNoZWQsIG1lcmdlZFN0eWxlLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuICBjb25zdCBpbmRpY2F0b3JTcGVjU3R5bGUgPSBleHRlbmRLZXlzKFxuICAgICAge30sXG4gICAgICBtZXJnZWRTdHlsZSxcbiAgICAgIFsnaXRlbS1jb2xvcicsICdpdGVtLXNlbGVjdGVkLWNvbG9yJywgJ2l0ZW0tc2l6ZSddXG4gICAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcihjb250ZXh0LmNvdW50KTsgKytpKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsnd2VleC1pbmRpY2F0b3ItaXRlbSddXG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2VcbiAgICBpZiAoaSA9PT0gTnVtYmVyKGNvbnRleHQuYWN0aXZlKSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCd3ZWV4LWluZGljYXRvci1pdGVtLWFjdGl2ZScpXG4gICAgICBpc0FjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY2hpbGRyZW4ucHVzaChoKCdtYXJrJywge1xuICAgICAgc3RhdGljQ2xhc3M6IGNsYXNzTmFtZXMuam9pbignICcpLFxuICAgICAgc3RhdGljU3R5bGU6IGdldEluZGljYXRvckl0ZW1TdHlsZShpbmRpY2F0b3JTcGVjU3R5bGUsIGlzQWN0aXZlKVxuICAgIH0pKVxuICB9XG4gIGlmICghY29udGV4dC4kdm5vZGUuY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgY29udGV4dC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgX3JlTGF5b3V0KHRoaXMsIF9nZXRWaXJ0dWFsUmVjdCh0aGlzLCBtZXJnZWRTdHlsZSksIF9nZXRMdGJyKHRoaXMsIG1lcmdlZFN0eWxlKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiBoKCduYXYnLCB7XG4gICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdpbmRpY2F0b3InIH0sXG4gICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWluZGljYXRvcicsXG4gICAgc3RhdGljU3R5bGU6IG1lcmdlZFN0eWxlXG4gIH0sIGNoaWxkcmVuKVxufVxuXG4vKipcbiAqIGdldCBpbmRpY2F0b3IncyB2aXJ0dWFsIHJlY3QgKHdpZHRoLCBoZWlnaHQpLCB3aGljaCBpcyB0aGUgLlxuICovXG5mdW5jdGlvbiBfZ2V0VmlydHVhbFJlY3QgKGNvbnRleHQsIG1lcmdlZFN0eWxlKSB7XG4gIGNvbnN0IGN0ID0gY29udGV4dC5fZ2V0UGFyZW50UmVjdCgpXG4gIGNvbnN0IHJlY3QgPSBbJ3dpZHRoJywgJ2hlaWdodCddLnJlZHVjZSgocHJlLCBrZXkpID0+IHtcbiAgICBjb25zdCBtc3YgPSBtZXJnZWRTdHlsZSAmJiBtZXJnZWRTdHlsZVtrZXldXG4gICAgcHJlW2tleV0gPSBtc3YgPyBwYXJzZUZsb2F0KG1zdikgOiBjdFtrZXldXG4gICAgcmV0dXJuIHByZVxuICB9LCB7fSlcbiAgcmV0dXJuIHJlY3Rcbn1cblxuLyoqXG4gKiBnZXQgaW5kaWNhdG9yJ3MgbHRiciB2YWx1ZXMgKHdpdGhvdXQgdW5pdHMpLlxuICovXG5mdW5jdGlvbiBfZ2V0THRiciAoY29udGV4dCwgbWVyZ2VkU3R5bGUpIHtcbiAgcmV0dXJuIFsnbGVmdCcsICd0b3AnLCAnYm90dG9tJywgJ3JpZ2h0J10ucmVkdWNlKChwcmUsIGtleSkgPT4ge1xuICAgIGNvbnN0IG1zdiA9IG1lcmdlZFN0eWxlICYmIG1lcmdlZFN0eWxlW2tleV1cbiAgICAvLyB1bmRlZmluZWQsIG51bGwsIG9yICcwcHgnIC0+IG9cbiAgICBwcmVba2V5XSA9IG1zdiAmJiBwYXJzZUZsb2F0KG1zdikgfHwgMFxuICAgIHJldHVybiBwcmVcbiAgfSwge30pXG59XG5cbi8qKlxuICogZ2V0IGluZGljYXRvcidzIHJlY3QgKHdpZHRoLCBoZWlnaHQpLlxuICovXG5mdW5jdGlvbiBfZ2V0SW5kaWNhdG9yUmVjdCAoZWwpIHtcbiAgbGV0IHdpZHRoLCBoZWlnaHRcbiAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIHdpZHRoID0gaGVpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwuY2hpbGRyZW5bMF0pXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgaXRlbUNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbC5jaGlsZHJlblsxXSlcbiAgICBjb25zdCBwYWRkaW5nID0gcGFyc2VGbG9hdChpdGVtQ29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0KVxuICAgIGhlaWdodCA9IHBhcnNlRmxvYXQoaXRlbUNvbXB1dGVkU3R5bGUuaGVpZ2h0KVxuICAgIHdpZHRoID0gZWwuY2hpbGRyZW4ubGVuZ3RoICogKGhlaWdodCArIHBhZGRpbmcpIC0gcGFkZGluZ1xuICB9XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfVxufVxuXG4vKipcbiAqIGNhbGN1bGF0ZSBhbmQgcmVzZXQgaW5kaWNhdG9yJ3Mgd2lkdGgsIGhlaWdodCwgYW5kIGx0YnIuXG4gKiBAcGFyYW0ge29iamVjdH0gdmlydHVhbFJlY3QuIHdpZHRoIGFuZCBoZWlnaHQgb2YgaW5kaWNhdG9yJ3MgdmlydHVhbCByZWN0IGJveC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBsdGJyLiB0aGUgdXNlciBzcGVjaWZpZWQgbGVmdCwgdG9wLCBib3R0b20sIHJpZ2h0IHBpeGVscyAod2l0aG91dCB1bml0cykuXG4gKi9cbmZ1bmN0aW9uIF9yZUxheW91dCAoY29udGV4dCwgdmlydHVhbFJlY3QsIGx0YnIpIHtcbiAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICBjb25zdCByZWN0ID0gX2dldEluZGljYXRvclJlY3QoZWwpXG4gIGNvbnN0IHJlY3RXaXRoUHggPSBPYmplY3Qua2V5cyhyZWN0KS5yZWR1Y2UoKHByZSwga2V5KSA9PiB7XG4gICAgcHJlW2tleV0gPSByZWN0W2tleV0gKyAncHgnXG4gICAgcmV0dXJuIHByZVxuICB9LCB7fSlcbiAgZXh0ZW5kKGVsLnN0eWxlLCByZWN0V2l0aFB4KVxuICBjb25zdCBheGlzTWFwID0gW1xuICAgIHsgZGlyOiBsdGJyLmxlZnQgPyAnbGVmdCcgOiBsdGJyLnJpZ2h0ID8gJ3JpZ2h0JyA6ICdsZWZ0Jywgc2NhbGU6ICd3aWR0aCcgfSxcbiAgICB7IGRpcjogbHRici50b3AgPyAndG9wJyA6IGx0YnIuYm90dG9tID8gJ2JvdHRvbScgOiAndG9wJywgc2NhbGU6ICdoZWlnaHQnIH1cbiAgXVxuICBPYmplY3Qua2V5cyhheGlzTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgeyBkaXIsIHNjYWxlIH0gPSBheGlzTWFwW2tleV1cbiAgICBlbC5zdHlsZVtkaXJdID0gbHRicltkaXJdICsgdmlydHVhbFJlY3Rbc2NhbGVdIC8gMiAtIHJlY3Rbc2NhbGVdIC8gMiArICdweCdcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kaWNhdG9yJyxcbiAgbWV0aG9kczoge1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgY291bnQ6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgYWN0aXZlOiBbTnVtYmVyLCBTdHJpbmddXG4gIH0sXG4gIHVwZGF0ZWQgKCkge1xuICAgIGNvbnN0IG1lcmdlZFN0eWxlID0gdGhpcy5fZ2V0Q29tcG9uZW50U3R5bGUodGhpcy4kdm5vZGUuZGF0YSlcbiAgICBfcmVMYXlvdXQodGhpcywgX2dldFZpcnR1YWxSZWN0KHRoaXMsIG1lcmdlZFN0eWxlKSwgX2dldEx0YnIodGhpcywgbWVyZ2VkU3R5bGUpKVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gX3JlbmRlcih0aGlzLCBjcmVhdGVFbGVtZW50KVxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudC8qLCBuZXh0RnJhbWUqLywgZmlyZUxhenlsb2FkIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IFRSQU5TSVRJT05fVElNRSA9IDIwMFxuXG4vLyB0cmlnZ2VyIHNjcm9sbCBldmVudCBmcmVxdWVuY3kuXG4vLyBjb25zdCBzY3JvbGxEYW0gPSAxNlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICAvLyBnZXQgc3RhbmRhcmQgaW5kZXhcbiAgICBub3JtYWxpemVJbmRleCAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gKGluZGV4ICsgdGhpcy5mcmFtZUNvdW50KSAlIHRoaXMuZnJhbWVDb3VudFxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG5ld0luZGV4LCAwKSwgdGhpcy5mcmFtZUNvdW50IC0gMSlcbiAgICB9LFxuXG4gICAgc2xpZGVUbyAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleChpbmRleClcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuX2NlbGxzLmxlbmd0aCA8PSAxID8gMCA6IHRoaXMuY3VycmVudEluZGV4IC0gaW5kZXhcbiAgICAgIHRoaXMuaW5uZXJPZmZzZXQgKz0gTWF0aC5zaWduKHN0ZXApICogdGhpcy53cmFwcGVyV2lkdGhcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAvLyBjb25zdCBtYXRjaCA9IChpbm5lci5zdHlsZS50cmFuc2Zvcm0gfHwgaW5uZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtKS5tYXRjaCgvKFxcZCspcHgvKVxuICAgICAgICAvLyBjb25zdCBjdXJyZW50T2Zmc2V0ID0gcGFyc2VGbG9hdChtYXRjaFsxXSlcbiAgICAgICAgLy8gVE9ETzogd2lsbC1jaGFuZ2UgfCBzZXQgc3R5bGVzIHRvZ2V0aGVyXG4gICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSBgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXRgXG4gICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuaW5uZXJPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnXG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgICAgIH0sIFRSQU5TSVRJT05fVElNRSlcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGVtaXQgc2Nyb2xsIGV2ZW50LlxuICAgICAgLy8gbmV4dEZyYW1lKClcblxuICAgICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG5ld0luZGV4XG4gICAgICAgIC8vIHJlcGxhY2UgJGVsIHdpdGggeyBhdHRyLCBzdHlsZSB9IGlzIGEgbGVnYWN5IHVzYWdlLiBJcyBpdCBuZWNlc3NhcnkgdG9cbiAgICAgICAgLy8gZG8gdGhpcyA/IE9yIGp1c3QgdGVsbCBkZXZlcnMgdG8gdXNlIGlubGluZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGF0dHJzID9cbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdjaGFuZ2UnLCB7XG4gICAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudEluZGV4XG4gICAgICAgIH0pKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5yZW9yZGVyKCkgfSwgVFJBTlNJVElPTl9USU1FKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW9yZGVyICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSB0aGlzLm5vcm1hbGl6ZUluZGV4KHRoaXMuY3VycmVudEluZGV4IC0gMSlcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleCh0aGlzLmN1cnJlbnRJbmRleCArIDEpXG4gICAgICAgIGxldCBwcmV2RWxtID0gdGhpcy5fY2VsbHNbcHJldkluZGV4XS5lbG1cbiAgICAgICAgY29uc3QgbmV4dEVsbSA9IHRoaXMuX2NlbGxzW25leHRJbmRleF0uZWxtXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFbG0gPSB0aGlzLl9jZWxsc1t0aGlzLmN1cnJlbnRJbmRleF0uZWxtXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQ2xvbmUgPSAoY2xvbmUpID0+IHtcbiAgICAgICAgICBpZiAoY2xvbmUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbG9uZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKVxuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCA+IFRSQU5TSVRJT05fVElNRSA/IHRoaXMuaW50ZXJ2YWwgOiBUUkFOU0lUSU9OX1RJTUUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvbmUgcHJldkNlbGwgaWYgdGhlcmUgYXJlIG9ubHkgdG93IHNsaWRlcy5cbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHRoaXMuX2Nsb25lUHJldiA9IHByZXZFbG0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgdGhpcy5fY2xvbmVQcmV2LmNsYXNzTGlzdC5hZGQoJ3dlZXgtc2xpZGUtY2xvbmUtcHJldicpXG4gICAgICAgICAgcHJldkVsbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLl9jbG9uZVByZXYsIGN1cnJlbnRFbG0pXG4gICAgICAgICAgcmVtb3ZlQ2xvbmUodGhpcy5fY2xvbmVQcmV2KVxuICAgICAgICAgIGlmICghdGhpcy5fcHJldkZpcmVkKSB7XG4gICAgICAgICAgICBmaXJlTGF6eWxvYWQodGhpcy5fY2xvbmVQcmV2LCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5fcHJldkZpcmVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBwcmV2RWxtID0gdGhpcy5fY2xvbmVQcmV2XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2T2Zmc2V0ID0gLXRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbm5lck9mZnNldFxuICAgICAgICBwcmV2RWxtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3ByZXZPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBwcmV2RWxtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3ByZXZPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLmlubmVyT2Zmc2V0XG4gICAgICAgIG5leHRFbG0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bmV4dE9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIG5leHRFbG0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bmV4dE9mZnNldH1weCwgMCwgMClgXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBuZXh0ICgpIHtcbiAgICAgIHRoaXMuc2xpZGVUbyh0aGlzLmN1cnJlbnRJbmRleCArIDEpXG4gICAgfSxcblxuICAgIHByZXYgKCkge1xuICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuY3VycmVudEluZGV4IC0gMSlcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICB0aGlzLl90b3VjaFBhcmFtcyA9IHtcbiAgICAgICAgb3JpZ2luYWxUcmFuc2Zvcm06IHRoaXMuJHJlZnMuaW5uZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHRoaXMuJHJlZnMuaW5uZXIuc3R5bGUudHJhbnNmb3JtLFxuICAgICAgICBzdGFydFRvdWNoRXZlbnQ6IHRvdWNoLFxuICAgICAgICBzdGFydFg6IHRvdWNoLnBhZ2VYLFxuICAgICAgICBzdGFydFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaE1vdmUgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY29uc3QgdHAgPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgaWYgKCF0cCkgeyByZXR1cm4gfVxuICAgICAgY29uc3QgeyBzdGFydFgsIHN0YXJ0WSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgIGNvbnN0IG9mZnNldFggPSB0b3VjaC5wYWdlWCAtIHN0YXJ0WFxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRvdWNoLnBhZ2VZIC0gc3RhcnRZXG4gICAgICB0cC5vZmZzZXRYID0gb2Zmc2V0WFxuICAgICAgdHAub2Zmc2V0WSA9IG9mZnNldFlcbiAgICAgIGxldCBpc1YgPSB0cC5pc1ZlcnRpY2FsXG4gICAgICBpZiAodHlwZW9mIGlzViA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXNWID0gdHAuaXNWZXJ0aWNhbCA9IE1hdGguYWJzKG9mZnNldFgpIDwgTWF0aC5hYnMob2Zmc2V0WSlcbiAgICAgICAgaWYgKCFpc1YpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGxzdGFydCcsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAnc2Nyb2xsc3RhcnQnLCB7fSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHZlcnRpY2FsIHNjcm9sbC4ganVzdCBpZ25vcmUgaXQuXG4gICAgICBpZiAoaXNWKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gaG9yaXpvbnRhbCBzY3JvbGwuIHRyaWdnZXIgc2Nyb2xsIGV2ZW50LlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAoaW5uZXIgJiYgb2Zmc2V0WCkge1xuICAgICAgICAvLyBUT0RPOiBhZGQgdGhyb3R0bGUuXG4gICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAnc2Nyb2xsJywge1xuICAgICAgICAgIG9mZnNldFhSYXRpbzogb2Zmc2V0WCAvIHRoaXMud3JhcHBlcldpZHRoXG4gICAgICAgIH0pKVxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0ICsgb2Zmc2V0WH1weCwgMCwgMClgXG4gICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuaW5uZXJPZmZzZXQgKyBvZmZzZXRYfXB4LCAwLCAwKWBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hFbmQgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY29uc3QgdHAgPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgaWYgKCF0cCkgeyByZXR1cm4gfVxuICAgICAgY29uc3QgaXNWID0gdHAuaXNWZXJ0aWNhbFxuICAgICAgaWYgKHR5cGVvZiBpc1YgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBjb25zdCB7IG9mZnNldFggfSA9IHRwXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsZW5kJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdzY3JvbGxlbmQnKSlcbiAgICAgICAgLy8gVE9ETzogdGVzdCB0aGUgdmVsb2NpdHkgaWYgaXQncyBsZXNzIHRoYW4gMC4yLlxuICAgICAgICBjb25zdCByZXNldCA9IE1hdGguYWJzKG9mZnNldFggLyB0aGlzLndyYXBwZXJXaWR0aCkgPCAwLjJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0WCA+IDAgPyAxIDogLTFcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSByZXNldCA/IHRoaXMuY3VycmVudEluZGV4IDogKHRoaXMuY3VycmVudEluZGV4IC0gZGlyZWN0aW9uKVxuICAgICAgICB0aGlzLnNsaWRlVG8obmV3SW5kZXgpXG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fdG91Y2hQYXJhbXNcbiAgICB9XG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgdGhyb3R0bGUsIGJpbmQsIGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGluZGljYXRvciBmcm9tICcuL2luZGljYXRvcidcbmltcG9ydCBzbGlkZU1peGluIGZyb20gJy4vc2xpZGVNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtzbGlkZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICAnYXV0by1wbGF5Jzoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW50ZXJ2YWw6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAzMDAwXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBmcmFtZUNvdW50OiAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjb21wdXRlV3JhcHBlclNpemUgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdGhpcy53cmFwcGVyV2lkdGggPSByZWN0LndpZHRoXG4gICAgICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUxheW91dCAoKSB7XG4gICAgICB0aGlzLmNvbXB1dGVXcmFwcGVyU2l6ZSgpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICBpbm5lci5zdHlsZS53aWR0aCA9IHRoaXMud3JhcHBlcldpZHRoICogdGhpcy5mcmFtZUNvdW50ICsgJ3B4J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXRDaGlsZHJlbiAoY3JlYXRlRWxlbWVudCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBsZXQgaW5kaWNhdG9yVm5vZGVcbiAgICAgIGNvbnN0IGNlbGxzID0gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZS50YWcpIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAodm5vZGUuY29tcG9uZW50T3B0aW9ucyAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgICAgICBpbmRpY2F0b3JWbm9kZSA9IHZub2RlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pLm1hcCh2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICByZWY6ICdjZWxscycsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlci1jZWxsJ1xuICAgICAgICB9LCBbdm5vZGVdKVxuICAgICAgfSlcbiAgICAgIGlmIChpbmRpY2F0b3JWbm9kZSkge1xuICAgICAgICBpbmRpY2F0b3JWbm9kZS5kYXRhLmF0dHJzID0gaW5kaWNhdG9yVm5vZGUuZGF0YS5hdHRycyB8fCB7fVxuICAgICAgICBpbmRpY2F0b3JWbm9kZS5kYXRhLmF0dHJzLmNvdW50ID0gY2VsbHMubGVuZ3RoXG4gICAgICAgIGluZGljYXRvclZub2RlLmRhdGEuYXR0cnMuYWN0aXZlID0gdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yID0gY3JlYXRlRWxlbWVudChpbmRpY2F0b3IsIGluZGljYXRvclZub2RlLmRhdGEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2VsbHNcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdzbGlkZXInXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgdGhpcy5pbm5lck9mZnNldCA9IDBcbiAgICB0aGlzLl9pbmRpY2F0b3IgPSBudWxsXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5ICE9PSAnZmFsc2UnKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IE51bWJlcih0aGlzLmludGVydmFsKVxuICAgICAgdGhpcy5fbGFzdFNsaWRlVGltZSA9IERhdGUubm93KClcblxuICAgICAgY29uc3QgYXV0b1BsYXlGbiA9IGJpbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b1BsYXlUaW1lcilcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBsZXQgbmV4dFRpY2sgPSBpbnRlcnZhbCAtIG5vdyArIHRoaXMuX2xhc3RTbGlkZVRpbWVcbiAgICAgICAgbmV4dFRpY2sgPSBuZXh0VGljayA+IDEwMCA/IG5leHRUaWNrIDogaW50ZXJ2YWxcblxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICB0aGlzLl9sYXN0U2xpZGVUaW1lID0gbm93XG4gICAgICAgIHRoaXMuX2F1dG9QbGF5VGltZXIgPSBzZXRUaW1lb3V0KGF1dG9QbGF5Rm4sIG5leHRUaWNrKVxuICAgICAgfSwgdGhpcylcblxuICAgICAgdGhpcy5fYXV0b1BsYXlUaW1lciA9IHNldFRpbWVvdXQoYXV0b1BsYXlGbiwgaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3NsaWRlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG5cbiAgICB0aGlzLl9jZWxscyA9IHRoaXMuZm9ybWF0Q2hpbGRyZW4oY3JlYXRlRWxlbWVudClcbiAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl9jZWxscy5sZW5ndGhcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgJ25hdicsXG4gICAgICB7XG4gICAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3NsaWRlcicgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlciB3ZWV4LXNsaWRlci13cmFwcGVyJyxcbiAgICAgICAgb246IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcChbJ3Njcm9sbCcsICdzY3JvbGxzdGFydCcsICdzY3JvbGxlbmQnXSksIHtcbiAgICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgdG91Y2htb3ZlOiB0aHJvdHRsZShiaW5kKHRoaXMuaGFuZGxlVG91Y2hNb3ZlLCB0aGlzKSwgMjUpLFxuICAgICAgICAgIHRvdWNoZW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCd1bCcsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlci1pbm5lcidcbiAgICAgICAgfSwgdGhpcy5fY2VsbHMpLFxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JcbiAgICAgIF1cbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyICgpIHtcbiAgICAvLyBUT0RPOiBhZGQgdGFnIG5lc3RpbmcgdmFsaWRhdGlvblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnXG4gICAgICBjb25zdCBwYXJlbnRUYWcgPSB0aGlzLiRwYXJlbnQuJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgICAgY29uc29sZS53YXJuKGBbVnVlIFJlbmRlcl0gVGhlIDwke3RhZ30+IGNhbid0IGJlIHRoZSBjaGlsZCBvZiA8JHtwYXJlbnRUYWd9Pi5gKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIEdldCB0ZXh0IHNwZWNpYWwgc3R5bGVzIChsaW5lcyBhbmQgdGV4dC1vdmVyZmxvdykuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRTcGVjU3R5bGUgKGNvbnRleHQgPSB7fSkge1xuICBjb25zdCBwcm9wTGluZXMgPSBwYXJzZUludChjb250ZXh0LmxpbmVzKSB8fCAwXG4gIGNvbnN0IHByb3BPdmVyZmxvdyA9IGNvbnRleHQudGV4dE92ZXJmbG93IHx8ICdlbGxpcHNpcydcbiAgY29uc3QgZGF0YSA9IGNvbnRleHQuJG9wdGlvbnMuX3BhcmVudFZub2RlLmRhdGFcbiAgY29uc3Qgc3RhdGljU3R5bGUgPSBkYXRhICYmIGRhdGEuc3RhdGljU3R5bGUgfHwge31cbiAgY29uc3QgbGluZXMgPSBwYXJzZUludChzdGF0aWNTdHlsZS5saW5lcykgfHwgcHJvcExpbmVzXG4gIGNvbnN0IG92ZXJmbG93ID0gc3RhdGljU3R5bGVbJ3RleHQtb3ZlcmZsb3cnXSB8fCBwcm9wT3ZlcmZsb3dcbiAgaWYgKGxpbmVzID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAndGV4dC1vdmVyZmxvdyc6IG92ZXJmbG93LFxuICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IGxpbmVzXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0aWNTdHlsZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgbGluZXM6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgdmFsdWU6IFtTdHJpbmddXG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCd0ZXh0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAndGV4dCcgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHQnLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dGVuZChtcywgZ2V0VGV4dFNwZWNTdHlsZSh0aGlzKSlcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFt0aGlzLnZhbHVlXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kLCBtYXBGb3JtRXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMlxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3RleHRhcmVhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBtcyA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6dGV4dGFyZWEnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3RleHRhcmVhJyxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGRpc2FibGVkOiAodGhpcy5kaXNhYmxlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZSksXG4gICAgICAgIGF1dG9mb2N1czogKHRoaXMuYXV0b2ZvY3VzICE9PSAnZmFsc2UnICYmIHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSksXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICByb3dzOiB0aGlzLnJvd3NcbiAgICAgIH0sXG4gICAgICBvbjogZXh0ZW5kKHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksIG1hcEZvcm1FdmVudHModGhpcykpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHRhcmVhJyxcbiAgICAgIHN0YXRpY1N0eWxlOiBtc1xuICAgIH0sIHRoaXMudmFsdWUpXG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcGxheVN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3BhdXNlJyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsncGxheScsICdwYXVzZSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhdXRvcGxheToge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXV0b1BsYXk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgcGxheXNpbmxpbmU6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygndmlkZW8nLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuXG4gICAgLy8gVE9ETzogc3VwcG9ydCBwbGF5U3RhdHVzXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6dmlkZW8nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3ZpZGVvJyxcbiAgICAgICAgYXV0b3BsYXk6ICh0aGlzLmF1dG9wbGF5ICE9PSAnZmFsc2UnICYmIHRoaXMuYXV0b3BsYXkgIT09IGZhbHNlKSxcbiAgICAgICAgYXV0b1BsYXk6ICh0aGlzLmF1dG9wbGF5ICE9PSAnZmFsc2UnICYmIHRoaXMuYXV0b3BsYXkgIT09IGZhbHNlKSxcbiAgICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHMsXG4gICAgICAgIHNyYzogdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoWydzdGFydCcsICdwYXVzZScsICdmaW5pc2gnLCAnZmFpbCddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC12aWRlbydcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gJy4uL3V0aWxzJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gVE9ETzogY2hlY2sgY3Jvc3Mtb3JpZ2luXG4gICAgZ29CYWNrICgpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICB0aGlzLiRlbC5jb250ZW50V2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgICB9XG4gICAgfSxcbiAgICBnb0ZvcndhcmQgKCkge1xuICAgICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICAgIHRoaXMuJGVsLmNvbnRlbnRXaW5kb3cuaGlzdG9yeS5mb3J3YXJkKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbG9hZCAoKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgdGhpcy4kZWwuY29udGVudFdpbmRvdy5oaXN0b3J5LnJlbG9hZCgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgdGhpcy4kZW1pdCgncGFnZXN0YXJ0JywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdwYWdlc3RhcnQnLCB7IHVybDogdGhpcy5zcmMgfSkpXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdwYWdlZmluaXNoJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdwYWdlZmluaXNoJywgeyB1cmw6IHRoaXMuc3JjIH0pKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCd3ZWInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuXG4gICAgY29uc3QgbXMgPSB0aGlzLl9nZXRDb21wb25lbnRTdHlsZSh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3dlYicsXG4gICAgICAgIHNyYzogdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoWydlcnJvciddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC13ZWInLFxuICAgICAgc3RhdGljU3R5bGU6IG1zXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IF9zd2l0Y2ggZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgeyBfc3dpdGNoIGFzIHN3aXRjaCB9XG5cbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBkaXYgZnJvbSAnLi9kaXYnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSdcbmltcG9ydCBpbnB1dCBmcm9tICcuL2lucHV0J1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL3Njcm9sbGFibGUvaGVhZGVyJ1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9zY3JvbGxhYmxlL2xpc3QnXG5pbXBvcnQgY2VsbCBmcm9tICcuL3Njcm9sbGFibGUvbGlzdC9jZWxsJ1xuaW1wb3J0IHNjcm9sbGVyIGZyb20gJy4vc2Nyb2xsYWJsZS9zY3JvbGxlcidcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG5pbXBvcnQgaW5kaWNhdG9yIGZyb20gJy4vd2FybmluZydcbi8vIGltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9zbGlkZXIvaW5kaWNhdG9yJ1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi93YXJuaW5nJ1xuaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi93YXJuaW5nJ1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9zY3JvbGxhYmxlL2xvYWRpbmctaW5kaWNhdG9yJ1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0J1xuaW1wb3J0IHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi92aWRlbydcbmltcG9ydCB3ZWIgZnJvbSAnLi93ZWInXG5cbmV4cG9ydCB7XG4gIGEsXG4gIGRpdixcbiAgZGl2IGFzIGNvbnRhaW5lcixcbiAgaW1hZ2UsXG4gIGltYWdlIGFzIGltZyxcbiAgaW5wdXQsXG4gIGhlYWRlcixcbiAgbGlzdCxcbiAgY2VsbCxcbiAgc2Nyb2xsZXIsXG4gIHNsaWRlcixcbiAgaW5kaWNhdG9yLFxuICByZWZyZXNoLFxuICBsb2FkaW5nLFxuICBMb2FkaW5nSW5kaWNhdG9yLFxuICB0ZXh0LFxuICB0ZXh0YXJlYSxcbiAgdmlkZW8sXG4gIHdlYlxufVxuIiwiLy8gaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgd2VleCBmcm9tICcuL2VudidcbmltcG9ydCB7IHNldFZ1ZSB9IGZyb20gJy4vZW52J1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBiYXNlLCBzdHlsZSB9IGZyb20gJy4vbWl4aW5zJ1xuLy8gaW1wb3J0IHN0eWxlTWl4aW4gZnJvbSAnLi9taXhpbnMvc3R5bGUnXG5cbi8qKlxuICogaW5pdCB3ZWV4LlxuICogQHBhcmFtICB7VnVlJDJ9IFZ1ZTogVnVlIENvbnN0cnVjdG9yLlxuICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zOiBleHRlbmQgd2VleCBwbHVnaW5zLlxuICogICAgICAgICAtIGNvbXBvbmVudHMuXG4gKiAgICAgICAgIC0gbW9kdWxlcy5cbiAqL1xuZnVuY3Rpb24gaW5pdCAoVnVlLyosIG9wdGlvbnMgPSB7fSovKSB7XG4gIHNldFZ1ZShWdWUpXG5cbiAgVnVlLnByb3RvdHlwZS4kZ2V0Q29uZmlnID0gKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybignW1Z1ZSBSZW5kZXJdIFwidGhpcy4kZ2V0Q29uZmlnXCIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcIndlZXguY29uZmlnXCIgaW5zdGVhZC4nKVxuICAgIHJldHVybiB3ZWV4LmNvbmZpZ1xuICB9XG5cbiAgY29uc3QgaHRtbFJlZ2V4ID0gL15odG1sOi9pXG4gIFZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IHRhZyA9PiBodG1sUmVnZXgudGVzdCh0YWcpXG4gIFZ1ZS5jb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUgPSB0YWcgPT4gdGFnLnJlcGxhY2UoaHRtbFJlZ2V4LCAnJylcblxuICAvLyByZWdpc3RlciBzZGsgY29tcG9uZW50cy5cbiAgZm9yIChjb25zdCBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICBWdWUuY29tcG9uZW50KG5hbWUsIGNvbXBvbmVudHNbbmFtZV0pXG4gIH1cblxuICAvLyAvLyBnZXQgdXNlciBleHRlbmRlZCBwbHVnaW5zLlxuICAvLyBjb25zdCB7IGNvbXBvbmVudHM6IGNvbXBzLCBtb2R1bGVzIH0gPSBvcHRpb25zXG4gIC8vIC8vIHJlZ2lzdGVyIHVzZXIgZXh0ZW5kZWQgY29tcG9uZW50cy5cbiAgLy8gZm9yIChjb25zdCBuYW1lIGluIGNvbXBzKSB7XG4gIC8vICAgVnVlLmNvbXBvbmVudHMobmFtZSwgY29tcHNbbmFtZV0pXG4gIC8vIH1cbiAgLy8gLy8gcmVnaXN0ZXIgdXNlciBleHRlbmRlZCBtb2R1bGVzLlxuICAvLyBmb3IgKGNvbnN0IG1vZCBpbiBtb2R1bGVzKSB7XG4gIC8vICAgdGhpcy5yZWdpc3Rlck1vZHVsZShtb2QsIG1vZHVsZXNbbW9kXSlcbiAgLy8gfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAvLyAgIGlmIChzZW12ZXIubHQoVnVlLnZlcnNpb24sICcyLjEuNScpKSB7XG4gIC8vICAgICBjb25zb2xlLndhcm4oYFtWdWUgUmVuZGVyXSBUaGUgdmVyc2lvbiBvZiBWdWUgc2hvdWxkIGJlIGAgK1xuICAvLyAgICAgICBgZ3JlYXRlciB0aGFuIDIuMS41LCBjdXJyZW50IGlzICR7VnVlLnZlcnNpb259LmApXG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUuaW5mbyhgW1Z1ZSBSZW5kZXJdIFJlZ2lzdGVyZWQgY29tcG9uZW50czogYFxuICAvLyAgICAgKyBgWyR7T2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbignLCAnKX1dLmApXG4gIFZ1ZS5taXhpbihiYXNlKVxuICBWdWUubWl4aW4oc3R5bGUpXG4gIC8vIH1cbn1cblxuLy8gYXV0byBpbml0IGluIGRpc3QgbW9kZS5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIGluaXQod2luZG93LlZ1ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VleFxuIl0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJpc09iamVjdCIsInJlcXVpcmUkJDEiLCJkb2N1bWVudCIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwiZFAiLCJyZXF1aXJlJCQ0IiwiZ2xvYmFsIiwiJGV4cG9ydCIsInRvU3RyaW5nIiwiSU9iamVjdCIsInRvSW50ZWdlciIsIm1pbiIsInRvSU9iamVjdCIsImRlZmluZWQiLCJyZXF1aXJlJCQ1IiwiYXJndW1lbnRzIiwiY29mIiwiYW5PYmplY3QiLCJnZXRLZXlzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIlBST1RPVFlQRSIsImhhcyIsIlRBRyIsImNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwidG9PYmplY3QiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkOCIsInJlZGVmaW5lIiwicmVxdWlyZSQkNyIsImhpZGUiLCJyZXF1aXJlJCQ2IiwiSXRlcmF0b3JzIiwiSVRFUkFUT1IiLCJBcnJheVByb3RvIiwiY2xhc3NvZiIsImFGdW5jdGlvbiIsImN0eCIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiU1BFQ0lFUyIsIkxJQlJBUlkiLCJyZXF1aXJlJCQxNyIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEwIiwiVHlwZUVycm9yIiwiY29uc3QiLCJ0aGlzIiwibWV0YSIsImxldCIsImhhc093blByb3BlcnR5IiwicXMiLCJnZXRQYXJlbnRTY3JvbGxlciIsImhhc0ludGVyc2VjdGlvbiIsImlzRWxlbWVudFZpc2libGUiLCJpc0NvbXBvbmVudFZpc2libGUiLCJ3YXRjaEFwcGVhciIsIl91aWQiLCJzdGVwIiwicXVldWUiLCJDT05URU5UX0NMQVNTIiwiTVNHX0NMQVNTIiwiQlVUVE9OX0dST1VQX0NMQVNTIiwiQlVUVE9OX0NMQVNTIiwibmF2aWdhdG9yIiwiRXZlbnQiLCJsaWIiLCJ3ZWV4IiwidXRpbHMiLCJ1dGlscy5iaW5kIiwibW9kdWxlcyIsInNoYXJlZC5jcmVhdGVMb2FkaW5nIiwic2hhcmVkLmNyZWF0ZVJlZnJlc2giLCJpbml0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxBQUVBLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUN6QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFBO0FBQy9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO0FBQ2pDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7Ozs7Ozs7Ozs7QUFVbEIsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQ25DLElBQUksRUFB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Q0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLEtBQUssRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBQSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyx3SEFBd0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxD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QUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLEVBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLEtBQUssRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENB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
