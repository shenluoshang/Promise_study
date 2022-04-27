const fs = require('fs');

fs.readFile('./resource/content.txt',(err,data) =>{
  // 如果出错 则抛出错误
  if(err) throw err;
  // 输出文件内容
  console.log(data.toString());
})