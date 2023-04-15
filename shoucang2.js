/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 	29 9 * * * shoucang2.js
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
const $ = new Env('2收藏 138空仓不寂寞') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名


const https = require('https');

const options = {
  hostname: 'api.jiucaishuo.com',
  path: '/v2/text/text-collect',
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

  const body = 'abiokytke=cd&act_time=1679807545939&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=1c&bd4uy742=7&bgd7h8tyu54=07&bgiuytkw=10&bioduytlw=5&bvytikwqjk=07&fjlkatj=18d&ghtoiutkmlg=918&h13ey474=699&h67456y=6f2&hy5641d321t=c7&ibvytiqjek=f1&id=274860&iogojti=c&is_app=1&jnhf8u5231=10&kf54ge7=9&lksytkjh=f2e3&mobile_brand=LGE&n3bf4uj7y7=2&nbf4uj7y432=cd&nd354uy4752=9&ngd4uy551=f2&ngd4yut78=18&nkjhrew=7&quikgdky=d6&sbnoywr=61&tbvdiuytk=6&tiklsktr4=4&tirgkjfs=54&type=app_android&u54rg5d=18&uid=519244&version=2.3.5&y654b5fs3tr=9&yi854tew=69&yt447e13f=1';
  req.write(body);

  req.end();

  count++;
}

// 每隔2秒执行一次脚本，共执行22次
const timer = setInterval(sendRequest, 2000);
