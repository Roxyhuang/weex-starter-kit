const faker = require('faker');
const utils = require('../utils/utils');

faker.locale = 'zh_CN';

const productStructure = {
  id: faker.random.number(),
  name: faker.name.findName(),
  cover_url: faker.image.image(),
  description: faker.lorem.text(),
  type: faker.random.number(),
  link_url: faker.internet.url(),
  min_price: faker.random.number(),
  sales_num: faker.random.number(),
  company: faker.company.companyName(),
  recommend: faker.random.number(),
  status: 1,
  start_time: faker.date.future(),
  end_time: faker.date.future(),
};

const productList = utils.repeatData(productStructure, 20);

const List = {
  status_no: 0,
  status_msg: '产品列表',
  time: faker.random.number(),
  data: {
    product_list: productList,
    total_count: 3,
    page_size: 20,
  },
  elapsed: 0.039,
};

module.exports = JSON.stringify(List);
