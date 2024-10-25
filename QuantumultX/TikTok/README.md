
#配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写


```
https://raw.githubusercontent.com/Jason6111/shadowrocket-module/main/QuantumultX/TikTok/TikTok.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

在`[rewrite_local]`中添加以下重写把307后的CN改成想要的国家

```
(?<=_region=)CN(?=&) url 307 CN
```
