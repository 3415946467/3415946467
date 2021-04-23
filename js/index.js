setTimeout(function () {
    $('.loding').fadeOut(400);
    $('.box').fadeIn(1000);
    
},3000);
var bgm2 = document.querySelector('.bgm');
var ay_no = document.querySelector('.ay_no');
var ay_yes = document.querySelector('.ay_yes');
bgm2.play()
$('.music_btn').on('click', function () {
    if (bgm2.paused) {
        $(this).css('backgroundImage', 'url(img/music_1.png)')
        bgm2.play();
    } else {
        $(this).css('backgroundImage', 'url(img/music_2.png)')
        bgm2.pause()
    }
})
setTimeout(function () {
    $(function() {
        var jroll = new JRoll("#wrapper", {scrollBarY:true});
        jroll.refresh();
    })
}, 300)
var ans_arr = [];
$('.answer li').click( function () {
    var that = $(this);
    var height = that.height();
    console.log(height);
    var index = that.parents('.answer').data().id;
    that.parents(".answer").attr("data-index","1")
    console.log(index);
    var popSrc = document.querySelector('#pop_src');
    popSrc.src = ' ';
    console.log(that.data().answer);
    if (that.data().answer == 'no') {
        ay_no.play();
        that.children('span').show();
        that.addClass('active');
        that.css('z-index', '4');
        ans_arr.push ('1');
        that.attr({style:"pointer-events:none;"});
        that.siblings().attr({style:"pointer-events:none;"});
        that.siblings().addClass('bh');
        that.siblings('*[data-answer="yes"]').removeClass('bh');
        that.siblings('*[data-answer="yes"]').children('div').css('height', height);
        that.siblings('*[data-answer="yes"]').children('.zbox').show()
        setTimeout(function () {
            that.siblings('*[data-answer="yes"]').children('img').hide();
        }, 300)
        that.siblings('*[data-answer="yes"]').children('span').show();
        setTimeout(function () {
            $('.pop').fadeIn(200)
            popSrc.src = 'img/pop' + index + '.png'
        }, 300);
    }
    if (that.data().answer == 'yes') {
        ay_yes.play();
        that.children('span').show();
        that.addClass('activeion');
        ans_arr.push ('1');
        that.attr({style:"pointer-events:none;"});
        that.siblings().attr({style:"pointer-events:none;"});
        that.children('.zbox').css('height', height)
        that.children('.zbox').show()
        setTimeout(function () {
            that.children('img').hide()
        }, 300)
        that.siblings().children('span').hide();
        that.siblings().addClass('bh');
        setTimeout(function () {
            $('.pop').fadeIn(200)
            popSrc.src = 'img/pop' + index + '.png'
        }, 300)
    }
    if (that.data().answer == 'yes' && that.siblings().data().answer == 'yes') {
        // that.siblings().css('z-index', '1');
        ay_yes.play();
        that.siblings().children('span').show();
        that.attr({style:"pointer-events:none;"});
        that.siblings().attr({style:"pointer-events:none;"});
        that.siblings().removeClass('bh');
        ans_arr.push ('1');
        that.addClass('activeion');
        that.siblings().css('height', height)
        that.siblings().children('.zbox').css('height', height)
        that.siblings().children('.zbox').show()
        setTimeout(function () {
            that.siblings().children('img').hide()
        }, 300)
        // that.siblings().show()
        // that.css('z-index', '5');
        setTimeout(function () {
            $('.pop').fadeIn(200)
            popSrc.src = 'img/pop' + index + '.png'
        }, 300);
    }
// 正确答案z-index在最上层
})
$('.pop').click(function() {
    $(this).fadeOut(500);
});

$('.ans_btn').click(function() {
    var ans = document.querySelectorAll('.answer');
    console.log(ans_arr);
    if (ans_arr.length > ans.length) {
        $(".box").fadeOut(300);
        $(".choice").fadeIn(1000);
    }
});
$(".choice li").click(function() {
    var choice_index = $(this).index() + 1;
    $('.username-box').fadeIn(400);
    $(".affirm").click(function() {
        if ($(".username-box input")[0].value == '') {
            $(".pop_name").fadeIn(300);
            $('.pop_name').click(function() {
                $(this).fadeOut(500);
            });
        } else {
            $(".choice").fadeOut(400);
            $('.username-box').fadeOut(400);
            $(".end").fadeIn(1000);
            $('.end .people')[0].src = 'img/pic' + choice_index + '.png';
            $('.end .exhImg')[0].src = 'img/mb' + choice_index + '.png';
        }
    });
    $(".return").click(function() {
        $('.username-box').fadeOut(400);
    });
    $ (".top-left").click(function() {
        $(".choice").fadeIn(1000);
        $(".end").fadeOut(400);
    });
    $ (".top-right").click(function() {
        $(".end").fadeOut(400);
        $(".box").fadeIn(400);
        location.reload();
    });
})
$('.bootom-left').click (function() {
    $(".fenx").fadeIn(400);
})
$('.fenx').click (function() {
    $(".fenx").fadeOut(400);
})