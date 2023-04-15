/*

以下都以青龙或nodejs环境为准
下面一行是建议定时,青龙拉库会自动读取
cron 21 9 * * * fatie1.js
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
const $ = new Env('1发帖 低抛高吸') //青龙拉库会把 new Env('qwerty') 里面的名字qwerty作为定时任务名



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

const bodies = ['abiokytke=f8&act_time=1681566305710&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b7&bd4uy742=8&bgd7h8tyu54=60&bgiuytkw=2b&bioduytlw=1&bvytikwqjk=60&fjlkatj=17b&ghtoiutkmlg=8d2&h13ey474=f12&h67456y=9cb&hy5641d321t=78&ibvytiqjek=ab&iogojti=7&is_app=1&is_vip=0&jnhf8u5231=2b&kf54ge7=2&lksytkjh=cbf2&n3bf4uj7y7=b&nbf4uj7y432=f8&nd354uy4752=1&ngd4uy551=cb&ngd4yut78=d2&nkjhrew=8&quikgdky=fd&sbnoywr=4b&tbvdiuytk=9&theme_id=414&theme_id2=7013&tiklsktr4=f&tirgkjfs=6f&type=app_ios&u54rg5d=17&version=2.3.3&word=%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%89%8D%E5%85%89%E4%BC%8F%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%3F&y654b5fs3tr=8&yi854tew=f1&yt447e13f=8', 'abiokytke=f8&act_time=1681566305710&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b7&bd4uy742=8&bgd7h8tyu54=60&bgiuytkw=2b&bioduytlw=1&bvytikwqjk=60&fjlkatj=17b&ghtoiutkmlg=8d2&h13ey474=f12&h67456y=9cb&hy5641d321t=78&ibvytiqjek=ab&iogojti=7&is_app=1&is_vip=0&jnhf8u5231=2b&kf54ge7=2&lksytkjh=cbf2&n3bf4uj7y7=b&nbf4uj7y432=f8&nd354uy4752=1&ngd4uy551=cb&ngd4yut78=d2&nkjhrew=8&quikgdky=fd&sbnoywr=4b&tbvdiuytk=9&theme_id=414&theme_id2=7013&tiklsktr4=f&tirgkjfs=6f&type=app_ios&u54rg5d=17&version=2.3.3&word=%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%89%8D%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%3F&y654b5fs3tr=8&yi854tew=f1&yt447e13f=8', 'abiokytke=f8&act_time=1681566305710&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b7&bd4uy742=8&bgd7h8tyu54=60&bgiuytkw=2b&bioduytlw=1&bvytikwqjk=60&fjlkatj=17b&ghtoiutkmlg=8d2&h13ey474=f12&h67456y=9cb&hy5641d321t=78&ibvytiqjek=ab&iogojti=7&is_app=1&is_vip=0&jnhf8u5231=2b&kf54ge7=2&lksytkjh=cbf2&n3bf4uj7y7=b&nbf4uj7y432=f8&nd354uy4752=1&ngd4uy551=cb&ngd4yut78=d2&nkjhrew=8&quikgdky=fd&sbnoywr=4b&tbvdiuytk=9&theme_id=414&theme_id2=7013&tiklsktr4=f&tirgkjfs=6f&type=app_ios&u54rg5d=17&version=2.3.3&word=%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%89%8D%E5%8C%BB%E7%96%97%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%3F&y654b5fs3tr=8&yi854tew=f1&yt447e13f=8', 'abiokytke=f8&act_time=1681566305710&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b7&bd4uy742=8&bgd7h8tyu54=60&bgiuytkw=2b&bioduytlw=1&bvytikwqjk=60&fjlkatj=17b&ghtoiutkmlg=8d2&h13ey474=f12&h67456y=9cb&hy5641d321t=78&ibvytiqjek=ab&iogojti=7&is_app=1&is_vip=0&jnhf8u5231=2b&kf54ge7=2&lksytkjh=cbf2&n3bf4uj7y7=b&nbf4uj7y432=f8&nd354uy4752=1&ngd4uy551=cb&ngd4yut78=d2&nkjhrew=8&quikgdky=fd&sbnoywr=4b&tbvdiuytk=9&theme_id=414&theme_id2=7013&tiklsktr4=f&tirgkjfs=6f&type=app_ios&u54rg5d=17&version=2.3.3&word=%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%89%8D%E7%99%BD%E9%85%92%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%3F&y654b5fs3tr=8&yi854tew=f1&yt447e13f=8', 'abiokytke=f8&act_time=1681566305710&authtoken=%2BWQC415cWnnFJ1O9JJysmVAu9C4QQsp2&bd24y6421f=b7&bd4uy742=8&bgd7h8tyu54=60&bgiuytkw=2b&bioduytlw=1&bvytikwqjk=60&fjlkatj=17b&ghtoiutkmlg=8d2&h13ey474=f12&h67456y=9cb&hy5641d321t=78&ibvytiqjek=ab&iogojti=7&is_app=1&is_vip=0&jnhf8u5231=2b&kf54ge7=2&lksytkjh=cbf2&n3bf4uj7y7=b&nbf4uj7y432=f8&nd354uy4752=1&ngd4uy551=cb&ngd4yut78=d2&nkjhrew=8&quikgdky=fd&sbnoywr=4b&tbvdiuytk=9&theme_id=414&theme_id2=7013&tiklsktr4=f&tirgkjfs=6f&type=app_ios&u54rg5d=17&version=2.3.3&word=%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%89%8D%E6%96%B0%E8%83%BD%E8%BD%A6%E5%BA%94%E8%AF%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93%3F&y654b5fs3tr=8&yi854tew=f1&yt447e13f=8'];
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
