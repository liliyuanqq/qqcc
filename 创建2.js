// 导入http模块
const http = require('http');
// 创建web对象
const sever = http.createServer((request,response) => {
let url = new URL(request.url,'http://127.0.0.1');
console.log(url.pathname)
console.log(url.searchParams.get('keyword'))
response.end('url');
});
// 监听端口
sever.listen(3000, () => {
console.log('服务已启动，请访问3000端口')
});