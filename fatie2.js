/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 21 10 * * * fatie2.js
*/

/*
const和let的区别:
用const定义的变量以后不能再更改
用let定义的变量可以改
进阶内容: const 对象本身不可更改,但是对象里面的属性可以改,与指针有关
*/

const $ = new Env('2发帖 138空仓不寂寞') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名



const https = require('https');

const options = {
  hostname: 'api.jiucaishuo.com',
  path: '/v2/guzhi/submiturl',
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

const bodies = ['abiokytke=75&act_time=1679460894474&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=45&bd4uy742=e&bgd7h8tyu54=de&bgiuytkw=30&bioduytlw=0&bvytikwqjk=de&fjlkatj=f59&ghtoiutkmlg=386&h13ey474=c9e&h67456y=79f&hy5641d321t=5e&ibvytiqjek=f0&iogojti=5&is_app=1&jnhf8u5231=30&kf54ge7=e&lksytkjh=9f80&n3bf4uj7y7=f&nbf4uj7y432=75&nd354uy4752=9&ngd4uy551=9f&ngd4yut78=86&nkjhrew=e&quikgdky=c1&sbnoywr=84&tag_id=471&tbvdiuytk=7&tiklsktr4=8&tirgkjfs=48&type=app_ios&u54rg5d=f5&version=2.3.3&word=%E4%BB%8A%E5%A4%A9%E7%99%BD%E9%85%92%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%EF%BC%9F&y654b5fs3tr=3&yi854tew=c9&yt447e13f=b', 'abiokytke=bf&act_time=1679460880677&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=76&bd4uy742=3&bgd7h8tyu54=39&bgiuytkw=c6&bioduytlw=1&bvytikwqjk=39&fjlkatj=98d&ghtoiutkmlg=b52&h13ey474=eed&h67456y=c87&hy5641d321t=63&ibvytiqjek=f0&iogojti=6&is_app=1&jnhf8u5231=c6&kf54ge7=d&lksytkjh=87b1&n3bf4uj7y7=7&nbf4uj7y432=bf&nd354uy4752=e&ngd4uy551=87&ngd4yut78=52&nkjhrew=3&quikgdky=30&sbnoywr=97&tag_id=471&tbvdiuytk=c&tiklsktr4=c&tirgkjfs=1c&type=app_ios&u54rg5d=98&version=2.3.3&word=%E4%BB%8A%E5%A4%A9%E5%8C%BB%E7%96%97%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%EF%BC%9F&y654b5fs3tr=b&yi854tew=ee&yt447e13f=c', 'abiokytke=0b&act_time=1679460864567&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=ea&bd4uy742=9&bgd7h8tyu54=10&bgiuytkw=85&bioduytlw=6&bvytikwqjk=10&fjlkatj=ca5&ghtoiutkmlg=083&h13ey474=252&h67456y=1f2&hy5641d321t=a9&ibvytiqjek=62&iogojti=a&is_app=1&jnhf8u5231=85&kf54ge7=2&lksytkjh=f259&n3bf4uj7y7=2&nbf4uj7y432=0b&nd354uy4752=5&ngd4uy551=f2&ngd4yut78=83&nkjhrew=9&quikgdky=c3&sbnoywr=ce&tag_id=471&tbvdiuytk=1&tiklsktr4=3&tirgkjfs=13&type=app_ios&u54rg5d=ca&version=2.3.3&word=%E4%BB%8A%E5%A4%A9%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%EF%BC%9F&y654b5fs3tr=0&yi854tew=25&yt447e13f=b', 'abiokytke=dd&act_time=1679460850990&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b2&bd4uy742=8&bgd7h8tyu54=4d&bgiuytkw=4e&bioduytlw=d&bvytikwqjk=4d&fjlkatj=21c&ghtoiutkmlg=3f8&h13ey474=b28&h67456y=5f3&hy5641d321t=28&ibvytiqjek=75&iogojti=2&is_app=1&jnhf8u5231=4e&kf54ge7=8&lksytkjh=f39e&n3bf4uj7y7=3&nbf4uj7y432=dd&nd354uy4752=2&ngd4uy551=f3&ngd4yut78=f8&nkjhrew=8&quikgdky=ea&sbnoywr=3b&tag_id=471&tbvdiuytk=5&tiklsktr4=c&tirgkjfs=9c&type=app_ios&u54rg5d=21&version=2.3.3&word=%E4%BB%8A%E5%A4%A9%E5%85%89%E4%BC%8F%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%EF%BC%9F&y654b5fs3tr=3&yi854tew=b2&yt447e13f=8', 'abiokytke=53&act_time=1679460911472&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=ac&bd4uy742=4&bgd7h8tyu54=6e&bgiuytkw=ff&bioduytlw=7&bvytikwqjk=6e&fjlkatj=fa8&ghtoiutkmlg=cbd&h13ey474=c99&h67456y=b54&hy5641d321t=c4&ibvytiqjek=85&iogojti=c&is_app=1&jnhf8u5231=ff&kf54ge7=9&lksytkjh=5438&n3bf4uj7y7=4&nbf4uj7y432=53&nd354uy4752=9&ngd4uy551=54&ngd4yut78=bd&nkjhrew=4&quikgdky=a2&sbnoywr=6a&tag_id=471&tbvdiuytk=b&tiklsktr4=8&tirgkjfs=18&type=app_ios&u54rg5d=fa&version=2.3.3&word=%E4%BB%8A%E5%A4%A9%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%EF%BC%9F&y654b5fs3tr=c&yi854tew=c9&yt447e13f=7'];
let index = 0;

function sendRequest() {
  if (index >= bodies.length) {
    clearInterval(timer);
    return;
  }

  const body = bodies[index++];
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
