/*
下面一行是建议定时,青龙拉库会自动读取
cron 29 11,12,13,14 * * * huifu1.js
*/

class Env {
  constructor(name) {
    this.name = name;
  }
}
const $ = new Env('1回复 低抛高吸'); 

const https = require('https');

const url = `https://api.jiucaishuo.com/v2/image/comments`;
const method = `POST`;
const headers = {
    'Accept': `*/*`,
    'Accept-Encoding': `gzip;q=1.0, compress;q=0.5`,
    'Connection': `keep-alive`,
    'Content-Type': `application/x-www-form-urlencoded; charset=utf-8`,
    'Host': `api.jiucaishuo.com`,
    'User-Agent': `JiuQuan/229 (jiuquaner.app.chen; build:229; iOS 12.5.5) Alamofire/229`,
    'Accept-Language': `zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8, zh-Hant-CN;q=0.7`
};

function sendRequest() {
    // 生成5位随机数
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
   const body = `abiokytke=68&act_time=1681564589947&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=8f&bd4uy742=1&bgd7h8tyu54=3b&bgiuytkw=4f&bioduytlw=3&bvytikwqjk=3b&com=1&commend_uid=519244&comment_type=1&fjlkatj=f2b&ghtoiutkmlg=ad0&h13ey474=e2d&h67456y=5a7&hy5641d321t=f1&ibvytiqjek=f7&iogojti=f&is_app=1&jnhf8u5231=4f&kf54ge7=d&lksytkjh=a7da&n3bf4uj7y7=7&nbf4uj7y432=68&nd354uy4752=2&ngd4uy551=a7&ngd4yut78=d0&nkjhrew=1&no_push=1&original_id=297027&quikgdky=a9&relay_id=297027&sbnoywr=b8&tbvdiuytk=5&text_id=297027&tiklsktr4=a&tirgkjfs=ea&type=app_ios&u54rg5d=f2&version=2.3.3&word=${randomNumber}&y654b5fs3tr=a&yi854tew=e2&yt447e13f=f`;

    const options = {
        hostname: 'api.jiucaishuo.com',
        path: '/v2/image/comments',
        method: 'POST',
        headers: headers
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (data) => {
            console.log(data.toString());
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(body);
    req.end();
}

// 使用setInterval函数每隔5秒运行一次sendRequest函数，共运行5次
let count = 0;
const intervalId = setInterval(() => {
    if (count < 5) {
        sendRequest();
        count++;
    } else {
        clearInterval(intervalId);
    }
}, 5000);
