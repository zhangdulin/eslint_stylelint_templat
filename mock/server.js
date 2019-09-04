const express = require("express");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");
const config = require("./config");
const Mock = require("mockjs");

const app = express();
const multipartMiddleware = multipart();

// 定义mock方法
const mock = (data, params) => {
  if (Object.prototype.toString.call(data) === "[object Object]") {
    return Mock.mock(data);
  } else if (typeof data === "function") {
    return Mock.mock(data(params));
  } else {
    return "error: data shold be an object or a function.";
  }
};

// mock数据
// const getUserInfo = {
//   code: 0,
//   message: "success",
//   data: {
//     name: "Alice",
//     mobile: "182xxxx9999",
//     age: 30
//   }
// }

// 路由和数据的聚合
// const config = [
//   {
//     method: "get",
//     url: '/api/getUserInfo',
//     data: getUserInfo
//   }
// ];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "mock");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 绑定路由信息

config.forEach(({ method, url, data }) => {
  if (method === "get") {
    app.get(url, (req, res) => {
      res.json(mock(data, req.query));
    });
  } else if (method === "post") {
    app.post(url, multipartMiddleware, (req, res) => {
      res.json(mock(data, req.body));
    });
  } 
});

// 支持自定义端口
let port = 8081;
process.argv.forEach((arg, index, arr) => {
  if (arg === "--port") {
    port = arr[index + 1] || 8081;
    return false;
  }
});

module.exports = app.listen(port, () => {
  console.log("Mock Server listening on http://localhost:" + port);
});