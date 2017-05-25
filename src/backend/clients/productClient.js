export default {
  getProductList(data) {
    return this._fetch({ url: '/product/list', body: data });
  },
  getProductDetail(data) {
    return this._fetch({ url: '/product/detail', body: data });
  },
};
