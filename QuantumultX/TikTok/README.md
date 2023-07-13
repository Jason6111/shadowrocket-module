**方法一：**
#配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写


**日本**
```
https://raw.githubusercontent.com/Jason6111/shadowrocket-module/main/QuantumultX/TikTok/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```
**方法二：**

在`[rewrite_local]`中添加以下重写

```
(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
```
在`[mitm]`中添加

```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com
```
