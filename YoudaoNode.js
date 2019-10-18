auto();
var Unlock = require("./lib/Unlock.js")
Unlock().exec()
launchApp("有道云笔记");
sleep(2000)
click(984,2255)
sleep(1000)
click(932,316)
sleep(1000)
id("btn_ok").findOne().click()
sleep(1000)
log(id("sign_message").findOne().text())
