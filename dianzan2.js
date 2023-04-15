/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 33 9,12 * * * dianzan2.js
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
    'User-Agent': 'JiuQuan/229 (jiuquaner.app.chen; build:229; iOS 12.5.5) Alamofire/229',
    'Accept-Language': 'zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8, zh-Hant-CN;q=0.7'
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

  const body = 'abiokytke=a4&act_time=1681557411140&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=a3&bd4uy742=2&bgd7h8tyu54=bc&bgiuytkw=a0&bioduytlw=3&bvytikwqjk=bc&fjlkatj=263&ghtoiutkmlg=30e&h13ey474=887&h67456y=bf3&hy5641d321t=32&ibvytiqjek=a8&iogojti=3&is_app=1&jnhf8u5231=a0&kf54ge7=7&lksytkjh=f368&n3bf4uj7y7=3&nbf4uj7y432=a4&nd354uy4752=8&ngd4uy551=f3&ngd4yut78=0e&nkjhrew=2&quikgdky=d7&sbnoywr=1a&tbvdiuytk=b&text_id=297026&tiklsktr4=4&tirgkjfs=c4&type=app_ios&u54rg5d=26&version=2.3.6&y654b5fs3tr=3&yi854tew=88&yt447e13f=3';
  req.write(body);

  req.end();

  count++;
}

// 每隔2秒执行一次脚本，共执行22次
const timer = setInterval(sendRequest, 2000);
