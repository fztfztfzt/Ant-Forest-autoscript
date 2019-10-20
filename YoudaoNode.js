auto();
var Unlock = require("./lib/Unlock.js")
Unlock().exec()
launchApp("有道云笔记");
id("tab_name").className("android.widget.TextView").text("我的").waitFor()
sleep(1000)
id("tab_mine").findOne().click()
sleep(500)
id("sign_in").findOne().click()
sleep(500)
log(id("sign_message").findOne().text())
sleep(500)
log('youdaoNode success')
id("btn_ok").waitFor()
sleep(500)
id("btn_ok").findOne().click()
back();
back();
