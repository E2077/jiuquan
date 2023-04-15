/*
下面一行是建议定时,青龙拉库会自动读取
cron 21 11 * * * huifu2.js
*/

class Env {
  constructor(name) {
    this.name = name;
  }
}
const $ = new Env('2回复 138空仓不寂寞'); 

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
   const body = `abiokytke=87&act_time=1681558563528&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=f3&bd4uy742=2&bgd7h8tyu54=d2&bgiuytkw=53&bioduytlw=1&bvytikwqjk=d2&com=1&commend_uid=510585&comment_type=1&fjlkatj=1b2&ghtoiutkmlg=911&h13ey474=2bd&h67456y=7ed&hy5641d321t=32&ibvytiqjek=40&iogojti=3&is_app=1&jnhf8u5231=53&kf54ge7=d&lksytkjh=ed50&n3bf4uj7y7=d&nbf4uj7y432=87&nd354uy4752=b&ngd4uy551=ed&ngd4yut78=11&nkjhrew=2&no_push=1&original_id=297026&quikgdky=5c&relay_id=297026&sbnoywr=7f&tbvdiuytk=7&text_id=297026&tiklsktr4=3&tirgkjfs=53&type=app_ios&u54rg5d=1b&version=2.3.6&word=${randomNumber}&y654b5fs3tr=9&yi854tew=2b&yt447e13f=d`;

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
