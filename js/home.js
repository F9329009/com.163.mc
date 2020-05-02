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
    $(".part3-box>ul")
        .stop()
        .animate(
            {
                opacity: 0,
            },
            100,
            function () {
                $(".part3-box>ul")
                    .hide()
                    .eq(oLi.prevAll().length)
                    .show()
                    .animate(
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
    $(".part3-box-over li>p").eq(i).text(v);
});

$(".part3-box-over li>p").on("click", function () {
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

// 无检测点赞
$(".part4-box-list li").on("click", ">p", function () {
    $(".alert-vote")
        .css({
            opacity: 1,
            display: "block",
        })
        .find(".alert-vote-text")
        .text("投票成功");
    $(this).text(+$(this).text() + 1);
    return false;
});

// 点赞窗口内点赞
$(".alert-image-pop-link").on("click", function () {
    $(".part3-box-over li>p").click();
    // $(this).text(+$(this).text() + 1);
    $(this)
        .show()
        .text(
            $(".part3-box-over")
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
$(".part3-box-over .list-box-zan").on("click", function () {
    $(".alert-image").show();
    $(".alert-image-pop-link")
        .show()
        .text($(this).parents("li").find(">p").text());
    getAlertImage(this);
});

// 打开图片弹窗
$(".part3-box-image .list-box-zan").on("click", function () {
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

// 关闭点赞结果弹窗
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

$(".part3-box-image>li>p").on("click", function () {
    window.open(
        $(this).siblings(".part3-list-box").find("img").attr("src"),
        "_self"
    );
});

// 第二版_第四块-导航
$(".part4-nav").on("mouseover", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
});

// 第二版_第四块-播放按钮遮罩(移入显示)
$(".video-hm")
    .parent()
    .hover(
        function () {
            $(this).find(".video-hm").css({
                opacity: 1,
                height: "100%",
            });
            $(this)
                .find(".video-btn")
                .css({
                    marginTop:
                        ($(this).height() -
                            $(this).find(".video-btn").height()) /
                        2,
                    opacity: 1,
                });
        },
        function () {
            $(this).find(".video-hm").css({
                opacity: 1,
                height: 0,
            });
            $(this).find(".video-btn").css({
                opacity: 0,
            });
        }
    );

// 第二版_第四块-播放按钮遮罩(移入隐藏)
$(".video-bf")
    .parent()
    .hover(
        function () {
            $(this).find(".video-bf").css({
                opacity: 0,
                height: 0,
            });
            $(this).find(".video-btn").css({
                opacity: 0,
            });
        },
        function () {
            $(this)
                .find(".video-bf")
                .css({
                    opacity: 1,
                    height: $(this).find("img").height(),
                });
            $(this)
                .find(".video-btn")
                .css({
                    marginTop:
                        ($(this).find("img").height() -
                            $(this).find(".video-btn").height()) /
                        2,
                    opacity: 1,
                });
        }
    );

// 第二版_第四块-打开视频
$(".video-hm")
    .parent()
    .on("click", function () {
        $(".hm-video").show().find("video").trigger("play")[0].currentTime = 0;
    });

$(".video-bf")
    .parent()
    .on("click", function () {
        $(".hm-video").show().find("video").trigger("play")[0].currentTime = 0;
    });

// 第二版_第四块-关闭视频
$(".hm-video .stop").on("click", function () {
    $(".hm-video").hide().find("video").trigger("pause");
});

// 第二版_第四块-视频列表切换
$(".part4-nav li").on("mouseover", function () {
    if ($(this).index() != $(".part4-nav .active").index()) {
        $(this).addClass("active").siblings().removeClass("active");

        $(".video-box-list-item")
            .stop()
            .animate(
                {
                    opacity: 0,
                },
                100
            )
            .hide()
            .eq($(this).index())
            .show()
            .animate(
                {
                    opacity: 1,
                },
                100
            );
    }
    return false;
});

// 第二版_第五块-攻略切换
$(".gs-title").on("mouseover", "a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".gs-box")
        .stop()
        .animate(
            {
                left: -$(".gs-box ul").width() * $(this).index(),
            },
            200
        );
});

// 第二版_第五块
// 合成配方存储对象
let closeArr = [
    {
        75: [77, 77, 77, 76, 78, 76, 79, 79, 79],
        76: [, , , , 15],
        82: [, , , 79, 79, 79],
        83: [, , , 84, 85, , , 51],
        86: [, , , 87, 76, , , 78],
        89: [, , , 79, 90, 79],
        99: [100, 100, 100, 100, 100, 100, , 51],
        101: [, 103, , 28, 102, 84, , 51],
    },
    {},
    {
        107: [79, 79, 79, 79, 79, 79, 79, 79, 79],
        113: [91, 91, 91, 91, 91, 91, 91, 91, 91],
    },
    {
        1: [, , , 2, , 2, , 2],
    },
];
// 物品介绍存储对象
let nameArr = [
    {
        75: ["蛋糕", "蛋糕是能被玩家吃掉的食物方块。"],
        76: ["糖", "糖是从甘蔗收获下来的一种食物材料，可以通过甘蔗获得。"],
        80: [
            "腐肉",
            "腐肉是一种能被玩家食用的食物类物品，食用后有几率食物中毒，可以通过所有种类的僵尸和僵尸猪人掉落获得。",
        ],
        81: [
            "河豚",
            "河豚是一种通过钓鱼获得能食用的酿造材料，能够通过钓鱼获得。",
        ],
        82: ["面包", "面包是一种食物类物品，可以由小麦合成或者地牢发现获得。"],
        83: [
            "蘑菇煲",
            "蘑菇煲是一种食物类物品，能通过拿着碗对哞菇按右键获得。",
        ],
        86: ["南瓜派", "南瓜派是一种食物类物品。"],
        88: [
            "苹果",
            "苹果是一种食物类物品，有几率通过树叶获得，也有可能自然生成。",
        ],
        89: ["曲奇", "曲奇是一种较容易获得的食物物品。"],
        91: ["西瓜片", "西瓜片是一种食物物品，能够通过西瓜获得。"],
        92: ["生鲑鱼", "生鲑鱼是一种食物物品，能够通过钓鱼获得。"],
        93: [
            "生鸡肉",
            "生鸡肉是一种食物类物品，在熔炉可以被烹饪成为熟鸡肉，可以通过鸡死亡获得。",
        ],
        94: [
            "生牛肉",
            "生牛肉是一种食物类物品，在熔炉可以被烹饪成牛排，可以通过牛和哞菇死亡时获得。",
        ],
        95: [
            "生兔肉",
            "生兔肉是一种食物类物品，在熔炉可以被烹饪成熟兔肉，可以通过兔子死亡获得。",
        ],
        96: [
            "生羊肉",
            "生羊肉是一种食物类物品，在熔炉可以被烹饪成熟羊肉，可以通过羊死亡获得。",
        ],
        97: ["生鱼", "生鱼是一种食物物品，可以通过钓鱼获得。"],
        98: ["生猪排", "生猪排是一种食物类物品，可以在猪死亡时获得。"],
        99: ["甜菜汤", "甜菜汤是一种液体食物类物品。"],
        101: ["兔肉煲", "兔肉煲是一种食物类物品。"],
        104: ["小丑鱼", "小丑鱼是一种食物物品，可以通过钓鱼获得。"],
    },
    {
        128: [
            "凋灵",
            "凋灵是一种具有飞行能力并且有三个头的Boss 生物。就像其它的怪物，凋灵不会在和平模式下生成，也会在和平模式下消失。",
        ],
        129: [
            "末影龙",
            "末影龙是一个 Boss生物，出现在末路之地。末影龙被杀死后，光束会从末影龙的身体里散发出来，同时它会慢慢升空并破碎。",
        ],
        130: [
            "豹猫",
            "豹猫是一种被动性生物，可以被驯服。一对猫能通过拿着任何一种生鱼分别右击以使它们繁殖。一对猫能通过拿着任何一种生鱼分别右击以使它们繁殖。",
        ],
        131: [
            "蝙蝠",
            "蝙蝠是一种生成在洞穴里面的会飞行的被动型生物。当蝙蝠睡觉或空闲时，它会倒挂在任何固体方块的下表面。一旦玩家接近，蝙蝠将会飞走。蝙蝠不能倒挂在透明方块或非固体方块上。",
        ],
        132: [
            "村民",
            "村民是一个可与玩家进行交易的智能被动型NPC，包含5种职业：农民、图书管理员、牧师、铁匠、屠夫。",
        ],
        133: [
            "鸡",
            "鸡是一种能够下蛋的被动型生物。鸡可使用小麦种子进行繁殖，并产下一只小鸡。",
        ],
        134: [
            "马",
            "马是一种可被驯服的生物，并拥有5个变种：普通马、驴、骡、僵尸马和骷髅马。",
        ],
        135: ["哞菇", "哞菇是一种在蘑菇生物群系中生成的特殊的牛。"],
        136: [
            "牛",
            "牛是一种被动型生物。牛会在主世界中随机地产生，通常以4-10只为一个族群。他们会躲开悬崖以避免摔落伤害。它们会漫无目的地游荡、哞叫。",
        ],
        137: [
            "兔子",
            "兔子是一种无害和被动的生物。兔子会漫无目的地跳跃而不是走动，它们会自己寻找并吃成熟的胡萝卜作物。",
        ],
        138: [
            "羊",
            "羊是能够供给羊毛的被动型生物。与其它被动型生物一样，羊会漫无目的地游荡，通常会避免从高处掉落防止受到摔落伤害，通常避开水。",
        ],
        139: [
            "鱿鱼",
            "鱿鱼是一种有八只触手的生物，生成在水中。鱿鱼总是会被动地朝向玩家，类似于其它被动型生物。",
        ],
        140: [
            "猪",
            "猪是一种被动型生物，可以被骑乘。猪的行为类似其它的被动型生物：它们会漫无目的地徘徊，避免从悬崖高处掉落造成跌落伤害，并且通常避开水。",
        ],
        141: [
            "凋灵骷髅",
            "凋灵骷髅是一种危险的攻击型生物，天然生成于下界要塞。",
        ],
        142: ["蠹虫", "蠹dù虫是一种小型的似虫攻击型生物。"],
        143: [
            "恶魂",
            "恶魂是一种巨大的、浮空的、会向玩家发射火球的生物，存在于下界。",
        ],
        144: [
            "鸡骑士",
            "鸡骑士是一种小僵尸、小僵尸村民、小尸壳或小僵尸猪人骑着鸡的罕见组合。",
        ],
        145: [
            "僵尸",
            "僵尸是一种常见的亡灵攻击型生物。僵尸会试图避开障碍，包括绝对悬崖以及熔岩，并且会尝试找到到达玩家位置的最短路径。",
        ],
        146: ["骷髅", "骷髅是能够使用弓进行远程攻击的亡灵生物。"],
        147: ["烈焰人", "烈焰人是一种有黄色皮肤和黑色眼睛的生物，存在于下界。"],
        148: ["末影螨", "末影螨是最小的一种敌对生物。"],
        149: [
            "女巫",
            "女巫是一种能够使用喷溅药水作为远程武器的攻击型生物，在防御时它们会使用有增益效果的药水。",
        ],
        150: ["爬行者", "爬行者是一种常见的，接近玩家后会爆炸的敌对生物。"],
        151: [
            "潜影贝",
            "潜影贝是在末路之地的外部末地岛的末地城生成的敌对生物，它们会将自己隐藏在贝壳里来潜伏在紫珀块旁。",
        ],
        152: ["史莱姆", "史莱姆是一种存在于沼泽生物群系和地底下的攻击型生物。"],
        153: ["守卫者", "守卫者是一种存在于水下的攻击型生物。"],
        154: [
            "岩浆怪",
            "岩浆怪是一种存在于下界的敌对生物，拥有一身深红色与黑色混杂的皮肤和一双橙黄色的眼睛。",
        ],
        155: [
            "远古守卫者",
            "远古守卫者是一种只生成在海底遗迹的敌对生物，是守卫者的更强变种。",
        ],
        156: [
            "蜘蛛骑士",
            "蜘蛛骑士是一种由骷髅、流髑或凋灵骷髅骑在蜘蛛或洞穴蜘蛛身上形成的攻击型生物。",
        ],

        157: [
            "狼",
            "狼是一种能够与玩家联合的中立型生物，可被驯服。自然生成的狼是未驯服的，如果玩家攻击它们，它们会变成敌对。",
        ],
        158: [
            "铁傀儡",
            "铁傀儡是一种大型的，强壮的，用来保护村民的效用性生物。",
        ],
        159: ["雪傀儡", "雪傀儡是一种效用型生物，可以帮助抵御敌对生物。"],
        160: [
            "北极熊",
            "北极熊是一种中立型的生物。但它们在被攻击后会变成敌对状态。它们会竖起后腿 ，然后用前爪来攻击目标生物和玩家。",
        ],
        161: [
            "洞穴蜘蛛",
            "铁傀儡是一种大型的，强壮的，用来保护村民的效用性生物。",
        ],
        162: [
            "僵尸猪人",
            "僵尸猪人是生活在下界的一种中立型生物。僵尸猪人空闲时的移动速度相当的慢。它们可以被淹死，但免疫火和熔岩造成的伤害。",
        ],
        163: [
            "末影人",
            "末影人是一种来自于末路之地、会随机传送的黑色中立型生物。",
        ],
        164: [
            "蜘蛛",
            "蜘蛛是一种能够爬墙的普通中立型生物。在亮度等级较低时，蜘蛛与玩家敌对；否则它们不会攻击，除非玩家首先攻击它们。",
        ],
    },
];
// 第二版_第五块-tj-nav切换
$(".tj-nav").on("click", "a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    // 生成右边nav列表
    let subHtml = "";
    $.each(nameArr[$(this).index()], function (i, n) {
        subHtml += `<a href="javascript:;" data-id="${i}"><img src="./upload/tj/pic${i}.png"
        alt=""></a>`;
    });
    $(".subNav").html(subHtml).find("a").eq(0).click();
    // 如果是第二个a则显示二级菜单
    if ($(this).index() == 1) {
        $(".tj-wrap").addClass("tbShengwu");
        // 选中第一个
        $(".sideNav a").eq(0).click();
        $(".sideNav").show();
    } else {
        $(".tj-wrap").removeClass("tbShengwu");
        $(".sideNav").hide();
    }
    $(".subNav a").eq(0).click();
});

// 第二版_第五块-sideNav切换
$(".subNav").on("click", "a", function () {
    let id = $(this).attr("data-id");
    // 显示选择状态
    $(this).addClass("active").siblings().removeClass("active");
    // 更换图片
    $(".bigImg img").attr("src", `./upload/tj/big/pic${id}.png`);
    // 更换名字和简介
    $(".desc p").html(
        `<em>${nameArr[$(".tj-nav .active").index()][id][0]}</em>${
            nameArr[$(".tj-nav .active").index()][id][1]
        }`
    );
    // 如果有合成配方显示并更新合成配方，没有则隐藏
    if (closeArr[$(".tj-nav .active").index()][id] != undefined) {
        $(".peifang").show();

        $(".peifang-ge img").each(function (i, n) {
            $(this).attr(
                "src",
                `./upload/tj/pic/pic${
                    closeArr[$(".tj-nav .active").index()][id][i]
                }.png`
            );
        });
        $(".peifang-img img").attr("src", `./upload/tj/big/pic${id}.png`);
    } else {
        $(".peifang").hide();
    }
});

// sideNav切换
$(".sideNav").on("click", "a", function () {
    let indxeArr;
    $(this).addClass("active").siblings().removeClass("active");
    $(".subNav a").hide();
    indxeArr = [
        [128, 129],
        [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
        [
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
        ],
        [130, 134, 157],
        [158, 159],
        [157, 160, 161, , 162, 163, 164],
    ];
    // 生成右边nav列表
    let subHtml = "";
    indxeArr[$(".sideNav .active").index()].forEach(function (n, i) {
        console.log(i, n);
        subHtml += `<a href="javascript:;" data-id="${n}"><img src="./upload/tj/pic${n}.png"
        alt=""></a>`;
    });
    $(".subNav").html(subHtml).find("a").eq(0).click();
});
