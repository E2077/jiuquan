/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 33 9 * * * dianzan2.js
*/

/*
const和let的区别:
用const定义的变量以后不能再更改
用let定义的变量可以改
进阶内容: const 对象本身不可更改,但是对象里面的属性可以改,与指针有关
*/

const $ = new Env('2点赞 138空仓不寂寞') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名


const https = require('https');

const options = {
  hostname: 'api.jiucaishuo.com',
  path: '/v2/guzhi/addzan',
  method: 'POST',
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Host': 'api.jiucaishuo.com',
    'User-Agent': 'JiuQuan/227 (jiuquaner.app.chen; build:227; iOS 16.2.0) Alamofire/227',
    'Accept-Language': 'zh-Hans-CN;q=1.0'
  }
};

let count = 0;

function sendRequest() {
  if (count >= 22) {
    clearInterval(timer);
    return;
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  const body = 'abiokytke=0f&act_time=1679805340040&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=bf&bd4uy742=7&bgd7h8tyu54=b5&bgiuytkw=bd&bioduytlw=5&bvytikwqjk=b5&fjlkatj=a87&ghtoiutkmlg=a1c&h13ey474=d4f&h67456y=001&hy5641d321t=f7&ibvytiqjek=da&iogojti=f&is_app=1&jnhf8u5231=bd&kf54ge7=f&lksytkjh=0148&n3bf4uj7y7=1&nbf4uj7y432=0f&nd354uy4752=4&ngd4uy551=01&ngd4yut78=1c&nkjhrew=7&quikgdky=d7&sbnoywr=1b&tbvdiuytk=0&text_id=277117&tiklsktr4=f&tirgkjfs=3f&type=app_ios&u54rg5d=a8&version=2.3.3&y654b5fs3tr=a&yi854tew=d4&yt447e13f=b';
  req.write(body);

  req.end();

  count++;
}

// 每隔2秒执行一次脚本，共执行22次
const timer = setInterval(sendRequest, 2000);
