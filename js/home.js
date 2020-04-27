// 顶部导航-广告
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
    $(".qrcode div").animate(
        {
            top: -10,
        },
        2000,
        function () {
            $(this).animate(
                {
                    top: $(this).siblings("img").height() - 10,
                },
                2000
            );
        }
    );
}
// 先执行一次(解决定时器4秒后才能执行第一次)
qrcodeDiv();
// 设置定时器循环执行
setInterval(qrcodeDiv, 4000);

// 顶部导航-游戏目录显示隐藏
$(".topbar-left").hover(
    function () {
        $(".topbar-game").css({
            height: 500,
        });
    },
    function () {
        $(".topbar-game").css({
            height: 0,
        });
    }
);

$(".topbar-game").hover(
    function () {
        $(".topbar-game").css({
            height: 500,
        });
    },
    function () {
        $(".topbar-game").css({
            height: 0,
        });
    }
);

// 顶部导航-游戏目录小图标
let menuListArr = [
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
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
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
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    "HOT",
    "HOT",
    "HOT",
    "NEW",
    "NEW",
    ,
    ,
    "NEW",
    "HOT",
];
menuListArr.forEach(function (m, i) {
    if (m == "NO1") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -267px",
        });
    } else if (m == "HOT") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -144px",
        });
    } else if (m == "NEW") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -206px",
        });
    }
});

// 顶部导航-右边轮播
let topbarRightArr = ["25元专属券限时领！", "限时领取免费教程"];

setInterval(function () {
    $(".topbar-right a").animate(
        {
            opacity: 0,
            top: "-100%",
        },
        400,
        function () {
            let index = topbarRightArr.indexOf($(".topbar-right a").text());
            if (index < topbarRightArr.length - 1) {
                $(".topbar-right a").text(topbarRightArr[index + 1]);
            } else {
                $(".topbar-right a").text(topbarRightArr[0]);
            }
            $(this)
                .css({
                    top: "100%",
                })
                .animate(
                    {
                        opacity: 1,
                        top: 0,
                    },
                    400
                );
        }
    );
}, 4000);

// 顶部导轨-热点推荐
$(".topbar-recommend").hover(
    function () {
        $(".topbar-hot").css({
            height: 378,
        });
    },
    function () {
        $(".topbar-hot").css({
            height: 0,
        });
    }
);

$(".topbar-hot").hover(
    function () {
        $(".topbar-hot").css({
            height: 378,
        });
    },
    function () {
        $(".topbar-hot").css({
            height: 0,
        });
    }
);

// 第一版-打开视频
$(".header-video a").on("click", function () {
    $(".video").show().find("video").trigger("play")[0].currentTime = 0;
});

// 第一版-关闭视频
$(".video .stop").on("click", function () {
    $(".video").hide().find("video").trigger("pause");
});

// 浮动导航-固定顶部
function getFloatnav() {
    if ($(document).scrollTop() >= $(".topbar").height()) {
        $(".floatnav")
            .css({
                position: "fixed",
                top: 0,
                height: 118,
                background:
                    "url(./images/top_bg_3cd9741.png) center top no-repeat",
            })
            .find(".header-logo")
            .hide()
            .siblings(".floatnav-left")
            .show();
    } else {
        $(".floatnav")
            .css({
                position: "absolute",
                top: 55,
                height: 92,
                background:
                    "url(./images/top_bg1_db2a296.png) center top no-repeat",
            })
            .find(".header-logo")
            .show()
            .siblings(".floatnav-left")
            .hide();
    }
}
getFloatnav();
$(document).scroll(getFloatnav);

// 第二版_第一块-轮播图
function getCarousel() {
    // 实时计算轮播图宽度
    $(".carousel-img").css({
        width: $(".carousel-img li").length * $(".carousel-img li").width(),
    });
    // 判断轮播图是否到最后一张
    if (
        $(".carousel-img").position().left * -1 >=
        $(".carousel-img li").width() * ($(".carousel-img li").length - 1)
    ) {
        $(".carousel-img").css({ left: 0 });
    }
    $(".carousel-img").animate(
        {
            left:
                $(".carousel-img").position().left -
                $(".carousel-img li").width(),
        },
        200
    );
    // 小点
    $(".carousel-list li")
        .removeClass("active")
        .eq(
            ($(".carousel-img").position().left * -1) /
                $(".carousel-img li").width()
        )
        .addClass("active");
}
// 克隆最后一张轮播图到最前面
$(".carousel-img")
    .prepend($(".carousel-img li:last").clone(true))
    .css({ left: -$(".carousel-img li").width() });
// 轮播
carouselTimer = setInterval(getCarousel, 2000);
// 鼠标移入暂停轮播
$(".carousel-img").hover(
    function () {
        clearInterval(carouselTimer);
    },
    function () {
        carouselTimer = setInterval(getCarousel, 2000);
    }
);
// 鼠标移入小点切换轮播图
$(".carousel-list").on("mousemove", "li", function () {
    let $index = $(this).index();
    // 暂停轮播
    clearInterval(carouselTimer);
    // 图片切换
    $(".carousel-img")
        .stop(true)
        .animate(
            {
                left: -$(".carousel-img li").width() * ($(this).index() + 1),
            },
            200,
            function () {
                // 小点切换
                $(".carousel-list li")
                    .removeClass("active")
                    .eq($index)
                    .addClass("active");
            }
        );
    // 启动轮播
    carouselTimer = setInterval(getCarousel, 2000);
});

// 第二版_第一块-新闻
$(".news-nav ul").on("mouseover", "li", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".news-con")
        .stop()
        .animate(
            {
                left: -$(".news-con ul").width() * $(this).index(),
            },
            400,
            function () {}
        );
});

// 分享二维码切换
$(".ewm-tab").on("mouseover", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    $(".ewm-img").animate(
        {
            left: -$(".ewm-img>div").width() * $(this).index(),
        },
        400
    );
});

// 第二版_第三块-切换作品类型
$(".part3-nav-list").on("mouseover", "li", function () {
    let oLi = $(this);
    $(this).addClass("active").siblings().removeClass("active");
    $(".part3-box>ul").animate(
        {
            opacity: 0,
        },
        100,
        function () {
            $(".part3-box>ul").hide().eq(oLi.prevAll().length).show().animate(
                {
                    opacity: 1,
                },
                100
            );
        }
    );
});

// 第二版_第三块-投票(点赞)
// 初始化点赞数量
zanArr = [1999, 1461, 1727, 2868, 1272, 1908, 1698, 1356];
zanArr.forEach(function (v, i) {
    $(".part3-box-ul1 li>p").eq(i).text(v);
});

$(".part3-box-ul1 li>p").on("click", function () {
    if (+$(this).text() == zanArr[$(this).parent().prevAll().length]) {
        $(this).text(+$(this).text() + 1);
        $(".alert-vote")
            .css({
                opacity: 1,
                display: "block",
            })
            .find(".alert-vote-text")
            .text("投票成功");
    } else {
        $(".alert-vote")
            .css({
                opacity: 1,
                display: "block",
            })
            .find(".alert-vote-text")
            .text("今天已经投过票了，请明天再来");
    }
});

$(".alert-image-pop-link").on("click", function () {
    $(".part3-box-ul1 li>p").click();
    // $(this).text(+$(this).text() + 1);
    $(this)
        .show()
        .text(
            $(".part3-box-ul1")
                .find(
                    `img[src='${$(this)
                        .parents(".alert-image-pop")
                        .find(".alert-image-pop-con img")
                        .attr("src")}']`
                )
                .parents("li")
                .find(">p")
                .text()
        );
});

// 打开弹窗
function getAlertImage(n) {
    console.log(n);
    $(".alert-image-pop-name").text($(n).find("p").eq(0).text());
    $(".alert-image-pop-author").text($(n).find("p").eq(1).text());

    $(".alert-image-pop-con")
        .find("img")
        .attr("src", $(n).siblings("img").attr("src"));
}

// 打开点赞弹窗
$(".part3-box-ul1 .list-box-zan").on("click", function () {
    $(".alert-image").show();
    $(".alert-image-pop-link")
        .show()
        .text($(this).parents("li").find(">p").text());
    getAlertImage(this);
});

// 打开图片弹窗
$(".part3-box-ul2 .list-box-zan").on("click", function () {
    console.log($(this).find("p"));
    $(".alert-image").show();
    $(".alert-image-pop-dl").show();
    getAlertImage(this);
});

// 关闭图片弹窗
$(".alert-image-off").on("click", function () {
    $(".alert-image").hide();
    $(".alert-image-pop-dl").hide();
    $(".alert-image-pop-link").hide();
});

// 第二版_第三块-点赞遮罩
$(".part3-box li").hover(
    function () {
        $(this)
            .find(".list-box-zan")
            .animate(
                {
                    height: "100%",
                    opacity: 1,
                },
                100,
                function () {
                    $(this).parents("li").find(">p").show();
                }
            );
    },
    function () {
        $(this)
            .find(".list-box-zan")
            .animate(
                {
                    height: 0,
                    opacity: 0,
                },
                100,
                function () {
                    $(this).parents("li").find(">p").hide();
                }
            );
    }
);

// 点赞结果弹窗
$(".alert-vote-wrap a").on("click", function () {
    $(".alert-vote").css({
        opacity: 0,
        display: "none",
    });
});

// 下载按钮点击跳转
$(".alert-image-pop-dl").on("click", function () {
    window.open(
        $(this).parents(".alert-image-pop").find("img").attr("src"),
        "_self"
    );
});

$(".part3-box-ul2>li>p").on("click", function () {
    window.open(
        $(this).siblings(".part3-list-box").find("img").attr("src"),
        "_self"
    );
});
