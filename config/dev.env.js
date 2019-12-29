'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST:'"/api"' //开发环境
  // API_HOST:'"http://25.23.154.22:8088"'
})
