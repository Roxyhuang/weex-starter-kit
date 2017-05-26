const faker = require('faker');
const utils = require('../utils/utils');

faker.locale = 'zh_CN';

const productStructure = {
  id: faker.random.number(),
  cate_id: faker.random.number(),
  name: faker.name.findName(),
  cover_url: faker.image.image(),
  description: faker.lorem.text(),
  type: faker.random.number(),
  from_mall: 'mall_ins',
  link_url: '测试',
  min_price: 200,
  sales_num: 128,
  ins_company: '安联1111',
  is_recommend: 1,
  display_order: 0,
  first_rebate: 0.1000,
  second_rebate: 0.0300,
  status: 1,
  online_at: '2017-02-15 12:50:27',
};

const productList = utils.repeatData(productStructure, 4);

const List = {
  status_no: 0,
  status_msg: '产品列表',
  time: faker.random.number(),
  data: {
    product_list: productList,
    total_count: '3',
    page_size: 20,
  },
  elapsed: 0.039,
};

module.exports = JSON.stringify(List);
