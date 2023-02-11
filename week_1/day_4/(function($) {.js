(function($) {
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height();
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = 500;
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                var windowWidth = $window.width();
                if (windowWidth > 1008) {
                    $this.css('backgroundPosition', xpos + " " + Math.round(((firstTop - pos) * speedFactor) - 40) + "px");
                } else {
                    $this.css('backgroundPosition', xpos + " 0px");
                }
                console.log(windowWidth);
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);
$('.header').parallax("50%", 0.1);
$('.block-slogan02').parallax("50%", 0.1);
$('.block-hpform').parallax("50%", 0.1);
$('.benefits02').parallax("50%", 0.1);


var loc = window.location.pathname;
var menus = $(".top-nav, .side-nav");
menus.find("a").each(function() {
    $(this).toggleClass("active", $(this).attr("href") == loc)
});
var owl = $('.owl-carousel.header a.owlLightbox');
owl.each(function() {
    var link = $(this).attr('data-description');
    if (link === "") {} else {
        if (link.match("^http")) {
            $(this).removeClass().attr({
                'href': link,
                'target': '_blank'
            });
        } else {
            $(this).removeClass().attr({
                'href': link,
                'target': '_self'
            });
        }
    }
});
document.head = document.head || document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.id = 'dynamic-favicon';
link.rel = 'icon';
link.href = 'ressources/images/cae25fef1bbb.png';
document.head.appendChild(link);