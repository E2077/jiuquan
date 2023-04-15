/*
以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 25 9 * * *
*/

/*
const和let的区别:
用const定义的变量以后不能再更改
用let定义的变量可以改
进阶内容: const 对象本身不可更改,但是对象里面的属性可以改,与指针有关
*/

const $ = new Env('收藏 低抛高吸') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名

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

  const body = 'abiokytke=dc&act_time=1679804612259&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=53&bd4uy742=3&bgd7h8tyu54=75&bgiuytkw=67&bioduytlw=f&bvytikwqjk=75&fjlkatj=bfa&ghtoiutkmlg=407&h13ey474=214&h67456y=ce0&hy5641d321t=33&ibvytiqjek=fe&id=277117&iogojti=3&is_app=1&jnhf8u5231=67&kf54ge7=4&lksytkjh=e080&n3bf4uj7y7=0&nbf4uj7y432=dc&nd354uy4752=1&ngd4uy551=e0&ngd4yut78=07&nkjhrew=3&quikgdky=f7&sbnoywr=95&tbvdiuytk=c&tiklsktr4=9&tirgkjfs=f9&type=app_ios&u54rg5d=bf&version=2.3.3&y654b5fs3tr=4&yi854tew=21&yt447e13f=b';
  req.write(body);

  req.end();

  count++;
}

// 每隔2秒执行一次脚本，共执行22次
const timer = setInterval(sendRequest, 2000);
