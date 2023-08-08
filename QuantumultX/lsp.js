#!name=lsp
#!desc=仅供学习交流

hostname = *50a*,*yiqiapi*,*jiujiao*,*myb*api*,*hichatapi*,*tbrapi*,*wmqapi*,*gvlan*,*91av*,*xtt*

^http[s]?:\/\/.*((50(aa|ab|apia)pi|xtt.*)\.com|tbrapi\.org)\/pwa\.php\/api\/(user\/userinfo|MvDetail\/(detail|xiao_detail)|home\/(getOpenAdsAndVersion|appcenter)|system\/getad)$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
^http[s]?:\/\/.*(yiqiapi|jiujiao|myb[0-9]+api|wmqapi|i91av).*\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
^http[s]?:\/\/.*hichatapi.+\/api\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
^http[s]?:\/\/.*(gvlan|ksapi).*pwa\.php.*(home\/getConfig|user(s)?\/getBaseInfo|(mv|manhua|story)\/detail|mv\/(pwa_main|listOfFeature|getFeature)|ChargeVideo\/(upIndex|vipIndex|recommend))$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
