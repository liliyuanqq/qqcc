// 导入http模块
const http = require('http');
const url = require('url');
// 创建web对象
const sever = http.createServer((request,response) => {
let res = url.parse(request.url,true);
let pathname = res.pathname;
console.log(pathname);
let keyword = res.query.keyword;
console.log(keyword);
response.end('url');
});
// 监听端口
sever.listen(3000, () => {
console.log('服务已启动，请访问3000端口')
});