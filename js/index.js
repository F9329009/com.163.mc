// 顶部导航广告
$(".header-ad").hover(
    function () {
        $(this).css({ overflow: "visible" }).find(">img").hide();
    },
    function () {
        console.log(2222);
        $(this).css({ overflow: "hidden" }).find(">img").show();
    }
);

// 二维码绿线上下移动
function qrcodeDiv() {
    $(".header-qrcode div").animate(
        {
            top: $(".header-qrcode img").height(),
        },
        2000,
        function () {
            $(".header-qrcode div").animate(
                {
                    top: 0,
                },
                2000
            );
        }
    );
}
// 先执行一次(解决定时器需要等待4秒后才能执行第一次)
qrcodeDiv();
// 设置定时器循环执行
setInterval(qrcodeDiv, 4000);

// 游戏目录显示隐藏（bug待解决）
$(".topbar-left").hover(
    function () {
        console.log(1111111);
        $(".topbar-menu").animate(
            {
                height: 500,
            },
            500
        );
    },
    function () {
        console.log(22222222222);
        $(".topbar-menu").animate(
            {
                height: 0,
            },
            500
        );
    }
);

// 游戏目录小图标
let listArr = [
    "NO1",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    ,
    ,
    ,
    "HOT",
    "HOT",
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    ,
    ,
    ,
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
];
listArr.forEach(function (m, i) {
    console.log(m, i);
    if (m == "NO1") {
        $(".topbar-menu-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -267px",
        });
    } else if (m == "HOT") {
        $(".topbar-menu-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -144px",
        });
    } else if (m == "NEW") {
        $(".topbar-menu-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -206px",
        });
    }
});
