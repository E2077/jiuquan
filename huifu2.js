/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 21 11 * * * huifu2.js
*/

/*
const和let的区别:
用const定义的变量以后不能再更改
用let定义的变量可以改
进阶内容: const 对象本身不可更改,但是对象里面的属性可以改,与指针有关
*/

class Env {
  constructor(name) {
    this.name = name;
  }

  // 在这里定义 Env 类的其他方法
}
const $ = new Env('2回复 138空仓不寂寞') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名


const https = require('https');
const axios = require('axios');

const options = {
  hostname: 'api.jiucaishuo.com',
  path: '/v2/image/comments',
  method: 'POST',
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Host': 'api.jiucaishuo.com',
    'User-Agent': 'JiuQuan/229 (jiuquaner.app.chen; build:229; iOS 12.5.5) Alamofire/229',
    'Accept-Language': 'zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8, zh-Hant-CN;q=0.7'
  }
};

// 随机生成 5 位数字
const getRandomNumber = () => Math.floor(Math.random() * 90000) + 10000;

// 构建请求体
const buildRequestBody = () => `abiokytke=87&act_time=1681558563528&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=f3&bd4uy742=2&bgd7h8tyu54=d2&bgiuytkw=53&bioduytlw=1&bvytikwqjk=d2&com=1&commend_uid=510585&comment_type=1&fjlkatj=1b2&ghtoiutkmlg=911&h13ey474=2bd&h67456y=7ed&hy5641d321t=32&ibvytiqjek=40&iogojti=3&is_app=1&jnhf8u5231=53&kf54ge7=d&lksytkjh=ed50&n3bf4uj7y7=d&nbf4uj7y432=87&nd354uy4752=b&ngd4uy551=ed&ngd4yut78=11&nkjhrew=2&no_push=1&original_id=297026&quikgdky=5c&relay_id=297026&sbnoywr=7f&tbvdiuytk=7&text_id=297026&tiklsktr4=3&tirgkjfs=53&type=app_ios&u54rg5d=1b&version=2.3.6&word=${getRandomNumber()}&y654b5fs3tr=9&yi854tew=2b&yt447e13f=d`;

let index = 0;

function sendRequest() {
  if (index >= bodies.length) {
    clearInterval(timer);
    return;
  }

  const body = buildRequestBody();
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.write(body);

  req.end();
}

// 每隔3秒发送一个请求
const timer = setInterval(sendRequest, 3000);
