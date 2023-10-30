function sh(str) {
    let result = shell(str, true);
    log(result);

    console.show();

    if (result.code == 0) {
        log("执行成功");
    } else {
        log("执行失败！请到控制台查看错误信息");
    }
}

function touchTmp() {
    sh("rm /sdcard/chargectrl.tmp");
    sh("cp /data/adb/modules/MiuiVariableThermal/config.conf /sdcard/chargectrl.tmp");
}

function enableTmp() {
    sh("mv /sdcard/chargectrl.tmp /data/adb/modules/MiuiVariableThermal/config.conf");
}

touchTmp()
log(files.isFile("/sdcard/chargectrl.tmp"));
var str = files.read("/sdcard/chargectrl.tmp");
var n = 2; // 你想要替换的数字

var regex = /thermal_scene=\d \d/; // 匹配正则表达式
var replacedStr = str.replace(regex, "thermal_scene=" + n + ' ' +n); // 替换匹配项
log(replacedStr); // 输出替换后的字符串
