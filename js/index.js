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
    $(".qrcode div").animate(
        {
            top: 0,
        },
        2000,
        function () {
            $(this).animate(
                {
                    top: $(this).siblings("img").height(),
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

// 游戏目录显示隐藏
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

// 游戏目录小图标
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

// 导航栏右边轮播
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

// 热点推荐
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

// 打开视频
$(".header-video a").on("click", function () {
    $(".video").show().find("video").trigger("play")[0].currentTime = 0;
});

// 关闭视频
$(".video .stop").on("click", function () {
    $(".video").hide().find("video").trigger("pause");
});

// 轮播图
function getGallery(index) {
    let $index = $(".gallery_active").index();
    if (index != null) {
        $index = index;
    }
    let $length = $(".gallery_container").find(".gallery_item").length;
    console.log($index, $length);
    // 小点
    $(".gallery_pagination_list")
        .find("li")
        .removeClass("active")
        .eq($index + 1)
        .addClass("active");
    if ($index == $length - 1) {
        console.log(1, $length - 1, 0, 1);
        // 左
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_left_middle")
            .eq($length - 1)
            .addClass("gallery_left_middle");
        // 中
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_active")
            .eq(0)
            .addClass("gallery_active");
        // 右
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_right_middle")
            .eq(1)
            .addClass("gallery_right_middle");
        // 小点
        $(".gallery_pagination_list")
            .find("li")
            .removeClass("active")
            .eq(0)
            .addClass("active");
    } else if ($index == $length - 2) {
        console.log(2, $index, $index + 1, 0);
        // 左
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_left_middle")
            .eq($index)
            .addClass("gallery_left_middle");
        // 中
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_active")
            .eq($index + 1)
            .addClass("gallery_active");
        // 右
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_right_middle")
            .eq(0)
            .addClass("gallery_right_middle");
    } else if ($index <= 0) {
        console.log(3, $index, $index + 1, $index + 2);
        // 左
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_left_middle")
            .eq($index)
            .addClass("gallery_left_middle");
        // 中
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_active")
            .eq($index + 1)
            .addClass("gallery_active");
        // 右
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_right_middle")
            .eq($index + 2)
            .addClass("gallery_right_middle");
    } else {
        console.log(4, $index, $index + 1, $index + 2);
        // 左
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_left_middle")
            .eq($index)
            .addClass("gallery_left_middle");
        // 中
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_active")
            .eq($index + 1)
            .addClass("gallery_active");
        // 右
        $(".gallery_container")
            .find(".gallery_item")
            .removeClass("gallery_right_middle")
            .eq($index + 2)
            .addClass("gallery_right_middle");
    }
}

// 自动轮播图
let GalleryTimer = setInterval(getGallery, 3000);

// 轮播图下一页
$(".gallery_next").on("click", function () {
    clearInterval(GalleryTimer);
    getGallery($(".gallery_active").index());
    GalleryTimer = setInterval(getGallery, 3000);
});

// 轮播图上一页
$(".gallery_prev").on("click", function () {
    clearInterval(GalleryTimer);
    getGallery($(".gallery_active").index() - 2);
    GalleryTimer = setInterval(getGallery, 3000);
});

// 轮播图小点跳转
$(".gallery_pagination_list").on("click", "li", function () {
    clearInterval(GalleryTimer);
    getGallery($(this).index() - 1);
    GalleryTimer = setInterval(getGallery, 3000);
});

// 轮播图小点宽度自适应
$(".gallery_pagination_list").css({
    width:
        $(".gallery_pagination_list li").length *
        ($(".gallery_pagination_list li").width() + 16),
    marginLeft: -(
        ($(".gallery_pagination_list li").length *
            ($(".gallery_pagination_list li").width() + 16)) /
        2
    ),
});

// 滚动到指定位置两侧弹出
var downloadFlag = true;
function getDownload() {
    if ($(".left-download").offset().top > $(".carousel").offset().top) {
        if (downloadFlag) {
            downloadFlag = false;
            $(".left-download").animate(
                {
                    left: 30,
                },
                300
            );
            $(".right-download").animate(
                {
                    right: 30,
                },
                300
            );
        }
    } else {
        if (!downloadFlag) {
            downloadFlag = true;
            $(".left-download").animate(
                {
                    left: -210,
                },
                300
            );
            $(".right-download").animate(
                {
                    right: -210,
                },
                300
            );
        }
    }
}
let downloadTimer = setInterval(getDownload, 200);

// 两侧弹出窗口关闭按钮
$(".btn-downloadClose").on("click", function () {
    downloadFlag = false;
    $(this).parent().animate(
        {
            left: -210,
        },
        300
    );
});
$(".btn-dsdownloadClose").on("click", function () {
    downloadFlag = false;
    $(this).parent().animate(
        {
            right: -210,
        },
        300
    );
});
