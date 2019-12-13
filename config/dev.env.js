'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST:'"http://v.juhe.cn"' //开发环境
  // API_HOST:'"http://172.20.10.2:8088"'
})
