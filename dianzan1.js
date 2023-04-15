/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 21 9 * * * dianzan1.js
*/

/*
const和let的区别:
用const定义的变量以后不能再更改
用let定义的变量可以改
进阶内容: const 对象本身不可更改,但是对象里面的属性可以改,与指针有关
*/

const $ = new Env('点赞 低抛高吸') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名



const https = require('https');


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
    'User-Agent': 'JiuQuan/227 (jiuquaner.app.chen; build:227; iOS 16.2.0) Alamofire/227',
    'Accept-Language': 'zh-Hans-CN;q=1.0'
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

const body = 'abiokytke=df&act_time=1679806793770&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=1d&bd4uy742=1&bgd7h8tyu54=25&bgiuytkw=a1&bioduytlw=2&bvytikwqjk=25&com=1&commend_uid=519244&comment_type=1&fjlkatj=ef5&ghtoiutkmlg=171&h13ey474=9be&h67456y=703&hy5641d321t=d1&ibvytiqjek=99&iogojti=d&is_app=1&jnhf8u5231=a1&kf54ge7=e&lksytkjh=0367&n3bf4uj7y7=3&nbf4uj7y432=df&nd354uy4752=b&ngd4uy551=03&ngd4yut78=71&nkjhrew=1&no_push=1&original_id=277117&quikgdky=a9&relay_id=277117&sbnoywr=61&tbvdiuytk=7&text_id=277117&tiklsktr4=f&tirgkjfs=4f&type=app_ios&u54rg5d=ef&version=2.3.3&word=777888999&y654b5fs3tr=1&yi854tew=9b&yt447e13f=7';
req.write(body);

req.end();
