
const { override, addBabelPlugin } = require('customize-cra')

module.exports = override(addBabelPlugin(["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]));
