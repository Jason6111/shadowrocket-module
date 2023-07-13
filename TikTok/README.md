# 模块添加
```
[te-interval=172800, opt-parser=false, enabled=true](https://raw.githubusercontent.com/Jason6111/shadowrocket-module/main/TikTok/TiKTok-JP.module)https://raw.githubusercontent.com/Jason6111/shadowrocket-module/main/TikTok/TiKTok-JP.module
```
# 配置文件添加  
```
[URL Rewrite]
(?<=_region=)CN(?=&) JP 307
(?<=&mcc_mnc=)4 2 307
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) 18.4 307
```
```
[MITM]
hostname = *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
```
