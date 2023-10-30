"ui";

var color = "#009688";
var selectedMode = 0; // 当前选中的模式，默认为模式一

var enableLog = 1;

var version="v0.9.3" 

function putlog(str) {
    var now = new Date();
    var year = now.getFullYear();      // 获取年份
    var month = now.getMonth() + 1;    // 获取月份（注意：月份从0开始）
    var day = now.getDate();           // 获取日期
    var hour = now.getHours();         // 获取小时
    var minute = now.getMinutes();     // 获取分钟
    var second = now.getSeconds();     // 获取秒钟

    // toast("当前时间：" + year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
    var head = '[' + year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + '] ';
    ui.log.setText(ui.log.text() + '\n' + head + str);
    log(head + str);
}

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="chargectrl " />
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical>
                        <horizontal>
                            <card
                                id="mode1Card"
                                cardBackgroundColor={selectedMode === 1 ? color : "#FFFFFF"}
                                cardElevation="2dp"
                                margin="8dp"
                                padding="16dp"
                                width="150dp"
                                height="60dp"
                            >
                                <text
                                    id="mode1Text"
                                    gravity="center"
                                    text="养老模式"
                                    textColor={selectedMode === 1 ? "#FFFFFF" : "#000000"}
                                    textSize="32sp"
                                />
                            </card>
                            <card
                                id="mode2Card"
                                cardBackgroundColor={selectedMode === 2 ? color : "#FFFFFF"}
                                cardElevation="2dp"
                                margin="8dp"
                                padding="16dp"
                                width="150dp"
                                height="60dp"
                            >
                                <text
                                    id="mode2Text"
                                    gravity="center"
                                    text="均衡模式"
                                    textColor={selectedMode === 2 ? "#FFFFFF" : "#000000"}
                                    textSize="32sp"
                                />
                            </card>
                        </horizontal>
                        <horizontal>
                            <card
                                id="mode3Card"
                                cardBackgroundColor={selectedMode === 3 ? color : "#FFFFFF"}
                                cardElevation="2dp"
                                margin="8dp"
                                padding="16dp"
                                width="150dp"
                                height="60dp"
                            >
                                <text
                                    id="mode3Text"
                                    gravity="center"
                                    text="性能模式"
                                    textColor={selectedMode === 3 ? "#FFFFFF" : "#000000"}
                                    textSize="32sp"
                                />
                            </card>
                            <card
                                id="mode4Card"
                                cardBackgroundColor={selectedMode === 4 ? color : "#FFFFFF"}
                                cardElevation="2dp"
                                margin="8dp"
                                padding="16dp"
                                width="150dp"
                                height="60dp"
                            >
                                <text
                                    id="mode4Text"
                                    gravity="center"
                                    text="发烧模式"
                                    textColor={selectedMode === 4 ? "#FFFFFF" : "#000000"}
                                    textSize="32sp"
                                />
                            </card>
                        </horizontal>
                    </vertical>
                </frame>
                <frame>
                    <ScrollView>
                        <text id="log" text="日志：" textColor="green" textSize="16sp" />
                    </ScrollView>
                </frame>
                <frame>
                    <text text="暂无内容" textColor="red" textSize="16sp" />
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img
                w="280"
                h="200"
                scaleType="fitXY"
                src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"
            />
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                    <text
                        textColor="black"
                        textSize="15sp"
                        text="{{this.title}}"
                        layout_gravity="center"
                    />
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

function sh(str) {
    let result = shell(str, true);
    log(result);

    // console.show();

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

function modifyConf(n) {
    touchTmp();
    var str = files.read("/sdcard/chargectrl.tmp");

    var regex = /thermal_scene=\d \d/; // 匹配正则表达式
    var replacedStr = str.replace(regex, "thermal_scene=" + n + ' ' + n); // 替换匹配项

    files.write("/sdcard/chargectrl.tmp", replacedStr);
    enableTmp();
}

function flush() {
    ui.run(function () {
        // 更新卡片颜色
        ui.mode1Card.setCardBackgroundColor(selectedMode === 1 ? colors.parseColor(color) : colors.parseColor("#FFFFFF"));
        ui.mode2Card.setCardBackgroundColor(selectedMode === 2 ? colors.parseColor(color) : colors.parseColor("#FFFFFF"));
        ui.mode3Card.setCardBackgroundColor(selectedMode === 3 ? colors.parseColor(color) : colors.parseColor("#FFFFFF"));
        ui.mode4Card.setCardBackgroundColor(selectedMode === 4 ? colors.parseColor(color) : colors.parseColor("#FFFFFF"));

        // 更新文字颜色
        ui.mode1Text.setTextColor(selectedMode === 1 ? colors.WHITE : colors.BLACK);
        ui.mode2Text.setTextColor(selectedMode === 2 ? colors.WHITE : colors.BLACK);
        ui.mode3Text.setTextColor(selectedMode === 3 ? colors.WHITE : colors.BLACK);
        ui.mode4Text.setTextColor(selectedMode === 4 ? colors.WHITE : colors.BLACK);
    });
}

function switchMode(mode) {
    toast("switchmode  " + mode);
    selectedMode = mode;

    let n = 0;
    switch (mode) {
        case 1:
            n = 5;
            break;
        case 2:
            n = 3;
            break;
        case 3:
            n = 1;
            break;
        case 4:
            n = 0;
            break;
        // 可以添加更多的 case
        default:
            n = 1;
            break;
    }

    threads.start(function () {
        modifyConf(n);
    });

    putlog("modifyConf:  " + mode);
    putlog("thermal_scene=" + n + ' ' + n);
    
    flush();
    putlog("selectedMode = " + mode);
}


ui.mode1Card.click(() => switchMode(1));
ui.mode2Card.click(() => switchMode(2));
ui.mode3Card.click(() => switchMode(3));
ui.mode4Card.click(() => switchMode(4));

// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", (menu) => {
    menu.add("打开日志输出");
    menu.add("关于");
});
// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            toast("还没有设置");
            break;
        case "关于":
            alert("关于", "chargectrl "+version+"\n基于top大佬(酷安)的MIUI动态温控模块\npowered by MiuiVariableThermal\n酷安|bilibili@Cznorth");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);


ui.toolbar.setTitle("chargectrl "+version);
// 设置滑动页面的标题
ui.viewpager.setTitles(["主页", "日志", "捐赠"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
    {
        title: "设置",
        icon: "@drawable/ic_android_black_48dp",
    },
    {
        title: "推广",
        icon: "@drawable/ic_settings_black_48dp",
    },
    {
        title: "反馈",
        icon: "@drawable/ic_favorite_black_48dp",
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp",
    },
]);

ui.menu.on("item_click", (item) => {
    switch (item.title) {
        case "退出":
            ui.finish();
            break;
    }
});

function init() {
    touchTmp();
    var str = files.read("/sdcard/chargectrl.tmp");

    var regex = /thermal_scene=(\d+) (\d+)/; // 匹配正则表达式，并使用捕获组
    var match = str.match(regex); // 执行匹配，返回匹配结果数组

    if (match) {
        var firstNumber = match[1]; // 第一个捕获组中的数字
        var secondNumber = match[2]; // 第二个捕获组中的数字

        console.log(firstNumber); // 输出第一个数字
        console.log(secondNumber); // 输出第二个数字
    } else {
        console.log("No match found");
    }
    let n=0;
    switch (parseInt(firstNumber)) {
        case 5:
            n = 1;
            break;
        case 3:
            n = 2;
            break;
        case 1:
            n = 3;
            break;
        case 0:
            n = 4;
            break;
        // 可以添加更多的 case
        default:
            n = 0;
            break;
    }
    putlog("current mode: "+n);
    selectedMode=n;
    if(n) flush();
    // alert("关于", "chargectrl "+version+"\n基于top大佬(酷安)的MIUI动态温控模块\npowered by MiuiVariableThermal\n酷安|bilibili@Cznorth");
}

init();

// threads.start(function () {
//     var ra = new RootAutomator();
//     events.on('exit', function () {
//         ra.exit();
//     });
//     // putlog(files.isFile("/data/adb/modules/MiuiVariableThermal/config.conf"));
// });
// touchTmp()
// putlog(files.isFile("/sdcard/chargectrl.tmp"));
