"ui";

ui.layout(
    <frame>
        <text id="result" text="start" />
    </frame>
);

// ui.result.attr("text", "计算中");
ui.result.setText("123123123");
// 在子线程中计算1+ ... + 10000000
toast("start");
threads.start(function(){
    let sum = 0;
    toast("run");
    toast(ui.result.text())
    // for (let i = 0; i < 1000000; i++) {
    //     toast("run"+i);
    //     sum += i;
    // }
    // 由于不能在子线程操作UI，所以要抛到UI线程执行
    ui.run(() => {
        ui.result.setText("String(sum)");
    });
    toast("end");

});
