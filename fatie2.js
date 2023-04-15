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
    'User-Agent': 'JiuQuan/229 (jiuquaner.app.chen; build:229; iOS 12.5.5) Alamofire/229',
    'Accept-Language': 'zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8, zh-Hant-CN;q=0.7'
  }
};

const bodies = ['abiokytke=98&act_time=1681552493620&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=5a&bd4uy742=2&bgd7h8tyu54=df&bgiuytkw=9b&bioduytlw=1&bvytikwqjk=df&fjlkatj=20f&ghtoiutkmlg=0b4&h13ey474=aa8&h67456y=03b&hy5641d321t=a2&ibvytiqjek=52&iogojti=a&is_app=1&is_vip=0&jnhf8u5231=9b&kf54ge7=8&lksytkjh=3ba3&n3bf4uj7y7=b&nbf4uj7y432=98&nd354uy4752=a&ngd4uy551=3b&ngd4yut78=b4&nkjhrew=2&quikgdky=d7&sbnoywr=b5&tbvdiuytk=0&theme_id=414&theme_id2=7013&tiklsktr4=0&tirgkjfs=90&type=app_ios&u54rg5d=20&version=2.3.6&word=%E4%B8%8B%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93&y654b5fs3tr=0&yi854tew=aa&yt447e13f=0', 'abiokytke=98&act_time=1681552493620&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=5a&bd4uy742=2&bgd7h8tyu54=df&bgiuytkw=9b&bioduytlw=1&bvytikwqjk=df&fjlkatj=20f&ghtoiutkmlg=0b4&h13ey474=aa8&h67456y=03b&hy5641d321t=a2&ibvytiqjek=52&iogojti=a&is_app=1&is_vip=0&jnhf8u5231=9b&kf54ge7=8&lksytkjh=3ba3&n3bf4uj7y7=b&nbf4uj7y432=98&nd354uy4752=a&ngd4uy551=3b&ngd4yut78=b4&nkjhrew=2&quikgdky=d7&sbnoywr=b5&tbvdiuytk=0&theme_id=414&theme_id2=7013&tiklsktr4=0&tirgkjfs=90&type=app_ios&u54rg5d=20&version=2.3.6&word=%E4%B8%8B%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E9%87%91%E8%9E%8D%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93&y654b5fs3tr=0&yi854tew=aa&yt447e13f=0', 'abiokytke=98&act_time=1681552493620&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=5a&bd4uy742=2&bgd7h8tyu54=df&bgiuytkw=9b&bioduytlw=1&bvytikwqjk=df&fjlkatj=20f&ghtoiutkmlg=0b4&h13ey474=aa8&h67456y=03b&hy5641d321t=a2&ibvytiqjek=52&iogojti=a&is_app=1&is_vip=0&jnhf8u5231=9b&kf54ge7=8&lksytkjh=3ba3&n3bf4uj7y7=b&nbf4uj7y432=98&nd354uy4752=a&ngd4uy551=3b&ngd4yut78=b4&nkjhrew=2&quikgdky=d7&sbnoywr=b5&tbvdiuytk=0&theme_id=414&theme_id2=7013&tiklsktr4=0&tirgkjfs=90&type=app_ios&u54rg5d=20&version=2.3.6&word=%E4%B8%8B%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E5%BB%BA%E7%AD%91%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93&y654b5fs3tr=0&yi854tew=aa&yt447e13f=0', 'abiokytke=98&act_time=1681552493620&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=5a&bd4uy742=2&bgd7h8tyu54=df&bgiuytkw=9b&bioduytlw=1&bvytikwqjk=df&fjlkatj=20f&ghtoiutkmlg=0b4&h13ey474=aa8&h67456y=03b&hy5641d321t=a2&ibvytiqjek=52&iogojti=a&is_app=1&is_vip=0&jnhf8u5231=9b&kf54ge7=8&lksytkjh=3ba3&n3bf4uj7y7=b&nbf4uj7y432=98&nd354uy4752=a&ngd4uy551=3b&ngd4yut78=b4&nkjhrew=2&quikgdky=d7&sbnoywr=b5&tbvdiuytk=0&theme_id=414&theme_id2=7013&tiklsktr4=0&tirgkjfs=90&type=app_ios&u54rg5d=20&version=2.3.6&word=%E4%B8%8B%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E7%A7%91%E6%8A%80%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93&y654b5fs3tr=0&yi854tew=aa&yt447e13f=0', 'abiokytke=98&act_time=1681552493620&authtoken=P6WQLI4aOvxZpXmEQ6%2Bu9EETbzroVPOG&bd24y6421f=5a&bd4uy742=2&bgd7h8tyu54=df&bgiuytkw=9b&bioduytlw=1&bvytikwqjk=df&fjlkatj=20f&ghtoiutkmlg=0b4&h13ey474=aa8&h67456y=03b&hy5641d321t=a2&ibvytiqjek=52&iogojti=a&is_app=1&is_vip=0&jnhf8u5231=9b&kf54ge7=8&lksytkjh=3ba3&n3bf4uj7y7=b&nbf4uj7y432=98&nd354uy4752=a&ngd4uy551=3b&ngd4yut78=b4&nkjhrew=2&quikgdky=d7&sbnoywr=b5&tbvdiuytk=0&theme_id=414&theme_id2=7013&tiklsktr4=0&tirgkjfs=90&type=app_ios&u54rg5d=20&version=2.3.6&word=%E4%B8%8B%E4%B8%AA%E4%BA%A4%E6%98%93%E6%97%A5%E9%9B%B6%E5%94%AE%E5%8A%A0%E4%BB%93%E8%BF%98%E6%98%AF%E5%87%8F%E4%BB%93&y654b5fs3tr=0&yi854tew=aa&yt447e13f=0'];
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
