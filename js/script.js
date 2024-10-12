
var ishamburgermenu = false;
const currentYear = new Date().getFullYear();

var linknavColor = "#E74C3C";

function visit(url, param, blank) {
    if (param == null) {
        if (!blank) {
            location.href = url;
        } else {
            window.open(url);
        }
    } else {
        if (!blank) {
            location.href = url + "?" + param;
        } else {
            window.open(url + "?" + param);
        }

    }

}



$(document).ready(function () {
    var el_nav = $(".nav-links > li:not(:first-child)");
    if (ismobile()) {
        el_nav.hide()
    }
    skillanim()
    var waypoints = []
    $('.waypoint').each(function (index, value) {

        var waypoint = new Waypoint({
            element: value,
            handler: function () {
                switch (this.element.id) {
                    case "product":

                        break;
                    default:
                        break;
                }


            },
            offset: '50%'
        });
        waypoints.push(waypoint)
    });

    $("#curyear").text(currentYear)




    var currentIndex = 0;
    var images = [
        'img/billboard.png',
        'img/billboard4.png',
        'img/billboard3.png',
    ];
    $('.leftarrow').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        $('.billboard').css('background-image', 'url(' + images[currentIndex] + ')');
    });

    $('.rightarrow').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        $('.billboard').css('background-image', 'url(' + images[currentIndex] + ')');
    });



    // $(document).on("contextmenu", function(e) {
    //     e.preventDefault(); 
    //     if ($("#warning").length === 0) {
    //         $("body").append('<div id="warning">Right-click is disabled.</div>');
    //     }
    //     $("#warning").fadeIn(400).delay(2000).fadeOut(400);
    // });

});




$(window).scroll(function () {

    $(".nav-links li a").hover(
        function () {
            $(this).css("color", "#E74C3C");
        },
        function () {
            $(this).css("color", linknavColor);
        }
    );
    var el_burger = $(".nav-links > li:first-child");
    var el_nav = $(".nav-links > li:not(:first-child)");
    var headerNav = $("#headerNav");
    var linkNav = $(".nav-links li a ");
    var logo = $(".logo img");
    var header = $("header");
    var nav = $("nav");
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
        headerNav.css({
            "position": "fixed",
            "top": "0",
            "background-color": "#333"
        });
        linknavColor = "#cccccc";
        linkNav.css({
            "color": linknavColor
        })

        if (ismobile()) {
            el_burger.css({
                "background-image": "url('img/hamburger.png')",
                "height": "20px"
            })
            el_nav.css({
                "background-color": "#333",
                "border": "3px solid #333",
            })
        }

        logo.css({
            "height": "30px"
        })
        header.css({
            "height": "50px"
        })
        nav.css({
            "height": "50px"
        })
    } else {
        headerNav.css({
            "position": "relative",
            "background-color": "transparent"
        });
        linknavColor = "#333";
        linkNav.css({
            "color": linknavColor
        })

        if (ismobile()) {

            el_burger.css({
                "background-image": "url('img/hamburger_black.png')",
                "height": "30px"
            })
            el_nav.css({
                "background-color": "#ccc",
                "border": "3px solid #ccc",
            })
        }
        logo.css({
            "height": "40px"
        })
        header.css({
            "height": "60px"
        })
        nav.css({
            "height": "60px"
        })
    }
});

function hamburgermenu() {
    var el_nav = $(".nav-links > li:not(:first-child)");
    if (ishamburgermenu) {
        el_nav.hide();
        ishamburgermenu = false;
    } else {
        ishamburgermenu = true;
        el_nav.show();
        var distance = 8;
        var i = 0;

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            el_nav.each(function () {
                if (i > 0) { distance = distance + 40; }

                $(this).css({
                    "padding": "8px",
                    "text-align": "center",
                    "position": "absolute",
                    "display": "block",
                    "left": "0",
                    "margin-top": distance,
                    "width": "100%",
                    "color": "#fff",
                    "background-color": "#333",
                    "border": "3px solid #333"
                })
                i++;
            });
        } else {
            el_nav.each(function () {
                if (i > 0) { distance = distance + 40; }

                $(this).css({
                    "padding": "8px",
                    "text-align": "center",
                    "position": "absolute",
                    "display": "block",
                    "left": "0",
                    "margin-top": distance,
                    "width": "100%",
                    "color": "#fff",
                    "background-color": "#ccc",
                    "border": "3px solid #ccc"
                })
                i++;
            });
        }

    }
}


function scrollToElement(el) {

    if (ismobile()) {
        var el_nav = $(".nav-links > li:not(:first-child)")
        el_nav.hide()
        ishamburgermenu = false
    }


    $("html, body").animate({
        scrollTop: $("#" + el).offset().top - 80
    }, {
        duration: 1000,
        easing: "swing"
    });
}


function ismobile() {
    const userAgent = window.navigator.userAgent;
    const mobileCheck = /Mobi|Android|iPhone|iPad|iPod/.test(userAgent);
    const mediaQueryCheck = window.matchMedia("(max-width: 999px)").matches;

    return mobileCheck || mediaQueryCheck;
}

function arr_keyframe(num, value) {
    $.keyframe.define([{
        name: 'pbanim' + num,
        'from': { 'width': '0' },
        'to': { 'width': value + '%' },
    }]);
}

function skillanim() {
    var num = 0;
    var pbval = ["75", "75", "70", "20", "70", "5", "70", "75", "70", "75", "5", "45", "5", "60", "5", "5", "5", "70"];
    var el = $('div.progressbar div');
    el.each(function () {
        arr_keyframe(num, pbval[num])
        $(this).playKeyframe({
            name: 'pbanim' + num,
            duration: '1s',
            timingFunction: 'linear', //
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards'
        });

        num++;
    })
    num = 0;
    $('.skill_label .lblpercent').each(function () {
        animateValue(this, 0, pbval[num], 1000);
        num++
    });

}




function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = "(" + Math.floor(progress * (end - start) + start) + "%)";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}